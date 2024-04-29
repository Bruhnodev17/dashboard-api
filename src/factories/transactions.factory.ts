import { CategoriesRepository } from "../database/repositories/categoriesRepository";
import { TransactionsRepository } from "../database/repositories/transactionsRepository";
import { CategoryModel } from "../database/schemas/categorySchema";
import { TransactionModel } from "../database/schemas/transactionSchema";
import { TransactionsService } from "../services/transactions.service";


export class TransactionsFactory {
  private static transactionsSevice: TransactionsService;

  static getServiceInstance() {
    if (this.transactionsSevice) {
      return this.transactionsSevice;
    }

    const repository = new TransactionsRepository(TransactionModel);
    const categoriesRepository = new CategoriesRepository(CategoryModel)
    const service = new TransactionsService(repository, categoriesRepository);

    this.transactionsSevice = service;

    return service;
  }
}
