const {GraphQLUpload} = require('apollo-server');

const path = require('path')
const fs = require('fs')
//     FileUpload: GraphQLUpload,    
module.exports = {
    Query: {
        uploads: (_, args) => { console.log('fetch uploaded images. todo')}
    },
    Mutation: {
        uploadFile: async(_, args) => {

            console.log('on server')
            console.log(args)
            const {createReadStream, filename, mimetype, encoding} = await file

            const stream = createReadStream()
            const pathName = path.join(__dirname, `/public/images/${filename}`)
            await stream.pipe(fs.createWriteStream(pathName))

            return {
                url: `http://localhost:5000/images/${filename}`
            }

        }
    }
}