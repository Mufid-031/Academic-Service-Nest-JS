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
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ScheduleService } from './schedule.service';
import { ScheduleEntity } from '../entities/schedule.entity';
import { CreateScheduleDto } from '../dto/create-schedule.dto';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';

@Controller('schedule')
@ApiTags('Schedule')
@UseGuards(JwtAuthGuard)
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: ScheduleEntity })
  async create(@Body() createDto: CreateScheduleDto) {
    return this.scheduleService.create(createDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: ScheduleEntity, isArray: true })
  findAll() {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: ScheduleEntity })
  findOne(@Param('id') id: number) {
    return this.scheduleService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: ScheduleEntity })
  async update(@Param('id') id: number, @Body() updateDto: UpdateScheduleDto) {
    return await this.scheduleService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: ScheduleEntity })
  remove(@Param('id') id: number) {
    return this.scheduleService.remove(id);
  }
}
