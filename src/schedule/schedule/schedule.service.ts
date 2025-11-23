import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateScheduleDto } from '../dto/create-schedule.dto';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateScheduleDto) {
    return this.prisma.schedule.create({ data: createDto });
  }

  findAll() {
    return this.prisma.schedule.findMany();
  }

  findOne(id: number) {
    return this.prisma.schedule.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateScheduleDto) {
    return this.prisma.schedule.update({ where: { id }, data: updateDto });
  }

  remove(id: number) {
    return this.prisma.schedule.delete({ where: { id } });
  }
}
