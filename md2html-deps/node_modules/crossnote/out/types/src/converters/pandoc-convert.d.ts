import { CodeChunkData } from '../code-chunk/code-chunk-data';
import { Notebook } from '../notebook';
export declare function pandocConvert(text: any, { fileDirectoryPath, projectDirectoryPath, sourceFilePath, filesCache, protocolsWhiteListRegExp, codeChunksData, graphsCache, notebook, }: {
    fileDirectoryPath: string;
    projectDirectoryPath: string;
    sourceFilePath: string;
    filesCache: {
        [key: string]: string;
    };
    protocolsWhiteListRegExp: RegExp;
    codeChunksData: {
        [key: string]: CodeChunkData;
    };
    graphsCache: {
        [key: string]: string;
    };
    notebook: Notebook;
}, config?: {}): Promise<string>;
