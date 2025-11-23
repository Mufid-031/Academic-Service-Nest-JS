import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CourseEntity } from '../entities/course.entity';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

@Controller('course')
@ApiTags('Course')
@UseGuards(JwtAuthGuard)
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: CourseEntity })
  async create(@Body() createDto: CreateCourseDto) {
    return await this.courseService.create(createDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: CourseEntity, isArray: true })
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CourseEntity })
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CourseEntity })
  async update(@Param('id') id: number, @Body() updateDto: UpdateCourseDto) {
    return await this.courseService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CourseEntity })
  remove(@Param('id') id: number) {
    return this.courseService.remove(id);
  }
}
