"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeMocks = void 0;
const tslib_1 = require("tslib");
const cli_ux_1 = require("cli-ux");
const fs_extra_1 = require("fs-extra");
const path_1 = tslib_1.__importDefault(require("path"));
const folder_tree_1 = require("../folder-tree");
const utils_1 = require("./utils");
const unique_filename_1 = require("./utils/unique-filename");
const writeMocks = (targetPath, data, log, options) => {
    const newFiles = (0, utils_1.entrysToPathsWithData)(data, targetPath);
    log('\nFolder tree which will be applied:\n');
    (0, folder_tree_1.folderTree)(newFiles.map(({ filePath, fileName }) => path_1.default.join(filePath, fileName)));
    if (options.isDryRun) {
        log('\nNo files were written. If you want to write files remove the (--dry-run) flag.');
    }
    else {
        cli_ux_1.cli.action.start('\nwriting files');
        newFiles.forEach(({ filePath, fileName, fileData }) => {
            if (!fileData) {
                return;
            }
            (0, fs_extra_1.ensureDirSync)(filePath);
            try {
                const uniqueFileName = options.shouldCreateUnique ? (0, unique_filename_1.getUniqueFileName)(fileName, filePath) : fileName;
                (0, fs_extra_1.writeFileSync)(path_1.default.join(filePath, uniqueFileName), fileData);
            }
            catch (error) {
                console.error('Error writing file:', error);
            }
        });
        cli_ux_1.cli.action.stop();
    }
};
exports.writeMocks = writeMocks;
