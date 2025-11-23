import { ApiProperty } from '@nestjs/swagger';

export class ScheduleEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  day: string;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @ApiProperty()
  room: string;

  @ApiProperty()
  courseId: number;

  @ApiProperty()
  teacherId: number;

  @ApiProperty()
  enrolledCount: number;

  @ApiProperty()
  capacity: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
