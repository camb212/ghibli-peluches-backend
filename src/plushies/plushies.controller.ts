import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlushiesService } from './plushies.service';

@Controller('plushies')
export class PlushiesController {
  constructor(private readonly plushiesService: PlushiesService) {}

  @Get()
  findAll() {
    return this.plushiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plushiesService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.plushiesService.create(data);
  }
}
