var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: false, required: true },
    email     : { type: 'email',  unique: true, required: true },
    passports : { collection: 'Passport', via: 'user' },
    currency  : { type: 'string', unique: false },
    debt      : { type: 'integer', defaultsTo: 0 }
  }
};

module.exports = User;
