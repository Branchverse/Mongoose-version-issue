import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatDocument } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private catSchema: Model<CatDocument>) { }

  async findAll(): Promise<CatDocument[]> {
    return await this.catSchema.find();
  }

}
