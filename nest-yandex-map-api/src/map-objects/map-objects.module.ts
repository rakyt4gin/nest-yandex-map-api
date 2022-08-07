import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapObject } from 'src/map-objects/map-objects.entity';
import { MapObjectsService } from './map-objects.service';
import { MapObjectsController } from './map-objects.controller';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [TypeOrmModule.forFeature([MapObject]), FilesModule],
  providers: [MapObjectsService],
  controllers: [MapObjectsController],
})
export class MapObjectsModule { }
