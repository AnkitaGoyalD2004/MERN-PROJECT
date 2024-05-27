//Schema : Define the structure of the documents within a collection . It specifies the fields , their types , and any additional contraints or validation.

//JWT
//JWT is a open standard that defines a compact and self-contained way for securely transmitting information between particle as a JSON object.
//JWT is used for authentication and authorization

//Components of a JWT
//Header -> Contains metadata about the token
//payload -> Contains claims or statements about an entity and additional data
//signature -> to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way
const jwt = require("jsonwebtoken");
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

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Tokens , such as (JSON web token) are typically not stored in database along with other user details , they are issued by the server during the authentication process and then stored on the client-side (eg .. , in cookies or local storage) for later use;

// Model Acts as a higher level abstraction that interacts with the database based on the defined schema . it represents a collection and provides an interface for querying creating updating and deleting documents in that collection . Models are created from schema and enable you to work with MongoDB data in more structured manner in your application

//define the model or the collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;
