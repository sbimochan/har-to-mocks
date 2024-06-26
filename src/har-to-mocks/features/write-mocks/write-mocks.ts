import { cli } from 'cli-ux';
import { ensureDirSync, writeFileSync } from 'fs-extra';
import path from 'path';

import type { Entry, Logger } from '../../types';
import { folderTree } from '../folder-tree';
import { entrysToPathsWithData } from './utils';
import { getUniqueFileName } from './utils/unique-filename';

interface Options {
  isDryRun: boolean;
  shouldCreateUnique: boolean;
}

export const writeMocks = (targetPath: string, data: Entry[], log: Logger, options: Options): void => {
  const newFiles = entrysToPathsWithData(data, targetPath);
  log('\nFolder tree which will be applied:\n');
  folderTree(newFiles.map(({ filePath, fileName }) => path.join(filePath, fileName)));

  if (options.isDryRun) {
    log('\nNo files were written. If you want to write files remove the (--dry-run) flag.');
  } else {
    cli.action.start('\nwriting files');
    newFiles.forEach(({ filePath, fileName, fileData }) => {
      if (!fileData) {
        return;
      }
      ensureDirSync(filePath);
      try {
        const uniqueFileName = options.shouldCreateUnique ? getUniqueFileName(fileName, filePath) : fileName;
        writeFileSync(path.join(filePath, uniqueFileName), fileData);
      } catch (error) {
        console.error('Error writing file:', error);
      }
    });
    cli.action.stop();
  }
};
