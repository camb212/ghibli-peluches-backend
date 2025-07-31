import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { PlushiesService } from './plushies.service';

// DTO for type safety
export class CreatePlushieDto {
  name: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  material: string;
  price: number;
}

export class UpdatePlushieDto {
  name?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  material?: string;
  price?: number;
}

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
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPlushieDto: CreatePlushieDto) {
    return this.plushiesService.create(createPlushieDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlushieDto: UpdatePlushieDto) {
    return this.plushiesService.update(id, updatePlushieDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.plushiesService.remove(id);
  }
}