user {
    id
    username
    passwordHash
    passwordSalt
    -- roles <- admin, moderator, user, guest // rethink
    moderatedSubreddits
    subredditSubscriptions
    posts
    comments
}

subreddit {
    id
    name
    creator
    moderators
    topic
    posts
}

post {
    id
    title
    content
    author
    subreddit
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
delete (author, admin and moderator)
join subreddit


POINTS OF INTEREST:
- modularity/testability/scalability/readability
- seperation of concerns
- granular authorization
- validation through custom annotations
- role based base query builder
- dataloader to solve N+1 problem
