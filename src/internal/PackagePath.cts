import { resolve } from 'path';

function getPackagePath() {
  return resolve(__dirname, '../../package.json');
}

export const PackagePath = getPackagePath();
