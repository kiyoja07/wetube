import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next(); // next() 함수를 호출하면 앱 내의 그 다음 미들웨어 함수가 호출된다
};

export const uploadVideo = multerVideo.single("videoFile");  // single: 하나의 파일만 업로드, videoFile: upload.pug의 video input file name
