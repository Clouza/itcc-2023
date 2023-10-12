const cancelPopUp = (e) => {
    $(e.offsetParent).addClass('d-none');
}

const backToHome = () => {
    window.location.href = './index.html';
}

const cancelPopUpPage = (e) => {
    $('.login-body').remove();
    $('.registration').append(`
        <div class="registration-body">
            <h2>Registration</h2>
            <div class="registration-form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Wahyu Siwananda" required>
            </div>

            <div class="registration-form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="wahyu@gmail.com" required>
            </div>

            <button class="registration-button-save" onclick="signUpPage(this)">Sign up</button>
            <button class="registration-button-cancel unlink" onclick="backToHome()">Cancel</button>
        </div>
    `);
}

const signIn = () => {
    window.location.href = './profile.html';
}

const signUpPage = (e) => {
    $('.registration-body').remove();
    $('.registration').append(`
        <div class="login-body">
            <h2>Login</h2>
            <div class="registration-form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="yourmail@example.com" value="wahyu@gmail.com" required>
            </div>

            <div class="registration-form-group">
                <label for="password">password</label>
                <input type="password" id="password" placeholder="*******" value="********">
            </div>

            <button class="registration-button-save unlink" onclick="signIn()">Sign in</button>
            <button class="registration-button-cancel unlink" onclick="cancelPopUpPage(this)">Cancel</button>
        </div>
    `);
}

const signUp = (e) => {
    $(e.offsetParent).addClass('d-none');
    $('body').append(`
    <div class="registration" id="login">
        <div>
            <h2>Login</h2>
            <div class="registration-form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="yourmail@example.com" value="wahyu@gmail.com" required>
            </div>

            <div class="registration-form-group">
                <label for="password">password</label>
                <input type="password" id="password" placeholder="*******" value="********">
            </div>

            <button class="registration-button-save unlink" onclick="signIn()">Sign in</button>
            <button class="registration-button-cancel unlink" onclick="cancelPopUp(this)">Cancel</button>
        </div>
    </div>
    `);
}

const registration = () => {
    event.preventDefault();
    
    $('body').append(`
        <div class="registration" id="registration">
            <div>
                <h2>Registration</h2>
                <div class="registration-form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Wahyu Siwananda" required>
                </div>

                <div class="registration-form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="wahyu@gmail.com" required>
                </div>

                <button class="registration-button-save" onclick="signUp(this)">Sign up</button>
                <button class="registration-button-cancel unlink" onclick="cancelPopUp(this)">Cancel</button>
            </div>
        </div>
    `);
}

const activeSection = (section) => {
    if(section == 'settings') {
        $('.profile-settings').removeClass('d-none');
        $('.profile-services').addClass('d-none');
        $('.profile-reviews').addClass('d-none');
        $('.profile-wallet').addClass('d-none');
        $('.profile-privacy').addClass('d-none');

        $('#settingsBtn').addClass('active');
        $('#servicesBtn').removeClass('active');
        $('#reviewsBtn').removeClass('active');
        $('#walletBtn').removeClass('active');
        $('#privacyBtn').removeClass('active');
    }

    if(section == 'services') {
        $('.profile-settings').addClass('d-none');
        $('.profile-services').removeClass('d-none');
        $('.profile-reviews').addClass('d-none');
        $('.profile-wallet').addClass('d-none');
        $('.profile-privacy').addClass('d-none');

        $('#settingsBtn').removeClass('active');
        $('#servicesBtn').addClass('active');
        $('#reviewsBtn').removeClass('active');
        $('#walletBtn').removeClass('active');
        $('#privacyBtn').removeClass('active');
    }

    if(section == 'reviews') {
        $('.profile-settings').addClass('d-none');
        $('.profile-services').addClass('d-none');
        $('.profile-reviews').removeClass('d-none');
        $('.profile-wallet').addClass('d-none');
        $('.profile-privacy').addClass('d-none');

        $('#settingsBtn').removeClass('active');
        $('#servicesBtn').removeClass('active');
        $('#reviewsBtn').addClass('active');
        $('#walletBtn').removeClass('active');
        $('#privacyBtn').removeClass('active');
    }

    if(section == 'wallet') {
        $('.profile-settings').addClass('d-none');
        $('.profile-services').addClass('d-none');
        $('.profile-reviews').addClass('d-none');
        $('.profile-wallet').removeClass('d-none');
        $('.profile-privacy').addClass('d-none');

        $('#settingsBtn').removeClass('active');
        $('#servicesBtn').removeClass('active');
        $('#reviewsBtn').removeClass('active');
        $('#walletBtn').addClass('active');
        $('#privacyBtn').removeClass('active');
    }

    if(section == 'privacy') {
        $('.profile-settings').addClass('d-none');
        $('.profile-services').addClass('d-none');
        $('.profile-reviews').addClass('d-none');
        $('.profile-wallet').addClass('d-none');
        $('.profile-privacy').removeClass('d-none');

        $('#settingsBtn').removeClass('active');
        $('#servicesBtn').removeClass('active');
        $('#reviewsBtn').removeClass('active');
        $('#walletBtn').removeClass ('active');
        $('#privacyBtn').addClass('active');
    }
}