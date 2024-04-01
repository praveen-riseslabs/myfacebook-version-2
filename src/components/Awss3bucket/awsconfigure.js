import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIAVAND6V4DC36JGN47',
  secretAccessKey: '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',
  region: 'https://riseslabs.s3.ap-south-1.amazonaws.com/riseslabs',
});

const s3 = new AWS.S3();


export default s3;
