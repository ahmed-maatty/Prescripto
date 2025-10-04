import multer from "multer";

const uploadImg = multer({
  storage: multer.memoryStorage(),
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(false, "Unsupported File Type");
    }
  },
});

export default uploadImg;
