<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./sass/main.css">
    <title>Register</title>
</head>
<body class="register">
    
    <div class="form-container">
        <div class="title-div">
            <h1 class="title">Register</h1>
            <span class="subtitle">Thanks for choosing us.</span>
        </div>
        <form action="" method="">
            <div class="row grid">
                <!-- Username -->
                <div class="row">
                    <label for="username">User Name</label>
                    <input type="text" id="username" name="userName" placeholder="Enter your user name" required>
                </div>
                <!-- Email -->
                <div class="row">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                </div>
                <!-- Phone Number -->
                <div class="row">
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required>
                </div>
                <!-- Password -->
                <div class="row">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </div>
                <!-- Submit Button -->
                <div class="row">
                    <input type="submit" id="submitBtn" name="submit" value="Register" required>
                    <a href="./index.html" class="cancel-btn">Cancel</a>
                    <span class="registerLink">Don't have an account? <a href="./register.html">Register</a></span>
                </div>
            </div>
        </form>
    </div>

</body>
</html>