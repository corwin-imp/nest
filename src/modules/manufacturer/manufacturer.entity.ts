import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'manufacturers',
})
export class Manufacturer {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  phone: string;

  @Column()
  siret: number;
}
