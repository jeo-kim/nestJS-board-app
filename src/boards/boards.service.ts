import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards = ["사과", "바나나"];

    getAllBoards() {
        return this.boards;
    }
}
