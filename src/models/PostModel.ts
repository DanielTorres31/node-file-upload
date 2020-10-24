import { Schema, Document, model } from 'mongoose'
import aws from 'aws-sdk'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { filesDestination } from '../config/multerConfig'
const s3 = new aws.S3()

export interface Post extends Document {
    name: String
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

PostSchema.pre<Post>('save', function () {
    if (!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`
    }
})

PostSchema.pre<Post>('remove', function () {
    if (process.env.STORAGE_TYPE === 's3') {
        return s3
            .deleteObject(
                {
                    Bucket: process.env.S3_BUCKET || '',
                    Key: '' + this.key,
                },
                () => {}
            )
            .promise()
    } else {
        return promisify(fs.unlink)(
            path.resolve(`${filesDestination}/${this.key}`)
        )
    }
})

export default model<Post>('Post', PostSchema)
