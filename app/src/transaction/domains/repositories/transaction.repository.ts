import { StatusTransactionModel } from "../model/statustransaction.model";
import { TransactionModel } from "../model/transaction.model";
import { TransactionEntity } from "src/transaction/infraestructures/entities/transaction.entity";

export interface ITransactionRepository{
    createTransaction(model: TransactionModel): Promise<TransactionEntity>
    updateStatusTransaction(model: StatusTransactionModel): Promise<void>
}

