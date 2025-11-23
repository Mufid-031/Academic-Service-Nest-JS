import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentEntity } from '../entities/enrollment.entity';
import { CreateEnrollmentDto } from '../dto/create-enrollment.dto';

@Controller('enrollment')
@ApiTags('Enrollment')
@UseGuards(JwtAuthGuard)
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: EnrollmentEntity })
  async create(@Body() createDto: CreateEnrollmentDto) {
    return await this.enrollmentService.create(createDto);
  }

  @Get('student/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: EnrollmentEntity, isArray: true })
  findAllByStudentId(@Param('id') studentId: number) {
    return this.enrollmentService.findAllByStudentId(studentId);
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: EnrollmentEntity })
  findOne(@Param('id') id: number) {
    return this.enrollmentService.findOne(id);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: EnrollmentEntity })
  remove(@Param('id') id: number) {
    return this.enrollmentService.remove(id);
  }
}
