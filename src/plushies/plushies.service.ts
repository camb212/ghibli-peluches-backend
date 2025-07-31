import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plushie, PlushieDocument } from './plushie.schema';
import { CreatePlushieDto } from './plushies.controller'; // o crea un archivo separado de dto

@Injectable()
export class PlushiesService {
  constructor(@InjectModel(Plushie.name) private plushieModel: Model<PlushieDocument>) {}

  async findAll(): Promise<Plushie[]> {
    return this.plushieModel.find().exec();
  }

  async findOne(id: string): Promise<Plushie | null> {
    return this.plushieModel.findById(id).exec();
  }

  async create(data: CreatePlushieDto): Promise<Plushie> {
    const created = new this.plushieModel(data);
    return created.save();
  }

  async update(id: string, data: Partial<CreatePlushieDto>): Promise<Plushie> {
    const updated = await this.plushieModel.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      throw new NotFoundException('Plushie not found');
    }
    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.plushieModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Plushie not found');
    }
  }
}
