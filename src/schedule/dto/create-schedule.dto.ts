import { IsEnum, IsNumber, IsString } from 'class-validator';

export enum Day {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
}

export class CreateScheduleDto {
  @IsEnum(Day)
  day: Day;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsString()
  room: string;

  @IsNumber()
  courseId: number;

  @IsNumber()
  teacherId: number;
}
