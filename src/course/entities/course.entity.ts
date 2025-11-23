import { ApiProperty } from '@nestjs/swagger';

export class CourseEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  semester: string;

  @ApiProperty()
  sks: number;

  @ApiProperty()
  major: string;

  @ApiProperty()
  faculty: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
