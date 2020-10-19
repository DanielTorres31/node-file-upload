import { Post } from '@models/PostModel'
import { Model } from 'mongoose'

class PostController {
    postModel: Model<Post>

    constructor(postModel: Model<Post>) {
        this.postModel = postModel
    }
}

export default PostController
