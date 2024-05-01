"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueFileName = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const getUniqueFileName = (baseFileName, filePath) => {
    let counter = 1;
    let fileName = baseFileName;
    while (fs_1.default.existsSync(`${filePath}/${fileName}`)) {
        fileName = `${counter}_${fileName}`;
        counter++;
    }
    return fileName;
};
exports.getUniqueFileName = getUniqueFileName;
