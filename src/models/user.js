import mongoose from "mongoose";
const { Schema } =  mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true, // Converts the email to lowercase before saving
            validate: {
              validator: function (email) {
                // Regular expression for validating an email
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
              },
              message: (props) => `${props.value} is not a valid email!`,
            },
          },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 64
        },
        image: {
            type: String,
        },
        imagePublicId: {
            type: String,
        },
        role: {
            type: String,
            default: "user",
            enum:[
                'user',
                'admin'  // Add more roles as needed
            ]
        },
        address: {
            type: {},
            default: {
                street: '1 Awoyokun',
                city: 'Onipanu',
                state: 'Lagos',
                zip: 123456,
                country: 'Nigeria'
            }
        },
        OTP:{
            type: String
        }
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema)