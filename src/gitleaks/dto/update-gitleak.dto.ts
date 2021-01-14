import { PartialType } from '@nestjs/mapped-types';
import { CreateGitleakDto } from './create-gitleak.dto';

export class UpdateGitleakDto extends PartialType(CreateGitleakDto) {}
