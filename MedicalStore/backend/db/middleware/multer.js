import { extname } from 'path';
import multer from 'multer';

export default folderName => {
    return multer({
        fileFilter: (req, file, cb) => {
            const ex = extname(file.originalname);
            if(
            ex !== '.png' &&
            ex !== '.jpg' &&
            ex !== '.jpeg'
            ){
                return cb(new Error('Only images are allowed'))
            }
            cb(null, true);
        },
        dest:`public/uploads/${folderName}`
    });
}