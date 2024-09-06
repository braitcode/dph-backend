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
                    <img src="/src/Logo.png" alt="Bizfides Logo">
                </td>
            </tr>
            <tr>
                <td class="content">
                    <h1>Email Verification Required</h1>
                    <p>Hello {firstName},</p>
                    <p>Thank you for signing up with Bizfides! To complete your registration, please verify your email address by clicking the button below:</p>
                    <p style="text-align: center;">
                        <a href="{verificationLink}" class="btn">Verify Email</a>
                    </p>
                    <p>If you didn’t create an account with Bizfides, please ignore this email.</p>
                    <p>Best regards,<br>The Bizfides Team</p>
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
        .logo-div{
          display: flex;
           align-items: center; 
           justify-content: center;
        }

        .logo img {
            width: 46.69px;
            height: 46.69px;
        }

        .logo h1 {
            font-size: 2.5rem;
            color: white;
            margin: 10px 0;
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
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
        }

        .icons img {
            width: 35px;
            height: 35px;
        }
        .email-footer{
          text-align: center; 
          font-size: 0.9rem;
          margin-top: 20px;
        }
        .email-footer img{
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
                width: 100%;
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
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <div class="logo-div">
                <img src="./images/Group 1.png" alt="Logo">
                <h1>DPH</h1>
            </div>
            <p>DIGITAL PRESENCE HUB</p>
        </div>

        <div class="email-body">
            <h2>Hi, {firstName}</h2>
            <p>By resetting your password, you'll also confirm your email associated with the account. If you didn't request this reset, you can safely ignore this email.</p>
            <a href="{resetLink}" class="reset-btn">Reset Password</a>


        </div>

        <div class="icons">
            <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647630/twitter_e8el6s.png" alt="Twitter"></a>
            <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647885/youtube_mx48xs.png" alt="YouTube"></a>
            <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/instagram_bs7157.png" alt="Instagram"></a>
            <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/linkedin_jdppgk.png" alt="LinkedIn"></a>
            <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/facebook_i3cu6z.png" alt="Facebook"></a>
        </div>

        <p class="email-footer">
            <img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725649485/copyright-regular_jeqo6m.svg" alt=""> 
            2024 DPH Inc. All rights reserved.
        </p>
    </div>
</body>
</html>
`;