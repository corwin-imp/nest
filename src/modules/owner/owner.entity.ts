import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Car } from '../car';
@Entity({
  name: 'owners',
})
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  purchaseDate: Date;

  @Column()
  carId: number;

  @ManyToOne(type => Car, car => car.owners)
  car: Car;
}
