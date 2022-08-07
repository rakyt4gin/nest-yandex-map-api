import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MapObject } from 'src/map-objects/map-objects.entity';
import { FilesService } from 'src/files/files.service';
import { Repository } from 'typeorm';
import { CreateMapObjectDto } from './dto/create-map-object.dto';

@Injectable()
export class MapObjectsService {
  constructor(
    private fileService: FilesService,
    @InjectRepository(MapObject) private repo: Repository<MapObject>,
  ) { }

  async create(data: CreateMapObjectDto, files: Array<Express.Multer.File>) {
    const images: string[] = [];
    for (const file of files) {
      const fileName = await this.fileService.createFile(file);
      images.push(fileName);
    }
    const MapObject = await this.repo.create({ ...data, images: '' + images });
    return this.repo.save(MapObject);
  }

  async find() {
    return this.repo.find();
  }

  async update(id: string, body: Partial<CreateMapObjectDto>) {
    const MapObject = await this.repo.findOne({
      where: {
        id: parseInt(id),
      },
    });
    if (!MapObject) {
      throw new NotFoundException('объект карты не найден');
    }

    Object.assign(MapObject, body);
    return this.repo.save(MapObject);
  }

  async remove(id: string) {
    const MapObject = await this.repo.findOne({
      where: {
        id: parseInt(id),
      },
    });
    if (!MapObject) {
      throw new NotFoundException('объект карты не найден');
    }
    return this.repo.remove(MapObject);
  }
}
