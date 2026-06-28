#!/usr/bin/env node
/**
 * download-assets.js
 * --------------------------------------------------------------
 * Scarica gli asset grafici generati con Higgsfield e li salva
 * nella cartella /public/images del progetto.
 *
 * Gli URL sono ospitati sul CDN di Higgsfield (CloudFront) e sono
 * permanenti. Esegui questo script una volta dopo aver clonato il
 * repository, PRIMA di `npm run build`.
 *
 * Uso:  node scripts/download-assets.js
 * --------------------------------------------------------------
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const ASSETS = [
  {
    name: "hero-bg.png",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3Fj63Yn1HCHm9jAbjHUEoNcT1nE/hf_20260627_163230_383c5522-970f-46e9-8a88-a9962d0cb93f.png",
  },
  {
    name: "scm-flow.png",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3Fj63Yn1HCHm9jAbjHUEoNcT1nE/hf_20260627_163234_5784d07a-7d57-43a4-ba1e-71065f996dee.png",
  },
  {
    name: "logo-mark.png",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3Fj63Yn1HCHm9jAbjHUEoNcT1nE/hf_20260627_163239_1fc9c2e7-c604-4f53-bfe3-1d3b55fb4d8c.png",
  },
  {
    // Social card 1200x630 — salvare anche come public/og-image.jpg
    name: "og-image.png",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3Fj63Yn1HCHm9jAbjHUEoNcT1nE/hf_20260627_163239_1fc9c2e7-c604-4f53-bfe3-1d3b55fb4d8c.png",
  },
];

const OUT_DIR = path.join(__dirname, "..", "public", "images");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function download(asset) {
  return new Promise((resolve, reject) => {
    const dest = path.join(OUT_DIR, asset.name);
    const file = fs.createWriteStream(dest);
    https
      .get(asset.url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} per ${asset.name}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => {
            console.log(`✓ ${asset.name}`);
            resolve();
          });
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

(async () => {
  console.log("Scaricamento asset Higgsfield…\n");
  for (const asset of ASSETS) {
    try {
      await download(asset);
    } catch (err) {
      console.error(`✗ ${asset.name}: ${err.message}`);
    }
  }
  console.log("\nFatto. Asset salvati in public/images/");
})();
