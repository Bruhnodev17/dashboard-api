import { CategoriesRepository } from '../database/repositories/categoriesRepository';
import { CategoryModel } from '../database/schemas/categorySchema';
import { CategoriesService } from '../services/categories.service';

export class CategoriesFactory {
  private static CategoriesSevice: CategoriesService;

  static getServiceInstance() {
    if (this.CategoriesSevice) {
      return this.CategoriesSevice;
    }

    const repository = new CategoriesRepository(CategoryModel);
    const service = new CategoriesService(repository);

    this.CategoriesSevice = service;

    return service;
  }
}
