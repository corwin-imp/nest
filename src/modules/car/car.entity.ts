import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'cars',
})
export class Car {
  @PrimaryGeneratedColumn({ length: 255 })
  id: string;

  @Column()
  manufacturerId: number;

  @Column()
  price: number;

  @Column({ length: 255 })
  firstRegistrationDate: string;

  @Column()
  ownerId: number;
}

export class CarFillableFields {
  manufacturerId: number;
  ownerId: number;
  firstRegistrationDate: string;
  price: number;
  id: string;
}
