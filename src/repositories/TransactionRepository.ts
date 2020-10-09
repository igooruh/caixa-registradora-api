import { EntityRepository, Repository } from 'typeorm';

import TransactionModel from '../models/TransactionModel';

interface Balance {
  entrada: number;
  saida: number;
  saldoTotal: number;
}

@EntityRepository(TransactionModel)
class TransactionRepository extends Repository<TransactionModel> {
  public async getTotalBalance(): Promise<Balance> {
    const transanctions = await this.find();

    const { entrada, saida } = transanctions.reduce(
      (accumulator: Balance, transaction: TransactionModel) => {
        switch (transaction.tipo) {
          case 'entrada':
            accumulator.entrada += Number(transaction.valor);
            break;

          case 'saida':
            accumulator.saida += Number(transaction.valor);
            break;

          default:
            break;
        }

        return accumulator;
      },
    );

    const saldoTotal = entrada - saida;

    return { saldoTotal, entrada, saida };
  }
}

export default TransactionRepository;
