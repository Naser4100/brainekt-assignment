import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email']
  },
  phone: {
    type: String,
    required: [true, 'Please enter your phone']
  },

},
  {
  timestamps: true,
});
const User = mongoose.model('user', userSchema);
export default User;
