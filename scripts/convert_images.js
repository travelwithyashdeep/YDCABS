const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImages() {
  const baseDir = path.join(__dirname, '../public');

  // 1. Hero background image
  const heroPath = path.join(baseDir, 'images/hero-bg.png');
  const heroOut = path.join(baseDir, 'images/hero-bg.webp');
  if (fs.existsSync(heroPath)) {
    const meta = await sharp(heroPath).metadata();
    const origSize = (fs.statSync(heroPath).size / 1024).toFixed(1);
    console.log(`Original hero-bg size: ${origSize} KB (${meta.width}x${meta.height})`);
    await sharp(heroPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(heroOut);
    const newSize = (fs.statSync(heroOut).size / 1024).toFixed(1);
    console.log(`Optimized hero-bg WebP size: ${newSize} KB`);
  }

  // 2. Car images
  const carsDir = path.join(baseDir, 'cars');
  const carFiles = fs.readdirSync(carsDir).filter(f => f.endsWith('.png'));

  for (const file of carFiles) {
    const inputPath = path.join(carsDir, file);
    const outputName = file.replace(/\.png$/, '.webp');
    const outputPath = path.join(carsDir, outputName);

    const meta = await sharp(inputPath).metadata();
    const origSize = (fs.statSync(inputPath).size / 1024).toFixed(1);

    let pipeline = sharp(inputPath);
    if (meta.width > 500) {
      pipeline = pipeline.resize({ width: 500 });
    }
    await pipeline
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const newSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
    console.log(`Car ${file} (${origSize} KB) -> ${outputName} (${newSize} KB)`);
  }
}

processImages().catch(console.error);
