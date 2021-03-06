import { ApiProperty } from '@nestjs/swagger';
import { Lesson } from '../entity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class LessonUpdateDTO {
  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  title: Lesson['title'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: Lesson['description'];

  @IsString()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  course: Lesson['course'];

  @IsNumber()
  @Expose()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  sequenceNumber: Lesson['sequenceNumber'];
}
