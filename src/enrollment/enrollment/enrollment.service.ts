import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateEnrollmentDto } from '../dto/create-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateEnrollmentDto) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id: createDto.scheduleId },
    });

    if (schedule!.enrolledCount >= schedule!.capacity) {
      throw new BadRequestException('Class is full');
    }

    const enrollment = await this.prisma.enrollment.create({ data: createDto });

    await this.prisma.schedule.update({
      where: { id: createDto.scheduleId },
      data: { enrolledCount: { increment: 1 } },
    });

    return enrollment;
  }

  findAllByStudentId(studentId: number) {
    return this.prisma.enrollment.findMany({
      where: { studentId },
      include: { schedule: { include: { course: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.enrollment.findUnique({
      where: { id },
      include: { schedule: { include: { course: true } } },
    });
  }

  async remove(id: number) {
    const enrollment = await this.prisma.enrollment.delete({ where: { id } });

    await this.prisma.schedule.update({
      where: { id: enrollment.scheduleId },
      data: { enrolledCount: { decrement: 1 } },
    });

    return enrollment;
  }
}
