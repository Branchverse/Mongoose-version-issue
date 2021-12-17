import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Cat {
    @Prop({required:true})
    name: string
}
export type CatDocument = Cat & Document
export const CatSchema = SchemaFactory.createForClass(Cat)