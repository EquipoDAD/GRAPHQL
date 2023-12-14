const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB = "mongodb+srv://andresmunoz242:iKtlvNfCSaDKwgzo@cluster0.osyo8ta.mongodb.net/?retryWrites=true&w=majority"

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('connected to MongoDB');
        return server.listen({port: 5000});
    })
    .then((res) => {
        console.log(`Server ready at ${res.url}`);
    })