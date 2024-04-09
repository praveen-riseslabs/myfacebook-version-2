import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AwsS3Retrieve() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [filesList, setFilesList] = useState([]);
  
  const fileTypes = ['image/jpeg', 'image/png', 'application/pdf', 'video/mp4', 'video/quicktime', 'audio/mpeg', 'audio/wav', 'application/zip'];

  useEffect(() => {
    fetchFilesList();
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      toast.error('Invalid file type, please select a correct file format');
    }
  };

  const uploadFile = async () => {
    if (!file) {
      toast.error('Please select a file to upload.');
      return;
    }

    setUploading(true);

    const S3_BUCKET = 'riseslabs';
    const REGION = 'ap-south-1';

    AWS.config.update({
      accessKeyId:'AKIAVAND6V4DC36JGN47',
      secretAccessKey:'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',
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
      toast.success('File uploaded successfully!');
      fetchFilesList(); // Refresh the files list after upload
    } catch (error) {
      console.error(error);
      setUploading(false);
      toast.error('Error uploading file: ' + error.message);
    }
  };

  const fetchFilesList = async () => {
    const S3_BUCKET = 'riseslabs';
    const REGION = 'ap-south-1';

    AWS.config.update({
      accessKeyId:'AKIAVAND6V4DC36JGN47',
      secretAccessKey:'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',
    });

    const s3 = new AWS.S3({
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
    };

    try {
      const response = await s3.listObjectsV2(params).promise();
      setFilesList(response.Contents);
    } catch (error) {
      console.error(error);
      toast.error('Error fetching files list: ' + error.message);
    }
  };

  const downloadFile = (key) => {
    const S3_BUCKET = 'riseslabs';
    const REGION = 'ap-south-1';

    AWS.config.update({
      accessKeyId: 'YOUR_ACCESS_KEY_ID',
      secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    });

    const s3 = new AWS.S3({
      region: REGION,
    });

    const params = {
      Bucket: S3_BUCKET,
      Key: key,
    };

    s3.getObject(params, (err, data) => {
      if (err) {
        console.error(err);
        toast.error('Error downloading file: ' + err.message);
        return;
      }

      const url = URL.createObjectURL(new Blob([data.Body]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', key);
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <>
      <div className="container">
        <input type="file" required onChange={handleFileChange} />
        <br />
        <button className='btn btn-primary mt-3' onClick={uploadFile}>{uploading ? 'Uploading...' : 'Upload File'}</button>
        <br />
        <h2>Uploaded Files:</h2>
        <ul>
          {filesList.map((file) => (
            <li key={file.Key}>
              {file.Key} - <button onClick={() => downloadFile(file.Key)}>Download</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AwsS3Retrieve;