import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateEnrollmentDto } from '../dto/create-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateEnrollmentDto) {
    return this.prisma.enrollment.create({ data: createDto });
  }

  findAllByStudentId(studentId: number) {
    return this.prisma.enrollment.findMany({ where: { studentId } });
  }

  findOne(id: number) {
    return this.prisma.enrollment.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.enrollment.delete({ where: { id } });
  }
}
