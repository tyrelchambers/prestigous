import React, { useState } from 'react'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUploader = ({pondRef}) => {
  const [_file, _setFile] = useState([]);

  return (
    <div>
      <FilePond
          ref={ref => (pondRef.current = ref)}
          allowMultiple={true}
          maxFiles={1}
          data-max-file-size="2MB"
          instantUpload={false}
          server={{
            url: `${process.env.REACT_APP_BACKEND_UPLOADER}/api/upload`,
            process: {
              url: '/save',
              method: 'POST',
              withCredentials: true,
            },
            revert: null,
            restore: null,
            load: null,
            fetch: null

          }}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            
            _setFile({file: fileItems.map(fileItem => fileItem.file)});
          }}
        />
    </div>
  )
}

export default FileUploader
