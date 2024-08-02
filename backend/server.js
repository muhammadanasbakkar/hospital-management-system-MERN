import app from "./app.js";
// import { v2 as cloudinary } from "cloudinary";
import cloudinary from "cloudinary";
import { config } from "dotenv";
config({ path: "./config/config.env" });
cloudinary.config({
  secure: true
});
cloudinary.v2.config({
  cloud_name: "HMS",
  api_key: '947831274926631',
  api_secret:'3CnRT2pSM68Ke_QJUt5aegGWqRY',
});

console.log({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
},'aaaa')
// cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET,});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
