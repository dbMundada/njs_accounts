import React from 'react'

import Themes from 'react-ui-themes-superflows'
import axios from "axios";
import { UploadToS3 } from 'react-upload-to-s3'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const theme = Themes.getTheme("Default");
    // const secrets = getSecrets();
    const secrets = {
        username: "sdger",
        password: "sdgererg"
    };

    return (
        <div className='mt-5'>
            <UploadToS3
                bucket="myuploads"
                awsRegion="awsRegion"
                awsKey="awsAccessKey"
                awsSecret={secrets}
                awsMediaConvertEndPoint="https://mediaconvert.awsRegion.amazonaws.com"
                type="image"
                mediaConvertRole="mediaconvert_role"
                theme={theme}
                showNewUpload={false}
                onResult={async (result) => {
                    const res = await axios.get("https://mediaconvert.awsRegion.amazonaws.com", secrets);
                    console.log('on Result', res);
                }} />
        </div>
     );

}

export default App