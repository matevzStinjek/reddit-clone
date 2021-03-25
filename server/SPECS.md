user {
    id
    username
    passwordHash
    passwordSalt
    roles <- admin, moderator, user, guest
    subredditSubscriptions
    posts
    comments
}

subreddit {
    id
    name
    topic
    posts
}

post {
    id
    title
    content
    author
    comments
}

comment {
    id
    content
    votes
    parent
    author
}


FEATURES:
front page
post
comment
upvote
delete (author, admin and moderator)
join subreddit
