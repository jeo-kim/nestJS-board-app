import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    // Typescript는 javascript와 달리 private 같은 접근제어자를 사용할 수 있다.
    // 접근제어자를 생성자 파라미터에 선언하면, 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 사용된다.
    constructor(private boardsService: BoardsService) {}


    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(@Body() createBoardDto: CreateBoardDto) {
        return this.boardsService.createBoard(createBoardDto);
    }

}
