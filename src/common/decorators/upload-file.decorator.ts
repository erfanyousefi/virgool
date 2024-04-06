import { ParseFilePipe, UploadedFiles, applyDecorators } from "@nestjs/common";

export function UploadedOptionalFiles() {
    return UploadedFiles(new ParseFilePipe({
        fileIsRequired: false,
        validators: []
    }))
}