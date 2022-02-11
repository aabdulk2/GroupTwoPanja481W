src='https://code.jquery.com/jquery-3.2.1.min.js';
$(function () {
    $('#sign-up').on('click', function(e){
        $('.login-form').css('display', 'none');
        $('.signup-form').css('display', 'inline');
        e.preventDefault();
    });
});
$(function () {
    $('#sign-in').on('click', function(e){
        $('.signup-form').css('display', 'none');
        $('.login-form').css('display', 'inline');
        e.preventDefault();
    });
});
