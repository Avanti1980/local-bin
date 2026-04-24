import { CodeChunkData } from '../code-chunk/code-chunk-data';
import { Notebook } from '../notebook';
export declare function markdownConvert(text: any, { projectDirectoryPath, fileDirectoryPath, protocolsWhiteListRegExp, filesCache, codeChunksData, graphsCache, notebook, }: {
    projectDirectoryPath: string;
    fileDirectoryPath: string;
    protocolsWhiteListRegExp: RegExp;
    filesCache: {
        [key: string]: string;
    };
    codeChunksData: {
        [key: string]: CodeChunkData;
    };
    graphsCache: {
        [key: string]: string;
    };
    notebook: Notebook;
}, config: object): Promise<string>;
