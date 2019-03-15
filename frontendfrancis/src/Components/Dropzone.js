import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios';

export default function MyDropzone() {

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()

        console.log("droppingFiles!");
    
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          localStorage.setItem("img_url", reader.result)
         
          const binaryStr = reader.result
          console.log(binaryStr)
        }
    
        acceptedFiles.forEach(file => reader.readAsBinaryString(file))
    }, [])
 
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}