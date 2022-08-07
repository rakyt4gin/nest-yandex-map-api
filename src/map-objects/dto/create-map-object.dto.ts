import { IsEnum, IsString } from 'class-validator';

export enum Type {
  road = 'road',
  place = 'place',
  area = 'area',
}

export class CreateMapObjectDto {
  @IsEnum(Type)
  readonly type: string;

  @IsString()
  title: string;

  @IsString()
  hint: string;

  @IsString()
  description: string;

  @IsString()
  geometry: string;

  @IsString()
  more: string;
}
