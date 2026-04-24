import { FileSystemApi, NotebookConfig } from './types';
export declare function loadConfigsInDirectory(directoryPath: string, fileSystem: FileSystemApi, createDirectoryIfNotExists?: boolean): Promise<Partial<NotebookConfig>>;
export declare function wrapNodeFSAsApi(): FileSystemApi;
