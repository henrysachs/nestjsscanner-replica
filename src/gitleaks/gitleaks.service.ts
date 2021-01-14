import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateGitleakDto } from './dto/create-gitleak.dto';
import { UpdateGitleakDto } from './dto/update-gitleak.dto';
import { Gitleak } from './entities/gitleak.entity';

@Injectable()
export class GitleaksService {
  constructor(
    @Inject('GITLEAK_REPOSITORY')
    private gitleakRepository: Repository<Gitleak>,
  ) {}
  create(createGitleakDto: CreateGitleakDto) {
    return 'This action adds a new gitleak';
  }

  findAll() {
    return `This action returns all gitleaks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gitleak`;
  }

  update(id: number, updateGitleakDto: UpdateGitleakDto) {
    return `This action updates a #${id} gitleak`;
  }

  remove(id: number) {
    return `This action removes a #${id} gitleak`;
  }
}
