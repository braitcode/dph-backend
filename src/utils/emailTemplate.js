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
    
}

.container{
    
    background-color: #EEFFF7;
    width: 700px;
    height: 617px;
}

.logo{
    background-color: #1E3A2D;
    width: 100%;
    height: 160px;
}
.new{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
}

.header p{
    display: flex;
    justify-content: center;
    font-size: 35px;
    font-weight: bold;
    font-family: "Space Grotesk", sans-serif;
    
}
.email-body{
    width: 620px;
    height: 124px;
    font-size: 24px;
    line-height: 30.62px;
}
.email-body p{
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
}
.reset-btn{
    background-color: #028A4C;
    border: none;
    width: 433px;
    height: 40px;
    color: white;
    border-radius: 4.9px;
    font-family: "Space Grotesk", sans-serif;
    cursor: pointer;
}
.icons{
     width: 320px;
     display: flex;
     gap: 29.23px;
}

</style>
</head>
<body>
    <div class="container">
        <div class="logo" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div class="" style="display: flex; align-items: center; height: 60px;">
                <img src="./images/Group 1.png" alt="" style="width: 46.69px; height: 46.69px;">
                <h1 style="font-size: 49px;color: white;">DPH</h1>
            </div>
            <p style="color: white; font-family: Space Grotesk;">DIGITAL PRESENCE HUB</p>
        </div>
        <div class="email">
            <div class="new">
                <div class="header" style="height: 57px;">

                    <p>Hi, {firstName}</p>
                </div>
                <div class="email-body">
    
                    <p>By resetting your password, you'll also confirm your email associated with the account. if you didn't request this reset, you can safely ignore this emial.</p>
                </div>
                <div class="">
                    <a href="{resetLink}"><button class="reset-btn">Reset Password</button></a>
                </div>
                <div class="icons">
                    <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647630/twitter_e8el6s.png" style="width: 38.46px; height: 38.46px;" alt="Twitter"></a>
                    <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647885/youtube_mx48xs.png" style="width: 38.46px; height: 38.46px;" alt="YouTube"></a>
                    <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/instagram_bs7157.png" style="width: 38.46px; height: 38.46px;" alt="Instagram"></a>
                    <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/linkedin_jdppgk.png" style="width: 38.46px; height: 38.46px;" alt="LinkedIn"></a>
                    <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725647884/facebook_i3cu6z.png" style="width: 38.46px; height: 38.46px;" alt="Facebook"></a>
                </div>
                <p style="display: flex; gap: 5px; font-family: Space Grotesk;">
                    <a href="#"><img src="https://res.cloudinary.com/dww4lgcy9/image/upload/v1725649485/copyright-regular_jeqo6m.svg" style="width: 20.46px; height: 20.46px;" alt=""></a> 2024 DPH Inc. All rights reserved.
                </p>
                
            </div>
        </div>
        <!-- <div class="text-body">
        </div> -->
        
       
        <div class="">

        </div>
    </div>

</body>
</html>
`;