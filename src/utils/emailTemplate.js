export const VERIFICATION_EMAIL_TEMPLATE = `
 <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
           body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 20px 0;
        }
        .header img {
            width: 150px;
        }
        .content {
            text-align: left;
            color: #333333;
            line-height: 1.6;
        }
        .content h1 {
            color: #333333;
            font-size: 24px;
            margin: 0 0 20px;
        }
        .content p {
            margin: 0 0 20px;
        }
        .btn {
            display: inline-block;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #666666;
        }
        .footer p {
            margin: 0;
        }
        </style>
    </head>
    <body>
        <table class="container">
            <tr>
                <td class="header">
                    <img src="/src/Logo.png" alt="Digital Presence Hub Logo">
                </td>
            </tr>
            <tr>
                <td class="content">
                    <h1>Email Verification Required</h1>
                    <p>Hello {firstName},</p>
                    <p>Thank you for signing up with Digital Presence Hub! To complete your registration, please verify your email address by clicking the button below:</p>
                    <p style="text-align: center;">
                        <a href="{verificationLink}" class="btn">Verify Email</a>
                    </p>
                    <p>If you didn’t create an account with Digital Presence Hub, please ignore this email.</p>
                    <p>Best regards,<br>DPH Team</p>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <p>&copy; 2024 [Your Company]. All rights reserved.</p>
                    <p>[Your Company Address]</p>
                </td>
            </tr>
        </table>
    </body>
    </html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <link rel="stylesheet" href="../new.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">

    <style>
        body {
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
        background-color: #EEFFF7;
    }
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
        background-color: #EEFFF7;
    }

    .container {
        background-color: #EEFFF7;
        width: 90%;
        max-width: 700px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
    }
    .container {
        background-color: #EEFFF7;
        width: 90%;
        max-width: 700px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
    }

    .logo {
        background-color: #1E3A2D;
        padding: 20px;
        text-align: center;
    }

    .logo-div {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }
    .logo {
        background-color: #1E3A2D;
        padding: 20px;
        text-align: center;
    }

    .logo-div {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }

    .logo img {
        width: 46.69px;
        height: 46.69px;
    }
    .logo img {
        width: 46.69px;
        height: 46.69px;
    }

    .logo h1 {
        font-size: 2.5rem;
        color: white;
        margin: 10px 0;
        display: inline-block;
    }
    .logo h1 {
        font-size: 2.5rem;
        color: white;
        margin: 10px 0;
        display: inline-block;
    }

    .logo p {
        color: white;
        font-size: 1rem;
        margin: 0;
    }
    .logo p {
        color: white;
        font-size: 1rem;
        margin: 0;
    }

    .email-body {
        text-align: center;
        padding: 20px;
        font-size: 1.2rem;
        line-height: 1.6;
    }
    .email-body {
        text-align: center;
        padding: 20px;
        font-size: 1.2rem;
        line-height: 1.6;
    }

    .email-body p {
        margin: 0 0 20px;
        color: #333;
    }
    .email-body p {
        margin: 0 0 20px;
        color: #333;
    }

    .reset-btn {
        background-color: #028A4C;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
    }
    .reset-btn {
        background-color: #028A4C;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
    }

    .reset-btn:hover {
        background-color: #026f39;
    }
    .reset-btn:hover {
        background-color: #026f39;
    }

    .icons {
        width: 100%;
        text-align: center;
        margin: 20px 0;
    }

    .icons table {
        margin: 0 auto;
    }
    .icons {
        width: 100%;
        text-align: center;
        margin: 20px 0;
    }

    .icons table {
        margin: 0 auto;
    }

    .icons img {
        width: 35px;
        height: 35px;
        margin: 0 10px;
    }

    .email-footer {
        text-align: center;
        font-size: 0.9rem;
        margin-top: 20px;
    }

    .email-footer img {
        width: 20px;
        height: 20px;
    }
    .icons img {
        width: 35px;
        height: 35px;
        margin: 0 10px;
    }

    .email-footer {
        text-align: center;
        font-size: 0.9rem;
        margin-top: 20px;
    }

    .email-footer img {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        .container {
            padding: 15px;
        }
    @media (max-width: 768px) {
        .container {
            padding: 15px;
        }

        .logo h1 {
            font-size: 2rem;
        }
        .logo h1 {
            font-size: 2rem;
        }

        .email-body {
            font-size: 1rem;
        }
        .email-body {
            font-size: 1rem;
        }

        .reset-btn {
            width: 90%;
        }

        .icons img {
            width: 30px;
            height: 30px;
        }
    }
        .icons img {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 480px) {
        .email-body {
            font-size: 0.9rem;
        }
    @media (max-width: 480px) {
        .email-body {
            font-size: 0.9rem;
        }

        .icons img {
            width: 28px;
            height: 28px;
        }
        .reset-btn {
            width: 90%;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <!-- Logo Section -->
        <!-- Logo Section -->
        <div class="logo">
            <div class="logo-div">
                <table align="center">
                    <tr>
                        <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725820904/Group_1_cl4znh.png" alt="dph logo"></a></td>
                        <td>
                            <h1 style="margin: 0 10px;">DPH</h1>
                        </td>
                    </tr>
                </table>
                <table align="center">
                    <tr>
                        <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725820904/Group_1_cl4znh.png" alt="dph logo"></a></td>
                        <td>
                            <h1 style="margin: 0 10px;">DPH</h1>
                        </td>
                    </tr>
                </table>
            </div>
            <p>DIGITAL PRESENCE HUB</p>
        </div>

        <!-- Email Body Section -->
        <!-- Email Body Section -->
        <div class="email-body">
            <h2>Hi, {firstName}</h2>
            <p>By resetting your password, you'll also confirm your email associated with the account. If you didn't request this reset, you can safely ignore this email.</p>
            <a href="{resetLink}" class="reset-btn">Reset Password</a>
        </div>

        <!-- Icons Section -->
        <div class="icons">
            <table align="center">
                <tr>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647630/twitter_e8el6s.png" alt="Twitter"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647885/youtube_mx48xs.png" alt="YouTube"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/instagram_bs7157.png" alt="Instagram"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/linkedin_jdppgk.png" alt="LinkedIn"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/facebook_i3cu6z.png" alt="Facebook"></a></td>
                </tr>
            </table>
        </div>

        <!-- Footer Section -->
        <p class="email-footer">
            <img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725649485/copyright-regular_jeqo6m.svg" alt=""> 
            2024 DPH Inc. All rights reserved.
        </p>
    </div>
</body>
</html>
`;

