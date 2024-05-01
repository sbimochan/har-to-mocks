import { Command, flags } from '@oclif/command';
import { ResourceType } from './har-to-mocks';
declare class HarToMocks extends Command {
    static description: string;
    static flags: {
        version: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        url: flags.IOptionFlag<string | undefined>;
        method: flags.IOptionFlag<string[]>;
        type: flags.IOptionFlag<ResourceType>;
        uniqueFiles: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        'dry-run': import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    static args: ({
        name: string;
        description: string;
        require: boolean;
    } | {
        name: string;
        description: string;
        require?: undefined;
    })[];
    run(): Promise<void>;
}
export = HarToMocks;
