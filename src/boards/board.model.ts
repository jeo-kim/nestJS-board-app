export interface Board {
    id: string;
    title: string;
    description: string;
    status:BoardsStatus;
}

export enum BoardsStatus {
    PUBLIC = 'public',
    PRIVATE = 'private'
}