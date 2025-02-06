import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private readonly noteRepo: Repository<Note>,
  ) {}

  async create(dto: CreateNoteDto): Promise<Note> {
    const note = this.noteRepo.create(dto);
    return this.noteRepo.save(note);
  }

  async findAll(): Promise<Note[]> {
    return this.noteRepo.find({ order: { createdAt: 'DESC' } });
  }

  async delete(id: number): Promise<void> {
    await this.noteRepo.delete(id);
  }
}
