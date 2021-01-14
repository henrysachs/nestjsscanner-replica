import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GitleaksService } from './gitleaks.service';
import { CreateGitleakDto } from './dto/create-gitleak.dto';
import { UpdateGitleakDto } from './dto/update-gitleak.dto';

@Controller('gitleaks')
export class GitleaksController {
  constructor(private readonly gitleaksService: GitleaksService) {}

  @Post()
  create(@Body() createGitleakDto: CreateGitleakDto) {
    return this.gitleaksService.create(createGitleakDto);
  }

  @Get()
  findAll() {
    return this.gitleaksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gitleaksService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGitleakDto: UpdateGitleakDto) {
    return this.gitleaksService.update(+id, updateGitleakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gitleaksService.remove(+id);
  }
}
