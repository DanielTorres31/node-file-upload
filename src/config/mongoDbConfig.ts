import mongoose from 'mongoose'

const DB_HOST = '192.168.99.100'
const DB_PORT = 27017
const DB_NAME = 'images'

export default mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
