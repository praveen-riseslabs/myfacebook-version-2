import React, { useState,useEffect } from 'react';
import AWS from 'aws-sdk';


  function AwsS3Uploader() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = require('react-toastify');
  require('react-toastify/dist/ReactToastify.css');
  const fileTypes = ['image/jpeg','image/png','application/pdf','video/mp4','video/quicktime','audio/mpeg','audio/wav','application/zip'];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      toast.success('Invalid file type, please select correct format of file');
    }
  };

  const uploadFile = async () => {
    if (!file) {
      toast.success('Please select a file to upload.');
      return;
    }

    setUploading(true);

    const S3_BUCKET = 'riseslabs';
    const REGION = 'ap-south-1'; // e.g., 'ap-south-1'

    AWS.config.update({
      accessKeyId: 'AKIAVAND6V4DC36JGN47',
      secretAccessKey: '7UYppDcipVRa3Wyoy7DUISPTq7vIIL9F8D1NlHLo',
    });

    const s3 = new AWS.S3({
      region: REGION,
    });

    const data = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      const upload = await s3.upload(data).promise();
      console.log(upload);
      setUploading(false);
      toast.success('File uploaded successfully........!');
    } catch (error) {
      console.error(error);
      setUploading(false);
      toast.success('Error uploading file: ' + error.message);
    }
  };
  
  return (
    <>
      <div className="container">
        <input type="file" required onChange={handleFileChange} />
        <br></br>
        <button   className='btn btn-primary mt-3' onClick={uploadFile}>{uploading ? 'Uploading...' : 'Upload File'}</button>
       
      </div>
    </>
  );
}

export default AwsS3Uploader;

