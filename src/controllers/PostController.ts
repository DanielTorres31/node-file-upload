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

    async remove(id: string) {
        const post = await this.postModel.findById(id).exec()

        if (post) {
            await post.remove()
        }
    }

    async removeAll() {
        const posts = await this.find()

        const promises = posts.map(post => this.remove(post._id))
        await Promise.all(promises)
    }
}

export default PostController
