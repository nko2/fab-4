var actions = {};
actions.index = function(request,response){
    req.autenticate(["facebook"], function(error,autenticated){
      console.log(autenticated);
    })
};

module.exports = actions;
