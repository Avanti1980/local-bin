import HeadingIdGenerator from './markdown-engine/heading-id-generator';
import { addFileProtocol, getCrossnoteBuildDirectory, openFile, setCrossnoteBuildDirectory, uploadImage, useExternalAddFileProtocolFunction } from './utility';
export declare const utility: {
    addFileProtocol: typeof addFileProtocol;
    getCrossnoteBuildDirectory: typeof getCrossnoteBuildDirectory;
    openFile: typeof openFile;
    setCrossnoteBuildDirectory: typeof setCrossnoteBuildDirectory;
    useExternalAddFileProtocolFunction: typeof useExternalAddFileProtocolFunction;
    uploadImage: typeof uploadImage;
};
export * from './code-chunk/code-chunk-data';
export * from './markdown-engine';
export * from './markdown-engine/transformer';
export * from './notebook';
export { loadConfigsInDirectory, wrapNodeFSAsApi, } from './notebook/config-helper';
export { HeadingIdGenerator };
