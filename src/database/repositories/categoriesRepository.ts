import { Category } from '../../entities/category.entity';
import { CategoryModel } from '../schemas/categorySchema';

export class CategoriesRepository {
  constructor(private model: typeof CategoryModel) {}

  async create({ _id, title, color }: Category): Promise<Category> {
    const createdCategory = await this.model.create({ title, color });

    return createdCategory.toObject<Category>();
  }

  async findByTitle(title: string): Promise<Category | undefined> {
    const category = await this.model.findOne({ title });
    return category?.toObject<Category>();
  }

  async findById(id: string): Promise<Category | undefined> {
    const category = await this.model.findById(id);
    return category?.toObject<Category>();
  }

  async index(): Promise<Category[]>{
    const categories = await this.model.find() 
    const categoriesmap = categories.map((item) => item.toObject<Category>())

    return categoriesmap
   }

}
