import React from 'react'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUploader = ({state, fileUploadToState, pondRef}) => {



  return (
    <div>
      <FilePond
          ref={ref => (pondRef.current = ref)}
          files={state.files}
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
            
            fileUploadToState(fileItems);
          }}
        />
    </div>
  )
}

export default FileUploader
