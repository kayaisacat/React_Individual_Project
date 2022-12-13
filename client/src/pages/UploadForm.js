import axios from 'axios'

export default function UploadForm () {

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        console.log(file)
        if (!file) return // file or files?? 
        console.log('about to upload')
        console.log(typeof(file))
        const data = new FormData();
        data.append('file', file, file.name);
        axios.post('http://localhost:4000/upload-photos', data).then((res) => {
            console.log(res.statusText);
        });
    }
    return (
        <div>
            <h1> Upload Image</h1>
            <input type="file" onChange={handleFileChange}/>
        </div>
    )
}