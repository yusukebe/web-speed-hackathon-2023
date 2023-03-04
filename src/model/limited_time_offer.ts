import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';

import { Product } from './product';

@Entity()
export class LimitedTimeOffer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  productId!: number;

  @ManyToOne(() => Product)
  product!: Relation<Product>;

  @Column()
  price!: number;

  @Column()
  startDate!: string;

  @Column()
  endDate!: string;
}
