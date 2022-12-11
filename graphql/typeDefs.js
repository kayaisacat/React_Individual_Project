const { gql } = require('apollo-server')
//     scalar FileUpload
module.exports = gql`
    scalar Upload
    type File {
        url: String!
    }
    type Query {
        uploads: [File]
    }

    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type User {
        email: String!
        username: String!
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(email: String!, password: String!): User!
        uploadFile(file: Upload!): File!
    }
`