import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'owners',
})
export class Owner {
  @PrimaryGeneratedColumn({ length: 255 })
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  purchaseDate: string;
}

export class OwnerFillableFields {
  id: string;
  name: string;
  purchaseDate: string;

}
