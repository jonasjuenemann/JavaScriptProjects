const Figg = require('figg')
const savedData = new Figg()

let database = {
    users: { john: {
            username: "john@gmail.com",
            articleIds: [1,3,4],
            commentIds: [6,8,45]
        }
    },
    articles: {},
    comments: {},
    nextArticleId: 1,
    nextCommentId: 1
};


// Add multiple properties
savedData.set(database)

// Get a property
console.log(savedData.get('users'))
// 'John Div'

// Save config file (config.yml by default)
savedData.save()

// Load existing config file as an object
let myData = savedData.load()
console.log(myData)