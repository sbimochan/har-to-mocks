"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractToColumns = void 0;
const url_1 = require("url");
const extractToColumns = (entry) => {
    const parsedUrl = new url_1.URL(entry.request.url);
    const lastPartOfPath = parsedUrl.pathname.split('/').pop();
    return {
        name: lastPartOfPath,
        method: entry.request.method,
        path: parsedUrl.pathname,
    };
};
exports.extractToColumns = extractToColumns;
