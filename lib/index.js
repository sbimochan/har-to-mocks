"use strict";
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const fs_extra_1 = require("fs-extra");
const update_notifier_1 = tslib_1.__importDefault(require("update-notifier"));
const har_to_mocks_1 = require("./har-to-mocks");
class HarToMocks extends command_1.Command {
    async run() {
        const pkg = require('../package.json');
        (0, update_notifier_1.default)({
            pkg,
            updateCheckInterval: 100,
            shouldNotifyInNpmScript: true,
        }).notify();
        const process = new har_to_mocks_1.HarToMocksProcess(this.log.bind(this));
        const { args, flags: usedFlags } = this.parse(HarToMocks);
        if (args.file && typeof args.file === 'string') {
            const data = (await (0, fs_extra_1.readJson)(args.file));
            process.extract(data, {
                methods: usedFlags.method,
                resourceType: usedFlags.type,
                url: usedFlags.url,
            });
        }
        if (args.to && typeof args.to === 'string') {
            process.write(args.to, usedFlags['dry-run'], usedFlags.uniqueFiles);
        }
        this.log('');
    }
}
HarToMocks.description = 'xExtract response from .har file and create JSON mocks for mock server.';
HarToMocks.flags = {
    version: command_1.flags.version({ char: 'v' }),
    help: command_1.flags.help({ char: 'h' }),
    url: command_1.flags.string({ char: 'u', description: 'filter by url' }),
    method: command_1.flags.string({
        char: 'm',
        options: Object.values(har_to_mocks_1.Method),
        description: 'filter by method. You can use multiple options, for example: --method=GET --method=POST',
        default: [har_to_mocks_1.Method.GET],
        multiple: true,
    }),
    type: command_1.flags.enum({
        char: 't',
        options: Object.values(har_to_mocks_1.ResourceType),
        description: 'filter by resourceType',
        default: har_to_mocks_1.ResourceType.xhr,
    }),
    uniqueFiles: command_1.flags.boolean({ description: 'to create unique files per each xhr' }),
    'dry-run': command_1.flags.boolean({ description: 'to not write files, just show results' }),
};
HarToMocks.args = [
    { name: 'file', description: 'sorce file (.har) path', require: true },
    { name: 'to', description: 'path to your mocks/api folder' },
];
module.exports = HarToMocks;
