module.exports = {


  friendlyName: 'Register',


  description: 'Register user.',


  inputs: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    country: {
      type: 'string',
      required: true,
    },
    phoneNumber: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },


  exits: {
    success: {
      statusCode: 201,
      description: 'New muna user created',
    },
    emailAlreadyInUse: {
      statusCode: 400,
      description: 'email already in use'
    },
    error: {
      description: 'something went wrong'
    }
  },


  fn: async function (inputs) {
    const newEmailAddress = inputs.email.toLowerCase();
    const token = await sails.helpers.strings.random('url-friendly');


    let newUser = await User.create({
      fullName: inputs.fullName,
      email: newEmailAddress,
      password: inputs.password,
      emailProofToken: token,
      emailProofTokenExpiresAt:
        Date.now() + sails.config.custom.emailProofTokenTTL,
    }).fetch();

    const confirmLink = `${sails.config.custom.baseUrl}/user/confirm?token=${token}`;

    const email = {
      to: newUser.email,
      subject: 'Confirm Your account',
      template: 'confirm',
      context: {
        name: newUser.fullName,
        confirmLink: confirmLink,
      },
    };
    await sails.helpers.sendMail(email);

    return exits.success({
      message: `An account has been created for ${newUser.email} successfully. Check your email to verify`,
    });
  }
};
