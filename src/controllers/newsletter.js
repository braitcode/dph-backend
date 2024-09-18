import { sendNewsletterMail } from '../helpers/email.js';
import User from '../models/user.js';
// import { saveSubscriber } from '../models/subscriber.js'; // Assuming you are saving subscribers in a database

// Newsletter subscription controller
export const subscribeToNewsletter = async (req, res) => {
    const { email } = req.body;

    // Input validation
    if (!email) {
        return res.status(400).json({ message: "Email and first name are required" });
    }

    

    const user = await User.findOne({email});
      if (!user){
          return res.status(404).json({success:false, message: "User not found"});
      }

     

    // Basic email format validation (you can add more complex validation)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address" });
    }

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: "Email is taken" });
        }
        // Save subscriber to database (or any storage system)
        // await saveSubscriber({ email, firstName });

        // Send newsletter confirmation email
        const homeLink = "https://dph-frontend.vercel.app"; // Replace with your actual website domain
        await sendNewsletterMail(email, user.fullname, homeLink);

        res.status(200).json({ message: "Subscription successful!" });
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
};
