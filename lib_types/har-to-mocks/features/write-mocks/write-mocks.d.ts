import type { Entry, Logger } from '../../types';
interface Options {
    isDryRun: boolean;
    shouldCreateUnique: boolean;
}
export declare const writeMocks: (targetPath: string, data: Entry[], log: Logger, options: Options) => void;
export {};
