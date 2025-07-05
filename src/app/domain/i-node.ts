import {IStorageNode} from "./i-storage-node";

export interface INode extends IStorageNode {
    id: string;
    position: { x: number; y: number };
}
