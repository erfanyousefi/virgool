import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty()
    title: string;
    @ApiPropertyOptional()
    priority: number;
}

