import React, { useState } from 'react';
import AWS from 'aws-sdk';
import JSZip from 'jszip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AwsS3UploaderMultiplefiles() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const fileTypes = ['image/jpeg',
    'image/png',
    'application/pdf',
    'video/mp4', 
    'video/quicktime', 
    'audio/mpeg', 'audio/wav',
    'application/zip'
  ];

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => fileTypes.includes(file.type));
    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
  };

  const uploadFiles = async () => {
    if (selectedFiles.length === 0) {
      toast.error('Please select files to upload.');
      return;
    }

    setUploading(true);

    const S3_BUCKET = 'riseslabs';
    const REGION = 'ap-south-1';

    AWS.config.update({
        accessKeyId: 'AKIAVAND6V4DC36JGN47',
        secretAccessKey: '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',
    });

    const s3 = new AWS.S3({
      region: REGION,
    });

    const zip = new JSZip();
    selectedFiles.forEach(file => {
      zip.file(file.name, file);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });

    const data = {
      Bucket: S3_BUCKET,
      Key: 'uploadedFiles.zip',
      Body: zipBlob,
    };

    try {
      await s3.upload(data).promise();
      toast.success('Files uploaded successfully!');
      setSelectedFiles([]);
      setDownloadUrl(`${S3_BUCKET}.s3.${REGION}.amazonaws.com/uploadedFiles.zip`);
    } catch (error) {
      console.error(error);
      toast.error('Error uploading files: ' + error.message);
    }

    setUploading(false);
  };

  return (
    <>
      <div className="container">
        <input type="file" multiple onChange={handleFileChange} />
        <br />
        <button className="btn btn-primary mt-3" onClick={uploadFiles}>{uploading ? 'Uploading...' : 'Upload Files as Zip'}</button>
        <br />
        {downloadUrl && <a href={`https://${downloadUrl}`} download="uploadedFiles.zip">Download Zip File</a>}
        <br />
        <h2>Selected Files:</h2>
        <ol>
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default AwsS3UploaderMultiplefiles;