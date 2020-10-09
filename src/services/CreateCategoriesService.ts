import { getRepository, getCustomRepository } from 'typeorm';

import CategoryModel from '../models/CategoryModel';

import CategoryRepository from '../repositories/FindCategoryRepository';

import AppError from '../errors/AppError';

class CreateCategoriesService {
  public async execute(nome: string): Promise<CategoryModel> {
    const categoryRepository = getRepository(CategoryModel);
    const findCategory = getCustomRepository(CategoryRepository);

    const nameCategory = findCategory.create({
      nome,
    });
    this.isExistCategory(nameCategory.nome);

    const category = categoryRepository.create({
      nome,
    });
    await categoryRepository.save(category);

    return category;
  }

  private isExistCategory = (category: string) => {
    if (category) throw new AppError('This category is already');
  };
}

export default CreateCategoriesService;
