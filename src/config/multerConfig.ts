import multer, { Options } from 'multer'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'
import path from 'path'
import crypto from 'crypto'

const filesDestination = path.resolve(__dirname, '..', '..', 'tmp')

const allowedMimeTypes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif']

const getErrorMessage = () =>
    `Invalid file type. Allowed types: 
        ${allowedMimeTypes.reduce(
            (response, type) => response + type + ', ',
            ''
        )}`

const generateFileName = (file: any, cb: Function) => {
    crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, '')

        file.key = `${hash.toString('hex')}-${file.originalname}`
        cb(null, file.key)
    })
}

const storageTypes: any = {
    local: multer.diskStorage({
        destination: filesDestination,
        filename: (req, file, cb) => generateFileName(file, cb),
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: process.env.S3_BUCKET || '',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => generateFileName(file, cb),
    }),
}

const selectedStorageType = process.env.STORAGE_TYPE || 'local'
const multerOptions: Options = {
    dest: filesDestination,
    storage: storageTypes[selectedStorageType],
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true)
            return
        }

        cb(new Error(getErrorMessage()))
    },
}

export default multer(multerOptions)
