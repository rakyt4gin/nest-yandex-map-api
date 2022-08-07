import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MapObject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  title: string;

  @Column()
  hint: string;

  @Column()
  description: string;

  @Column({ array: true })
  images: string;

  @Column()
  geometry: string;

  @Column()
  more: string;
}
