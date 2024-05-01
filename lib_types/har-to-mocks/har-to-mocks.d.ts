import type { Entry, Filter, Har, Logger } from './types';
export declare class HarToMocksProcess {
    private log;
    data: Entry[];
    constructor(log: Logger);
    extract(fileContent: Har, filter: Filter): void;
    write(targetPath: string, isDryRun?: boolean, shouldCreateUnique?: boolean): void;
}
