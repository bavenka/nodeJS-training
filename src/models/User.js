import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  lastModifiedDate: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model('User', userSchema);

export default User;
