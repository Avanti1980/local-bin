import { CodeChunkData } from '../code-chunk/code-chunk-data';
import { Notebook } from '../notebook';
export declare function processGraphs(text: string, { fileDirectoryPath, projectDirectoryPath, imageDirectoryPath, imageFilePrefix, useRelativeFilePath, codeChunksData, graphsCache, addOptionsStr, notebook, }: {
    fileDirectoryPath: string;
    projectDirectoryPath: string;
    imageDirectoryPath: string;
    imageFilePrefix: string;
    useRelativeFilePath: boolean;
    codeChunksData: {
        [key: string]: CodeChunkData;
    };
    graphsCache: {
        [key: string]: string;
    };
    addOptionsStr: boolean;
    notebook: Notebook;
}): Promise<{
    outputString: string;
    imagePaths: string[];
}>;
