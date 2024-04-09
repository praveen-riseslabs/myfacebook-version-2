import React, { useState } from 'react';
import AWS from 'aws-sdk'; 
import S3 from 'aws-sdk/clients/s3'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FileUploader() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false)

  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'application/pdf',
    'video/mp4',
    'video/quicktime',
    'audio/mpeg',
    'audio/wav',
    'application/zip',
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      toast.error('Invalid file type. Only images, PDFs, and ZIP files are allowed.');
    }
  };

  const uploadFile = async () => {
    if (!file){
      toast.info("Please select a file...");
      return;
    }
    setUploading(true);
    const S3_BUCKET = "riseslabs"; 
    const REGION = "ap-south-1";

    AWS.config.update({
      accessKeyId: "AKIAVAND6V4DC36JGN47",
      secretAccessKey: "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",
    });

    const s3 = new S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      const upload = await s3.putObject(params).promise();
      console.log(upload);
      setUploading(false);
      toast.success("File uploaded successfully.");

    } catch (error) {
      console.error(error);
      setUploading(false);
      toast.error("Error uploading file: " + error.message); 
    }
  };

  return (
    <>
      <div className="">
        <input type="file" required onChange={handleFileChange} />
        <button onClick={uploadFile}>{uploading ? 'Uploading...' : 'Upload File'}</button>
      </div>
    </>
  );
}

export default FileUploader;







// import React, { useState } from 'react';
// import AWS from 'aws-sdk'; 
// import S3 from 'aws-sdk/clients/s3'; 

// function FileUploader() {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false)

//   const allowedTypes = [
//     'image/jpeg',
//     'image/png',
//     'application/zip',
//     'application/pdf',
//     'video/mp4',
//     'video/quicktime',
//     'audio/mpeg',
//     'audio/wav',
//   ];

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile && allowedTypes.includes(selectedFile.type)) {
//       setFile(selectedFile);
//     } else {
//       alert('Invalid file type. Only images and PDFs are allowed.');
//     }
//   };

//   const uploadFile = async () => {
//   if (!file){
//    alert("please select a file...")
//    return
//   }
//     setUploading(true)
//     const S3_BUCKET = "riseslabs"; 
//     // const REGION = "https://riseslabs.s3.ap-south-1.amazonaws.com/riseslabs";
//     const REGION = "ap-south-1"

//     AWS.config.update({
//       accessKeyId: "AKIAVAND6V4DC36JGN47",
//       secretAccessKey: "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",
//     });

//     const s3 = new S3({
//       params: { Bucket: S3_BUCKET },
//       region: REGION,
//     });

//     const params = {
//       Bucket: S3_BUCKET,
//       Key: file.name,
//       Body: file,
//     };

//     try {
//       const upload = await s3.putObject(params).promise();
//       console.log(upload);
//       setUploading(false)
//       alert("File uploaded successfully.");

//     } catch (error) {
//       console.error(error);
//       setUploading(false)
//       alert("Error uploading file: " + error.message); // Inform user about the error
//     }
//   };

//   return (
//     <>
//       <div className="">
//         <input type="file" required onChange={handleFileChange} />
//         <button onClick={uploadFile}>{uploading ? 'Uploading...' : 'Upload File'}</button>
//       </div>
//     </>
//   );
// }

// export default FileUploader;







// // import AWS from 'aws-sdk';
// // import { useState } from "react";

// // function FileUploader() {
// //   const [file, setFile] = useState(null);
// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     setFile(file);
// //   };
// //   return (
// //     <div className="FileUploader">
// //       <div>
// //         <input type="file" onChange={handleFileChange} />
// //         <button onClick={uploadFile}>Upload</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FileUploader;