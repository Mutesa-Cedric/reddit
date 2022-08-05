import { gql } from "@apollo/client"

// add post
export const ADD_POST = gql`
 mutation MyMutation(
    $body:String!,
    $image:String!,
    $subreddit_id:ID!,
    $title:String!,
    $username:String!
    )
 {
    insertPost(
        image: $image
        body: $body
        subrredit_id: $subrredit_id
        title: $title
        username: $username
    ){
        body
        created_at
        id
        image
        subreddit_id
        title 
        username
    }
 }
`

// add subreddit
export const ADD_SUBREDDIT = gql`
    mutation myMutation($topic:String!){
        insertSubreddit(topic:$topic){
        id
        topic
        created_at
        }
    }

`