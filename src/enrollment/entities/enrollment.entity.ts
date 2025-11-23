import { ApiProperty } from '@nestjs/swagger';

export class EnrollmentEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  studentId: number;

  @ApiProperty()
  courseId: number;

  @ApiProperty()
  grade: number;

  @ApiProperty()
  isValidated: boolean;

  @ApiProperty()
  validatedAt: Date;

  @ApiProperty()
  validatedBy: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
