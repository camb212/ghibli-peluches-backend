import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plushie, PlushieDocument } from './plushie.schema';

@Injectable()
export class PlushiesService {
  constructor(@InjectModel(Plushie.name) private plushieModel: Model<PlushieDocument>) {}

  async findAll(): Promise<Plushie[]> {
    return this.plushieModel.find().exec();
  }

  async findOne(id: string): Promise<Plushie | null> {
    return this.plushieModel.findById(id).exec();
  }

  async create(data: any): Promise<Plushie> {
    const created = new this.plushieModel(data);
    return created.save();
  }
}
