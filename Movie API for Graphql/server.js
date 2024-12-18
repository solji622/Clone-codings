import {ApolloServer, gql} from "apollo-server";

// 따옴표 아닌 백틱 사용
const typeDefs = gql`
    type User {
        id:ID!
        username: String!
        firstName: String!
        lastName: String!
    }
    type Tweet {
        id:ID!
        text:String!
        author: User!
    }
    type Query { # query에 넣은 모든 필드들은 user에 의해 request 됨
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet!
        # user가 어떤 Tweet을 말하는 것인지 모름! > 아규먼트 지정
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id:ID!): Boolean #트윗 삭제 시 트윗 있으면 true, 없으면 false 리턴
    }
`;

const server = new ApolloServer({typeDefs})

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
});
// listen()은 promise 이기에 then()