import { MulterFile } from "src/common/utils/multer.util"

export type ProfileImages = {
    image_profile: MulterFile[],
    bg_image: MulterFile[],
}