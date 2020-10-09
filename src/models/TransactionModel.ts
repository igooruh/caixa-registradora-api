import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import CategoryModel from './CategoryModel';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  tipo: string;

  @Column('decimal')
  valor: number;

  @Column()
  descricao: string;

  @Column()
  category_id: string;

  @ManyToOne(() => CategoryModel, category => category.transaction, {
    eager: true,
  })
  @JoinColumn({ name: 'categoryid_' })
  category: CategoryModel;

  @CreateDateColumn()
  data: Date;
}

export default Transaction;
