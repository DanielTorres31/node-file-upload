import { Model } from 'mongoose'
import PostDto from '../dto/PostDto'
import { Post } from '../models/PostModel'

class PostController {
    private postModel: Model<Post>

    constructor(postModel: Model<Post>) {
        this.postModel = postModel
    }

    save(post: PostDto) {
        return this.postModel.create(post)
    }

    find() {
        return this.postModel.find()
    }

    remove(id: string) {
        return this.postModel.remove({ _id: id })
    }
}

export default PostController
