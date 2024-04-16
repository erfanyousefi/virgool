import { HttpModule } from "@nestjs/axios";
import { Global, Module } from "@nestjs/common";
import { KavenegarService } from "./kavenegar.service";

@Global()
@Module({
    imports: [HttpModule.register({
        timeout: 10000,
    })],
    providers: [KavenegarService],
    exports: [KavenegarService],
})
export class CustomHttpModule {}