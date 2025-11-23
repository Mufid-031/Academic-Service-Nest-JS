import { Module } from '@nestjs/common';
import { CourseService } from './course/course.service';
import { CourseController } from './course/course.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
