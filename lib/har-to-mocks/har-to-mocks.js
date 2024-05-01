"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarToMocksProcess = void 0;
const features_1 = require("./features");
class HarToMocksProcess {
    constructor(log) {
        this.log = log;
        this.data = [];
    }
    extract(fileContent, filter) {
        const { methods, resourceType, url } = filter;
        const { entries } = fileContent.log;
        let filtred = entries;
        if (url) {
            filtred = filtred.filter((e) => e.request.url.includes(url));
        }
        if (resourceType) {
            filtred = filtred.filter((e) => e._resourceType === resourceType);
        }
        if (methods) {
            filtred = filtred.filter((e) => methods.includes(e.request.method));
        }
        this.log('\nFiltered requests:\n');
        (0, features_1.resultTable)(filtred, this.log);
        this.data = filtred;
    }
    write(targetPath, isDryRun = false, shouldCreateUnique = false) {
        (0, features_1.writeMocks)(targetPath, this.data, this.log, { isDryRun, shouldCreateUnique });
    }
}
exports.HarToMocksProcess = HarToMocksProcess;
