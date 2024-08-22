import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from "aws-sdk";



aws.config.update({
    region:"",
    secretAccessKey:"",
    accessKeyId:""
})

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'some-bucket',
      acl:'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })


  export default upload;