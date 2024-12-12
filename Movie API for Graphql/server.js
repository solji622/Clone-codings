import {ApolloServer, gql} from "apollo-server";

const server = new ApolloServer({})

server.listen().than(({url}) => {
    console.log(`Running on ${url}`)
})
// listen()은 promise 이기에 than()