import { Schema, Document, model } from 'mongoose'

export interface Post extends Document {
    name: string
    size: Number
    key: String
    url?: String
}

const PostSchema = new Schema<Post>({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default model<Post>('Post', PostSchema)
