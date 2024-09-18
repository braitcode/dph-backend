import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure the email is unique
  },
  subscribedAt: {
    type: Date,
    default: Date.now,  // Record when the user subscribed
  },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);
export default Subscriber;
