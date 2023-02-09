import React from 'react'
import Resizer from "react-image-file-resizer";

const SingleFileUpload = ({ getImage }) => {
    const handleImage = (event) => {
        const file = event.target.files[0]
        Resizer.imageFileResizer(
            file,
            720,
            720,
            "JPEG",
            90,
            0,
            (uri) => {
                 getImage(uri)
            },
            "base64"
        )
    }
    return (
        <div className="form-group mt-1">
            <label className='btn btn-primary'>
                Browse Image
                <input
                    onChange={handleImage}
                    type="file"
                    accept='image/*'
                    hidden
                />
            </label>
        </div>
    )
}

export default SingleFileUpload