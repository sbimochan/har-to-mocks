"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderTree = void 0;
const cli_ux_1 = require("cli-ux");
const folderTree = (pathList) => {
    const tree = cli_ux_1.cli.tree();
    pathList.forEach((path) => {
        const parts = path.split('/');
        let level = tree;
        for (const part of parts) {
            if (!level.nodes[part]) {
                level.insert(part);
            }
            level = level.nodes[part];
        }
    });
    tree.display();
};
exports.folderTree = folderTree;
