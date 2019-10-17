import React, { useState, useRef } from 'react'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUploader = ({state, fileUploadToState}) => {
  const [ files, setFiles ] = useState();
  let pond = useRef(null);

  const uploadHandler = () => {

  }
  

  return (
    <div>
      <FilePond
          ref={ref => (pond.current = ref)}
          files={state.files}
          allowMultiple={true}
          maxFiles={1}
          data-max-file-size="2MB"
          instantUpload={false}
          server={uploadHandler}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            
            fileUploadToState(fileItems);
          }}
        />
    </div>
  )
}

export default FileUploader
