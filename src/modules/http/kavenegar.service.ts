import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { catchError, lastValueFrom, map } from "rxjs";
import * as queryString from "qs"
import { SmsTemplate } from "./enum/sms-template.enum";
@Injectable()
export class KavenegarService {
    constructor(private httpService: HttpService) { }

    async sendVerificationSms(receptor: string, code: string) {
        const params = queryString.stringify({
            receptor,
            token: code,
            template: SmsTemplate.Verify
        })
        const { SEND_SMS_URL } = process.env
        const result = await lastValueFrom(
            this.httpService.get(`${SEND_SMS_URL}?${params}`)
                .pipe(
                    map(res => res.data)
                )
                .pipe(
                    catchError(err => {
                        console.log(err);
                        throw new InternalServerErrorException("kavenegar")
                    })
                )
        );
        console.log(result);
        return result
        
    }
}