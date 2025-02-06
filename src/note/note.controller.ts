import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './note.entity';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() dto: CreateNoteDto): Promise<Note> {
    return this.noteService.create(dto);
  }

  @Get()
  findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.noteService.delete(id);
  }
}
