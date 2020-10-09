import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import TransactionModel from './TransactionModel';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nome: string;

  @OneToMany(() => TransactionModel, transaction => transaction.category)
  transaction: TransactionModel;

  @CreateDateColumn('timestamp')
  data_criacao: Date;
}

export default Category;
