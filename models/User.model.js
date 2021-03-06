const {
  Schema,
  model
} = require("mongoose");

let defaultProfileImg = "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"

const userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  passwordHash: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    default: defaultProfileImg,
  },
  city: {
    type: String,
    ENUM: ['Amsterdam', 'Augsburg', 'Berlin', 'Frankfurt', 'Ljubljana', 'Madrid', 'Munich', 'Paris', 'Versailles'],
    require: true
  }
});

const UserModel = new model("user", userSchema);

module.exports = UserModel;
