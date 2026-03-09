import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";
import { existsSync } from "fs";

const ROOT = process.cwd();
const IMG_DIR = join(ROOT, "img");
const PUBLIC_DIR = join(ROOT, "public");
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 85;

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width = MAX_WIDTH, quality = WEBP_QUALITY, crop } = options;
  const info = await sharp(inputPath).metadata();
  let pipeline = sharp(inputPath);

  if (crop) {
    const w = info.width || 1;
    const h = info.height || 1;
    const cropSize = Math.round(Math.min(w, h) * crop);
    const left = Math.max(0, Math.round((w - cropSize) / 2));
    const top = Math.max(0, Math.round((h - cropSize) * 0.12));
    pipeline = pipeline.extract({
      left,
      top,
      width: Math.min(cropSize, w - left),
      height: Math.min(cropSize, h - top),
    });
  }

  const actualWidth = crop ? 600 : Math.min(info.width || width, width);
  await pipeline
    .resize(actualWidth, null, { withoutEnlargement: !crop })
    .webp({ quality })
    .toFile(outputPath);

  const inputSize = (await stat(inputPath)).size;
  const outputSize = (await stat(outputPath)).size;
  const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
  console.log(`  ✓ ${inputPath.split("/").pop()} → ${(outputSize / 1024).toFixed(1)}KB (${savings}% menor)`);
  return outputPath;
}

async function main() {
  console.log("Otimizando imagens...\n");

  const images = [
    {
      input: join(IMG_DIR, "vinicius_original_foto_ceo.jpg"),
      output: join(PUBLIC_DIR, "foto_ceo.webp"),
      width: 600,
      crop: 0.9,
    },
    {
      input: join(IMG_DIR, "logo_arkhedigital.png"),
      output: join(PUBLIC_DIR, "logo_arkhedigital.webp"),
      width: 800,
    },
    {
      input: join(IMG_DIR, "logo_arkhedigital_maior.png"),
      output: join(PUBLIC_DIR, "logo_arkhedigital_maior.webp"),
      width: 800,
    },
    {
      input: join(IMG_DIR, "simbolo_arkhedigital.png"),
      output: join(PUBLIC_DIR, "simbolo_arkhedigital.webp"),
      width: 400,
    },
  ];

  for (const img of images) {
    if (!existsSync(img.input)) {
      console.log(`  ⚠ ${img.input.split("/").pop()} não encontrado, pulando`);
      continue;
    }
    await optimizeImage(img.input, img.output, {
      width: img.width,
      crop: img.crop,
    });
  }

  console.log("\nConcluído!");
}

main().catch(console.error);
