import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from '../entities/blog.entity';
import { IsNull, Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { CreateCommentDto } from '../dto/comment.dto';
import { BlogCommentEntity } from '../entities/comment.entity';
import { BlogService } from './blog.service';
import { BadRequestMessage, NotFoundMessage, PublicMessage } from 'src/common/enums/message.enum';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { paginationGenerator, paginationSolver } from 'src/common/utils/pagination.util';
@Injectable({ scope: Scope.REQUEST })
export class BlogCommentService {
    constructor(
        @InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>,
        @InjectRepository(BlogCommentEntity) private blogCommentRepository: Repository<BlogCommentEntity>,
        @Inject(REQUEST) private request: Request,
        @Inject(forwardRef(() => BlogService)) private blogService: BlogService
    ) { }

    async create(commentDto: CreateCommentDto) {
        const { parentId, text, blogId } = commentDto;
        const { id: userId } = this.request.user;
        const blog = await this.blogService.checkExistBlogById(blogId)
        let parent = null;
        if (parentId && !isNaN(parentId)) {
            parent = await this.blogCommentRepository.findOneBy({ id: +parentId });
        }
        await this.blogCommentRepository.insert({
            text,
            accepted: true,
            blogId,
            parentId: parent ? parentId : null,
            userId,
        });
        return {
            message: PublicMessage.CreatedComment
        }

    }
    async find(paginationDto: PaginationDto) {
        const { limit, page, skip } = paginationSolver(paginationDto);
        const [comments, count] = await this.blogCommentRepository.findAndCount({
            where: {},
            relations: {
                blog: true,
                user: { profile: true }
            },
            select: {
                blog: {
                    title: true
                },
                user: {
                    username: true,
                    profile: {
                        nick_name: true
                    }
                }
            },
            skip,
            take: limit,
            order: { id: "DESC" }
        });
        return {
            pagination: paginationGenerator(count, page, limit),
            comments
        }
    }
    async findCommentsOfBlog(blogId: number, paginationDto: PaginationDto) {
        const { limit, page, skip } = paginationSolver(paginationDto);
        const [comments, count] = await this.blogCommentRepository.findAndCount({
            where: {
                blogId,
                parentId: IsNull()
            },
            relations: {
                user: { profile: true },
                children: {
                    user: { profile: true },
                    children: {
                        user: { profile: true },
                    }
                }
            },
            select: {
                user: {
                    username: true,
                    profile: {
                        nick_name: true
                    }
                },
                children: {
                    text: true,
                    created_at: true,
                    parentId: true,
                    user: {
                        username: true,
                        profile: {
                            nick_name: true
                        }
                    },
                    children: {
                        text: true,
                        created_at: true,
                        parentId: true,
                        user: {
                            username: true,
                            profile: {
                                nick_name: true
                            }
                        },
                    }
                }
            },
            skip,
            take: limit,
            order: { id: "DESC" }
        });
        return {
            pagination: paginationGenerator(count, page, limit),
            comments
        }
    }
    async checkExistById(id: number) {
        const comment = await this.blogCommentRepository.findOneBy({ id });
        if (!comment) throw new NotFoundException(NotFoundMessage.NotFound);
        return comment;
    }
    async accept(id: number) {
        const comment = await this.checkExistById(id);
        if (comment.accepted) throw new BadRequestException(BadRequestMessage.AlreadyAccepted);
        comment.accepted = true;
        await this.blogCommentRepository.save(comment);
        return {
            message: PublicMessage.Updated
        }
    }
    async reject(id: number) {
        const comment = await this.checkExistById(id);
        if (!comment.accepted) throw new BadRequestException(BadRequestMessage.AlreadyRejected);
        comment.accepted = false;
        await this.blogCommentRepository.save(comment);
        return {
            message: PublicMessage.Updated
        }
    }
}
