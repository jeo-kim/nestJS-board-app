import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid} from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(dto: CreateBoardDto) {
        const {title, description} = dto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }
}
