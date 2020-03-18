import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Car } from '../car';

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

  @OneToMany(type => Car, car => car.manufacturer) // specify inverse side as a second parameter
  car: Car;
  @Column()
  siret: number;
}
