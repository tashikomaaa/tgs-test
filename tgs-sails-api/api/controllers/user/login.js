const fetch = require("node-fetch");
module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    email: {
      type: 'string',
      required: true,
    },
    phoneNumber: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    success: {
      description: 'Login successful',
    },
    notAUser: {
      statusCode: 404,
      description: 'User not found',
    },
    passwordMismatch: {
      statusCode: 401,
      description: 'Password do not match',
    },
    operationalError: {
      statusCode: 400,
      description: 'The request was formed properly'
    }
  },


  fn: async function (inputs) {
    const email = await User.findOne({ email: inputs.email });
    const phoneNumber = await User.findOne({phoneNumber: inputs.phoneNumber});

    const requestOptions = {
      method: 'POST',
      mode:'no-cors',
      headers: { 'Content-Type': 'Application/json', 'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig', 'access-control-allow-origin' : '*' },
      body: { "email": 'tashikomaa@gmail.com',"phoneNumber": '+33605783465' }
    };
    console.log(requestOptions);
    return fetch(`${'https://staging.api.external.thegoodseat.fr'}/loginuser`, requestOptions)
      .then(user => {
        console.log(user);


        return user;
      });
    // All done.
    return;

  }


};
