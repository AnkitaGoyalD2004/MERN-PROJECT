//Schema : Define the structure of the documents within a collection . It specifies the fields , their types , and any additional contraints or validation.
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//secure the password with the bcrypt
//middleware

userSchema.pre("save", async function (next) {
  // console.log(this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);

    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

// Model Acts as a higher level abstraction that interacts with the database based on the defined schema . it represents a collection and provides an interface for querying creating updating and deleting documents in that collection . Models are created from schema and enable you to work with MongoDB data in more structured manner in your application

//define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
