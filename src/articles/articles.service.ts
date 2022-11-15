import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articlesRepository: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articlesRepository.save(createArticleDto);
  }

  findAll() {
    return this.articlesRepository.find();
  }

  findOne(id: number) {
    return this.articlesRepository.findOneBy({id: id});
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articlesRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articlesRepository.delete({id: id});
  }
}
