"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entrysToPathsWithData = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const url_1 = require("url");
const entrysToPathsWithData = (entrys, targetPath) => entrys.map((entry) => {
    const parsedUrl = new url_1.URL(entry.request.url);
    const filePath = path_1.default.join(targetPath, parsedUrl.pathname, parsedUrl.search);
    const fileName = `${entry.request.method.toUpperCase()}.json`;
    const fileData = entry.response.content.text;
    return {
        filePath,
        fileName,
        fileData,
    };
});
exports.entrysToPathsWithData = entrysToPathsWithData;
