import {ApolloServer, gql} from "apollo-server";

// 따옴표 아닌 백틱 사용
let tweets = [
    {
        id:"1",
        text:"first one!",
    },
    {
        id:"2",
        text:"second one",
    },
]

let users = [
    {
        id: "1",
        firstName: "solji",
        lastName: "Lee",
    },
    {
        id:"2",
        firstName: "sungwoo",
        lastName: "kim",
    },
]

const typeDefs = gql`
    type User {
        id:ID!
        firstName: String!
        lastName: String!
        fullName: String!
    }
    type Tweet {
        id:ID!
        text:String!
        author: User
    }
    type Query { # query에 넣은 모든 필드들은 user에 의해 request 됨
        allUsers: [User!]!
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
        # user가 어떤 Tweet을 말하는 것인지 모름! > 아규먼트 지정
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id:ID!): Boolean #트윗 삭제 시 트윗 있으면 true, 없으면 false 리턴
    }
`;

const resolvers = {
    Query: {
        allTweets() {
            return tweets;
        },
        tweet(root, {id}) {
            return tweets.find((tweet) => tweet.id === id)
        },
        allUsers() {
            console.log("allUsers called!")
            return users;
        },
    },
    Mutation: {
        postTweet(_, {text, userId}) {
            const newTweet = {
                id: tweets.length + 1,
                text,
            };
            tweets.push(newTweet);
            return newTweet;
        },

        deleteTweet(_, {id}) {
            const tweet = tweets.find(tweet => tweet.id === id);
            if (!tweet) return false;
            tweets = tweets.filter(tweet => tweet.id !== id) //tweet db array를 정리하는 시간
            // tweet의 id가 삭제하려는 id와 같지 않은 tweet들로 filter를 거치면 array 반환 > tweets let으로 변환
            return true;
        },
    },
    User: {
        fullName({firstName, lastName}) {
            return `${firstName} ${lastName}`;
        }
    },
};

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
});
// listen()은 promise 이기에 then()