import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateMapObjectDto } from './dto/create-map-object.dto';
import { MapObjectsService } from './map-objects.service';

@Controller('map-objects')
export class MapObjectsController {
  constructor(private MapObjectsService: MapObjectsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(
    @Body() body: CreateMapObjectDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return this.MapObjectsService.create(body, files);
  }

  @Get()
  getAllMapObjects() {
    return this.MapObjectsService.find();
  }

  @Put(':id')
  updateMapObjectById(
    @Param('id') id: string,
    @Body() body: Partial<CreateMapObjectDto>,
  ) {
    return this.MapObjectsService.update(id, body);
  }

  @Delete(':id')
  removeMapObjectById(@Param('id') id: string) {
    return this.MapObjectsService.remove(id);
  }
}
