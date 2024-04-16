import { applyDecorators, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "src/modules/auth/guards/auth.guard";

export function AuthDecorator() {
    return applyDecorators(
        ApiBearerAuth("Authorization"),
        UseGuards(AuthGuard)
    )
}