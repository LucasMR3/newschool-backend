import { CourseTaken } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { User } from '../../UserModule';
import { Course } from '../../CourseModule';
import { UserDTO } from '../../UserModule/dto';
import { CourseDTO } from '../../CourseModule/dto';

export class CourseTakenDTO {
  @ApiProperty({ type: () => UserDTO })
  @Type(() => UserDTO)
  @IsString()
  @Expose()
  user: CourseTaken['user'];

  @ApiProperty({ type: () => CourseDTO })
  @IsString()
  @Expose()
  course: CourseTaken['course'];

  @ApiProperty({ type: String })
  @Expose()
  courseStartDate: CourseTaken['courseStartDate'];

  @ApiProperty({ type: String })
  @Expose()
  courseCompleteDate: CourseTaken['courseCompleteDate'];

  @ApiProperty({ type: String })
  @Expose()
  status: CourseTaken['status'];

  @ApiProperty({ type: String })
  @Expose()
  completition: CourseTaken['completition'];

  @ApiProperty({ type: String })
  @Expose()
  currentLesson: CourseTaken['currentLesson'];

  @ApiProperty({ type: String })
  @Expose()
  currentPart: CourseTaken['currentPart'];

  @ApiProperty({ type: String })
  @Expose()
  currentTest: CourseTaken['currentTest'];
}
