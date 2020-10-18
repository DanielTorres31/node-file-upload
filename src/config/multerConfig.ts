import multer, { Options } from 'multer'
import path from 'path'
import crypto from 'crypto'

const filesDestination = path.resolve(__dirname, '..', '..', 'tmp', 'uploads')

const allowedMimeTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/gif'
]

const getErrorMessage = () =>
    `Invalid file type. Allowed types: 
        ${allowedMimeTypes.reduce(
            (response, type) => response + type + ', ', '')}`


const multerOptions: Options = {
    dest: filesDestination,
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, filesDestination),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err, '')

                const fileName = `${hash.toString('hex')}-${file.originalname}`
                cb(null, fileName)
            })
        }
    }),
    limits: {
        fileSize: 2048 * 1024
    },
    fileFilter: (req, file, cb) => {
        if(allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true)
            return
        }

        cb(new Error(getErrorMessage()))
    }
}

export default multer(multerOptions)