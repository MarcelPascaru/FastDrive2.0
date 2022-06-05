<?php
include(./partials/header.php)
?>

    <div class="form-container">
        <div class="title-div">
            <h1 class="title">Login</h1>
            <span class="subtitle">Welcome Back!</span>
        </div>
        <!-- Form Section -->
        <form action="" method="">
            <div class="row grid">
                <!-- Username -->
                <div class="row">
                    <label for="username">User Name</label>
                    <input type="text" id="username" name="userName" placeholder="Enter your user name" required>
                </div>
                <!-- Password -->
                <div class="row">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </div>
                <!-- Submit Button -->
                <div class="row">
                    <input type="submit" id="submitBtn" name="submit" value="Login" required>
                    <a href="./index.html" class="cancel-btn">Cancel</a>
                    <span class="registerLink">Don't have an account? <a href="./register.html">Register</a></span>
                </div>
            </div>
        </form>

    </div>

<?php
include(./partials/footer.php)
?>    
