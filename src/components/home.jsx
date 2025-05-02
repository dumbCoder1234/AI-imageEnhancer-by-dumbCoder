import { ImgUpload } from "./imgUpload"
import { ImgPreview } from "./imgPreview"
import { useState } from "react"
import { enhancedImgApi } from "../api/getImg";

export const Home = () => {

    const [uploadImg, setUploadImg] = useState(null);
    const [enhancedImg, setEnhancedImg] = useState(null);
    const [loading, isloading] = useState(false);

    const uploadImgHandler = async (file) => {
        setUploadImg(URL.createObjectURL(file));
        isloading(true);

        try {
            const enhancedUrl = await enhancedImgApi(file);
            setEnhancedImg(enhancedUrl);
            isloading(false);
        }
        catch (error) {
            console.log(error);

        }

    }

    return (
        <>
            <ImgUpload uploadImgHandler={uploadImgHandler} />
            <ImgPreview loading={loading} uploadImg={uploadImg} enhancedImg={enhancedImg?.image} />
        </>
    )
}