import {modelOptions, prop} from "@typegoose/typegoose";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Episode {
    //@ApiModelProperty({description: '课程名称'})
    @prop()
    username: string

    // @ApiModelProperty({description: '封面图'})
    @prop()
    file: string

}
