import { useMutation, gql } from '@apollo/client'

const UPLOAD_FILE = gql`
    Upload: GraphQLUpload
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file){
            url
        }
    }
`

export default function UploadForm () {
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        update(_, result){
            console.log(result);
        },
        onError(err){
            console.log(err)
        },
        onCompleted: data=> console.log(data)

    })
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        console.log(file)
        if (!file) return // file or files?? 
        console.log('about to upload')
        uploadFile({variables: {file}})
    }
    return (
        <div>
            <h1> Upload Image</h1>
            <input type="file" onChange={handleFileChange}/>
        </div>
    )
}