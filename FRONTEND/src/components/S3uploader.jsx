// import AWS from 'aws-sdk';

// const S3Uploader = () => {
//     const config = {
//         bucketName: import.meta.env.AWS_BUCKET_NAME,
//         dirName: "userprofiles",
//         region: import.meta.env.AWS_BUCKET_REGION,
//         accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
//     };

//     const handleFileUpload = (event) => {
//         const file = event.target.files[0];
//         console.log(file);

//         // Initialize AWS
//         AWS.config.update({
//             accessKeyId: config.accessKeyId,
//             secretAccessKey: config.secretAccessKey,
//             region: config.region,
//         });

//         // Create new Instance
//         const s3 = new AWS.S3(); // Use lowercase 's3' for consistency

//         // Having file in ArrayBuffer
//         const reader = new FileReader();

//         reader.onload = () => {
//             const fileBuffer = reader.result;

//             // Use template literals for the Key property
//             s3.upload(
//                 {
//                     Bucket: config.bucketName,
//                     Key: `${config.dirName}/${file.name}`,
//                     Body: fileBuffer,
//                     ACL: 'public-read',
//                     ContentType: 'image/svg+xml',
//                 },
//                 (err, uploadedData) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(uploadedData);
//                     }
//                 }
//             );
//         };

//         reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
//     };

//     return (
//         <div>
//             <input type="file" name='file to be uploaded' onChange={handleFileUpload} />
//         </div>
//     );
// };

// export default S3Uploader; // Use PascalCase for component names

import AWS from 'aws-sdk';

import { useState } from 'react';
const S3uploader =()=>{
    const [data,setdata]=useState(null);

    // const config={
    //     bucketName:import.meta.env.AWS_BUCKET_NAME,
    //     dirName:"acfp-main-folder/",
    //     region:import.meta.env.AWS_BUCKET_REGION,
    //     accessKeyID:import.meta.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY
    // }

    const config={
        bucketName: "",
        dirName: "",
        region: "ap-south-1",
        accessKeyId: "",
        secretAccessKey: ""
        // bucketName: "",
        // dirName:"userprofiles",
        // region: "",
        // accessKeyId: "",
        // secretAccessKey: ""
      }

    const handleFileUpload=(event)=>{
        const file = event.target.files[0];

        if (!config.bucketName || !config.region || !config.accessKeyId || !config.secretAccessKey){
            // console.error("AWS CONFIGURATION IS INCOMPLETE");
            return;
        }
        AWS.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: config.region
        })

        //Create new Instance
        const S3 =new AWS.S3();

        //Having file in array Buffer
        const reader=new FileReader();

        reader.onload =()=>{
            const fileBuffer = reader.result;
            S3.upload({
                Bucket: config.bucketName,
                Key: `${config.dirName}/${file.name}`,
                Body: fileBuffer,
                ACL: 'public-read',
                ContentType: file.type
            }, (err,uploadedData) => {
                if (err){
                    console.log(err);
                }
                else{
                    console.log(uploadedData);
                    console.log(file);
                    setdata(uploadedData.Location);
                }
                 
            })
        }
        reader.readAsArrayBuffer(file);
    }
    return(
        <div>
            <input type="file" onChange={handleFileUpload}/>
            {data &&<img id='img' src={data} alt="uploaded Data"/>}
        </div>
    );
}
export default S3uploader;