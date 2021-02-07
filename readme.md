### menu updater app

This will be used to create, edit and delete menu items in a restaurant database

CURRENT TODO
- add schema for spirits, cocktails, and non-alcoholic
- build interfaces for them

mongoadmin
fixie6187kida
"serverKey" : "jcZWLiFUfrKv/Dnxr/4iu4iIHhA="

bcrypt - hashing library. has issues related to base64 encoding? 

need to implement authentication...
jsonwebtoken seems outdated. probably won't use that
read up on :
dotenv
passport
passport-local
passport-local-mongoose
express-session
connect-flash
express-handlebars
cookie-parser
body-parser (review..)

listening to syntax episode 123 march 4 2019
  session based - serveer side storage
  token based 
    - json web tokens (JWT)
    - generally client side storage
    - the server does not store a list of logged in users
    - hard to expire - you must maintain a list of blacklisted tokens... don't know what this means
    

  session based authentication
    - popular for server rendered apps
    - stateful
    - maintain a list of session id's
    - sessions are passive - once you're logged in there's a cookie "set in your browser"
    
    - wes bos describes one of this apps that use cookies AND JWT: 
        - he uses react and graphql and authenticates with jwt but stores it in a cookie rather than localstorage. If he used localstorage, users will run into situations where they open the app, see the "you're logged out" page, and then the app finds localstorage data, sends it back to the server, and THEN shows the logged in page. if the jwt is stored in a cookie, then a logged in user won't see the "logged out" page.  
        - localstorage doesn't just send itself with every request, you have to actively pass it in. data stored in cookies ARE sent with every request for free. FOR FREE.

  it's important to SANITIZE INPUTS.

//////////////////////////////////////////
  I'm following this tutorial:
  https://blog.logrocket.com/building-a-password-hasher-in-node-js/

  editing index.js to use crypto, logger function, and generate random salt
  NEVERMIND. it was just demonstrating how salting works in node. The author specifically says not to use this in production

lets use BCRYPT