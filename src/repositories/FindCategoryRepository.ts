import { EntityRepository, Repository } from 'typeorm';

import CategoryModel from '../models/Category';

@EntityRepository(CategoryModel)
class FindCategoryRepository extends Repository<CategoryModel> {
  public async findByCategory(category: string): Promise<CategoryModel | ''> {
    const findCategory = await this.findOne({
      where: { category },
    });

    return findCategory || '';
  }
}

export default FindCategoryRepository;
