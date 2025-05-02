import { Loading } from "./loading"

export const ImgPreview = (props) => {
    const downloadEnhancedImage = () => {
        if (props.enhancedImg) {
            const link = document.createElement('a');
            link.href = props.enhancedImg;
            link.download = 'enhanced-image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <>
            <div className="image-preview">
                <div className="original-image">
                    <h2>original image</h2>
                    {props.uploadImg ?
                        <img src={props.uploadImg} alt="" />
                        :
                        <div className="no-img">No Image</div>
                    }
                </div>

                <div className="enhanced-image">
                    <h2>enhanced image</h2>
                    {props.enhancedImg && !props.loading ? (
                        <div>
                            <img src={props.enhancedImg} alt="" />
                        </div>
                    ) : (
                        props.loading ? <Loading /> : <div className="no-img">No Image</div>
                    )}

                </div>
            </div>
            <div className="download-btn">
                <button onClick={downloadEnhancedImage} className="btn">
                    Download Enhanced Image
                </button>
            </div>
        </>
    )
}