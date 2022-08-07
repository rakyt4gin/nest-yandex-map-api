import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file: Express.Multer.File): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        await fs.mkdir(filePath, { recursive: true }, (err) => {
          if (err) console.log(err);
        });
      }
      await fs.writeFile(path.join(filePath, fileName), file.buffer, (err) => {
        if (err) console.log(err);
      });
      return fileName;
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка записи',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
