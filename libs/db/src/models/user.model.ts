import {modelOptions, prop} from "@typegoose/typegoose";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class User{
    @ApiModelProperty({description: '用户名', example: 'cannli'})
    @prop()
    username: string
    @ApiModelProperty({description: '密码', example: 123456})
    @prop()
    password: string
}
