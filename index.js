#!/usr/bin/env node

const [pxValue, baseSize = 16] = process.argv.slice(2).map(Number);

if (!pxValue) {
  console.log("Usage: px-to-rem <px> [baseSize]\nExample: px-to-rem 16 16");
  process.exit(1);
}

const remValue = pxValue / baseSize;
console.log(`${pxValue}px = ${remValue}rem (Base: ${baseSize}px)`);