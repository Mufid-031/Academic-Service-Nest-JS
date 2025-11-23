import { IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  semester: string;

  @IsNumber()
  sks: number;

  @IsString()
  major: string;

  @IsString()
  faculty: string;
}
