const { UserInputError } = require('apollo-server');
const User = require('../../models/User');

module.exports = {
    Mutation: {
        login: async (_, args) => {
            console.log(args)
            const input_email = args.email;
            const input_password = args.password

            const user = await User.findOne({email:input_email})

            if (!user){
                throw new UserInputError('User not found', {
                    errors: {
                        geneeral: 'User not found'
                    }
                })
            }

            if (user.password != input_password)
            {
                throw new UserInputError('Wrong password', {
                    errors: {
                        geneeral: 'Wrong password'
                    }
                })
            }
            return {
                ...user._doc
            }
        },
        register: async (
            _, args) => {

            const registerinput = args["registerInput"]
            username = registerinput.username
            password = registerinput.password
            email = registerinput.email
            console.log(`username ${username}`)
            
            const foundEmail = await User.findOne({email:email})
            console.log(`${foundEmail}`)
            if (foundEmail != null){
                throw new UserInputError('Email is taken', {
                    errors: {
                        email: 'This email is taken'
                    }
                })
            }
            const newUser = new User ({
                username: username,
                password: password,
                email: email
            });
            const res = await newUser.save();
            console.log(res._doc)
            return {
                ...res._doc
            }

        }

    }
}