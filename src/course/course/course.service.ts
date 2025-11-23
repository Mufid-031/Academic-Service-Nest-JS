import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateCourseDto) {
    return this.prisma.course.create({ data: createDto });
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateCourseDto) {
    return this.prisma.course.update({ where: { id }, data: updateDto });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
