"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultTable = void 0;
const cli_ux_1 = require("cli-ux");
const utils_1 = require("./utils");
const columns = {
    name: {
        minWidth: 24,
    },
    method: {
        minWidth: 7,
    },
    path: {
        minWidth: 14,
    },
};
const resultTable = (data, log) => {
    cli_ux_1.cli.table(data.map(utils_1.extractToColumns), columns, {
        printLine: log,
    });
};
exports.resultTable = resultTable;
