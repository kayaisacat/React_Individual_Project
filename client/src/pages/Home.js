import React from 'react'

import UploadForm from './UploadForm'
import Photos from './Photos'
// to do to move upload to a different url or make a diffeerent default url 
function Home () {
    return (
        <div>
            <UploadForm />
            <Photos />
        </div>
    )
}

export default Home;