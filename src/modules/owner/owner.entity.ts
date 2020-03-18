import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'owners',
})
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  purchaseDate: string;
}
