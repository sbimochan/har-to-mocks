import type { Entry, Method } from '../../../types';
export interface Columns {
    name: string;
    method: Method;
    path: string;
}
export declare const extractToColumns: (entry: Entry) => Columns;
