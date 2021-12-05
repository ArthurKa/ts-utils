import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export const downloadFile = async (url: string, filePath: string) => {
  const download = async () => {
    const { body } = await fetch(url);
    const fileStream = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
      body.pipe(fileStream);
      body.on('error', reject);
      fileStream.on('finish', resolve);
      fileStream.on('error', reject);
    });
  };

  try {
    await download();
  } catch(e) {
    await fs.promises.mkdir(path.parse(filePath).dir, { recursive: true });
    await download();
  }
};

export * from './frontend';
