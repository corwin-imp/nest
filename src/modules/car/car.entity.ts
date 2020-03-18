import { Entity, Column, PrimaryGeneratedColumn ,OneToOne,OneToMany, JoinColumn } from 'typeorm';
import { Manufacturer } from '../manufacturer';
import { Owner } from '../owner';

@Entity({
  name: 'cars',
})
export class Car {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  price: number;

  @Column({ length: 255 })
  firstRegistrationDate: string;

  @OneToMany(type => Owner, owner => owner.id)
  owners: Owner[];
  @OneToOne(type => Manufacturer)
  manufacturer: Manufacturer;
}
