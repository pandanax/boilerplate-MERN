import {Schema} from 'mongoose';

export const PetSchema: Schema = new Schema({
    name: {type: String, required: true},
    owner: {type: Schema.Types.ObjectId, required: true}
});
