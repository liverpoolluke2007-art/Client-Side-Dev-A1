$(document).ready(function () {

    // ==========================================================
    // SECTION 1: GLOBAL / SHARED (All Pages)
    // ==========================================================

    // 1. HEADER SCROLL EFFECT
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        
        // Add a class to the header if we scroll down
        if (scrollPosition > 50) {
            $('#site-header').addClass('site-header--scrolled');
        } else {
            $('#site-header').removeClass('site-header--scrolled');
        }
    });

    // ==========================================================
    // SECTION 2: HOME PAGE (index.html)
    // Group members working on the home page, put your JS here!
    // ==========================================================


    // ==========================================================
    // SECTION 3: CONTACT PAGE (contact.html)
    // Aaron's section - enter at your own risk
    // ==========================================================

    // 1. CONTACT CARDS ACCORDION
    // ==========================================
    $('.contact-card').click(function () {
        // Find the details section inside the card we clicked
        var details = $(this).find('.contact-card__details');
        
        // Hide all other card details first (so the page doesn't get a mile long)
        $('.contact-card__details').slideUp();
        
        // If the one we clicked is hidden, slide it down
        if (details.is(':hidden')) {
            details.slideDown();
        }
    });

    // ==========================================
    // 2. CONTACT FORM VALIDATION
    // (If this form breaks during grading I am dropping out)
    // ==========================================
    var maxChars = 500;

    // Character counter for the message box
    $('#contact-message').keyup(function () {
        var textLength = $(this).val().length;
        $('#char-count').text(textLength + ' / ' + maxChars);
    });

    // Validate the form when the submit button is clicked
    $('#contact-form').submit(function (e) {
        // Stop the form from refreshing the page (took me way too long to find this out)
        e.preventDefault();
        
        var isValid = true;
        
        // Get the values from the input boxes
        var name = $('#contact-name').val();
        var email = $('#contact-email').val();
        var department = $('#contact-department').val();
        var message = $('#contact-message').val();

        // Check if name is empty (people really try to submit blank forms??)
        if (name == "") {
            $('#error-name').text('Please enter your full name.').show();
            $('#contact-name').addClass('form-input--error');
            isValid = false;
        } else {
            $('#error-name').hide();
            $('#contact-name').removeClass('form-input--error');
        }

        // Check email using Regex (thank you chatgpt)
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (emailRegex.test(email) == false) {
            $('#error-email').text('Please enter a valid email address.').show();
            $('#contact-email').addClass('form-input--error');
            isValid = false;
        } else {
            $('#error-email').hide();
            $('#contact-email').removeClass('form-input--error');
        }

        // Check if a department is selected
        if (department == null || department == "") {
            $('#error-department').text('Please select a department.').show();
            $('#contact-department').addClass('form-input--error');
            isValid = false;
        } else {
            $('#error-department').hide();
            $('#contact-department').removeClass('form-input--error');
        }

        // Check if message is long enough (we don't want 'hi' as a message)
        if (message.length < 10) {
            $('#error-message').text('Message must be at least 10 characters long.').show();
            $('#contact-message').addClass('form-input--error');
            isValid = false;
        } else {
            $('#error-message').hide();
            $('#contact-message').removeClass('form-input--error');
        }

        // If there are no errors, show the success message
        if (isValid == true) {
            // Hide the form
            $('#contact-form').slideUp();
            
            // Build the summary using basic string concatenation
            var summaryHtml = "<p><strong>Name:</strong> " + name + "</p>" +
                              "<p><strong>Email:</strong> " + email + "</p>" +
                              "<p><strong>Department:</strong> " + department + "</p>" +
                              "<p><strong>Message:</strong> " + message + "</p>";
            
            // Put the summary into the success box and show it
            $('#form-success-summary').html(summaryHtml);
            $('#form-success').slideDown();
        }
    });

    // Reset Form when "Send Another Message" is clicked (because they might want to complain twice)
    $('#form-success-btn').click(function() {
        $('#form-success').slideUp(function() {
            // Clear the form fields
            $('#contact-form')[0].reset();
            $('#char-count').text('0 / ' + maxChars);
            
            // Show the form again
            $('#contact-form').slideDown();
        });
    });

    // ==========================================
    // 3. FAQ ACCORDION (Please do not touch this part, it works magically and might explode if you do)
    // ==========================================
    $('.faq-item__question').click(function () {
        // Find the answer that is right next to the question we clicked
        var answer = $(this).next('.faq-item__answer');
        
        // Hide all answers
        $('.faq-item__answer').slideUp();
        
        // Show the answer if it was hidden
        if (answer.is(':hidden')) {
            answer.slideDown();
        }
    });

});
