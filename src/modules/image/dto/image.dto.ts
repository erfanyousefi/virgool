import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ImageDto {
    @ApiPropertyOptional()
    alt: string;
    @ApiProperty()
    name: string;
    @ApiProperty({format: "binary"})
    image: string;
}