export const NEWSLETTER_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <link rel="stylesheet" href="../new.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">

    <style>
        body {
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
        background-color: #EEFFF7;
    }

    .container {
        background-color: #EEFFF7;
        width: 90%;
        max-width: 700px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
    }

    .logo {
        background-color: #1E3A2D;
        padding: 20px;
        text-align: center;
    }

    .logo-div {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
    }

    .logo img {
        width: 46.69px;
        height: 46.69px;
    }

    .logo h1 {
        font-size: 2.5rem;
        color: white;
        margin: 10px 0;
        display: inline-block;
    }

    .logo p {
        color: white;
        font-size: 1rem;
        margin: 0;
    }

    .email-body {
        text-align: center;
        padding: 20px;
        font-size: 1.2rem;
        line-height: 1.6;
        text-decoration: none;
    }

    .email-body p {
        margin: 0 0 20px;
        color: #333;
    }

    .reset-btn {
        background-color: #028A4C;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
    }

    .reset-btn:hover {
        background-color: #026f39;
    }

    .icons {
        width: 100%;
        text-align: center;
        margin: 20px 0;
    }

    .icons table {
        margin: 0 auto;
    }

    .icons img {
        width: 35px;
        height: 35px;
        margin: 0 10px;
    }

    .email-footer {
        text-align: center;
        font-size: 0.9rem;
        margin-top: 20px;
    }

    .email-footer img {
        width: 20px;
        height: 20px;
    }

    @media (max-width: 768px) {
        .container {
            padding: 15px;
        }

        .logo h1 {
            font-size: 2rem;
        }

        .email-body {
            font-size: 1rem;
        }

        .reset-btn {
            width: 90%;
        }

        .icons img {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 480px) {
        .email-body {
            font-size: 0.9rem;
        }

        .icons img {
            width: 28px;
            height: 28px;
        }
        .reset-btn {
            width: 90%;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <!-- Logo Section -->
        <div class="logo">
            <div class="logo-div">
                <table align="center">
                    <tr>
                        <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725820904/Group_1_cl4znh.png" alt="dph logo"></a></td>
                        <td>
                            <h1 style="margin: 0 10px;">DPH</h1>
                        </td>
                    </tr>
                </table>
            </div>
            <p>DIGITAL PRESENCE HUB</p>
        </div>

        <!-- Email Body Section -->
        <div class="email-body">
            <h2>Hi, {firstName}</h2>
            <p>Thank you for subscribing to Digital Presence Hub! We’re excited to have you on board and look forward to supporting your business as you build and enhance your online presence.</p>
            <a href="{homeLink}" class="reset-btn">Click To Go back Home</a>
        </div>

        <!-- Icons Section -->
        <div class="icons">
            <table align="center">
                <tr>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647630/twitter_e8el6s.png" alt="Twitter"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647885/youtube_mx48xs.png" alt="YouTube"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/instagram_bs7157.png" alt="Instagram"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/linkedin_jdppgk.png" alt="LinkedIn"></a></td>
                    <td><a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/facebook_i3cu6z.png" alt="Facebook"></a></td>
                </tr>
            </table>
        </div>

        <!-- Footer Section -->
        <!-- Footer Section -->
        <p class="email-footer">
            <img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725649485/copyright-regular_jeqo6m.svg" alt=""> 
            2024 DPH Inc. All rights reserved.
        </p>
    </div>
</body>
</html>
`;