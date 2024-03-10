import { BaseEntity } from "src/common/abstracts/base.entity";
import { EntityName } from "src/common/enums/entity.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from "typeorm";
import { OtpEntity } from "./otp.entity";

@Entity(EntityName.User)
export class UserEntity extends BaseEntity {
    @Column({unique: true, nullable: true})
    username: string;
    @Column({unique: true, nullable: true})
    phone: string;
    @Column({unique: true, nullable: true})
    email: string;
    @Column({nullable: true})
    password: string;
    @Column({nullable: true})
    otpId: number;
    @OneToOne(() => OtpEntity, otp => otp.user, {nullable: true})
    @JoinColumn()
    otp: OtpEntity
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}
