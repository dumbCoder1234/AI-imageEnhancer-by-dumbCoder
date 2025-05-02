
export const ImgUpload = (props)=>{

    const showImgHandler=(e)=>{
        const file = e.target.files[0]
        if(file){
            props.uploadImgHandler(file)
        }
        
    }

    return(
        <>
        <div className="image-upload">
            <label htmlFor="imageUpload">
                <input type="file" id="imageUpload" className="hidden" onChange={showImgHandler}/>
                <p className="upload">Click to upload image</p>
            </label>
        </div>
        </>
    )
}
       