import multer from 'multer'

const storage = multer.diskStorage({

    destination: function (req, file, callback) {
        callback(null, 'D:\\Multer')
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
})

const upload = multer({ storage });

export default upload