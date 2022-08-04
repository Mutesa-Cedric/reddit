import { gql } from "@apollo/client"

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