import {ApolloServer, gql} from "apollo-server";

// 따옴표 아닌 백틱 사용
const typeDefs = gql`
    type Query {
        text: String
        hello: String
    }
`;

const server = new ApolloServer({typeDefs})

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
});
// listen()은 promise 이기에 then()