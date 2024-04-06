import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsNumberString, Length } from "class-validator";

export class CreateBlogDto {
    @ApiProperty()
    @IsNotEmpty()
    @Length(10, 150)
    title: string
    @ApiPropertyOptional()
    slug: string
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    time_for_study: string
    @ApiPropertyOptional()
    image: string
    @ApiProperty()
    @IsNotEmpty()
    @Length(10, 300)
    description: string
    @ApiProperty()
    @IsNotEmpty()
    @Length(100)
    content: string
    @ApiProperty({type: String, isArray: true})
    // @IsArray()
    categories: string[] | string
}
export class UpdateBlogDto extends PartialType(CreateBlogDto){}

export class FilterBlogDto {
    category: string;
    search: string;
}