var query = knex('users').where('username', username);

// TODO: make these work!
// LOGIN CONTROLLER
query.then(function(result) {
  if (!result.length) {
    res.status(401).redirect('/signin');
  } else {
    var hash = knex('users').where('username', username).select('password');
    hash.then(function (hash) {
      //knex returns an array with hash object at index 0
      hash = hash[0].password;
       util.checkPassword(password, hash, function (err, result) {
         if (err) {
           throw err;
         } else {
           // if password is correct
           if (result) {
             // set cookies
             res.cookie('signedIn', true);
             res.cookie('username', username);
             // redirect to dashboard
             res.redirect('/');
             // if password is incorrect
           } else {
             // send error
             res.status(401).redirect('/signin');
           }
         }
       });
    })
    .catch(function (err) {
      console.log('Something went wrong comparing passwords!');
      throw err;
    });
  }
});


// SIGNUP CONTROLLER
var query = knex('users').where('username', username);
query.then(function (result) {
  if (result.length) {
    res.status(401).redirect('/signup');
  } else {
    // hash password with bcrypt before executing the insert statement
    util.hashPassword(password, function(err, hash) {
      if (err) {
        console.log(err);
        throw err;
      } else {
        // store hash in password DB.
        knex('users').returning(['id', 'user', 'username'])
                    .insert({user: user, username: username, password: hash})
                    .then(function (result) {
                      // set cookies
                      res.cookie('signedIn', true);
                      res.cookie('username', username);
                      // redirect to dashboard
                      res.status(302).redirect('/');
                    })
                    .catch(function (err) {
                      throw err;
                    });
      }
    });
  }
}).catch(function (error) {
  console.log(error);
  throw error;
})
