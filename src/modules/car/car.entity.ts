import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, OneToMany, JoinColumn } from 'typeorm';
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

  @Column()
  firstRegistrationDate: Date;

  @Column()
  withDiscount: boolean;

  @OneToMany(type => Owner, owner => owner.car)
  owners: Owner[];

  @ManyToOne(type => Manufacturer, manufacturer => manufacturer.id)
  @JoinColumn()
  manufacturer: Manufacturer;
}
