import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BlogService } from './services/blog.service';
import { BlogController } from './controllers/blog.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { CategoryService } from '../category/category.service';
import { CategoryEntity } from '../category/entities/category.entity';
import { BlogCategoryEntity } from './entities/blog-category.entity';
import { BlogLikesEntity } from './entities/like.entity';
import { BlogBookmarkEntity } from './entities/bookmark.entity';
import { BlogCommentService } from './services/comment.service';
import { BlogCommentEntity } from './entities/comment.entity';
import { BlogCommentController } from './controllers/comment.controller';
import { AddUserToReqWOV } from 'src/common/middleware/addUserToReqWOV.middleware';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([
    BlogEntity, 
    CategoryEntity, 
    BlogCategoryEntity,
    BlogLikesEntity,
    BlogBookmarkEntity,
    BlogCommentEntity
  ])],
  controllers: [BlogController, BlogCommentController],
  providers: [BlogService, CategoryService, BlogCommentService],
})
export class BlogModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(AddUserToReqWOV).forRoutes("blog/by-slug/:slug")
  }
}
