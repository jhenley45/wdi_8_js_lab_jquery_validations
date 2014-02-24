$(document).ready(function(){
  var name,
    age,
    phone,
    email,
    name_error,
    age_error,
    phone_error,
    email_error;

  $('span').hide();
  name_error = $('#user_name_error');
  age_error = $('#user_age_error');
  phone_error = $('#user_phone_error');
  email_error = $('#user_email_error');



  $('#add_user_data').submit(function(event) {
    event.preventDefault();
    user_name = $('#user_name').val();
    user_age = $('#user_age').val();
    user_ph = $('#user_ph').val();
    user_email = $('#user_email').val();

    ValidationApp.validateName(user_name);
    // ValidationApp.validatePhone(user_ph);
    // ValidationApp.validateEmail(user_email);

    // ValidationApp.validateage(user_age);
  })


});

var ValidationApp = {

};

ValidationApp.validateName = function(name) {
  if(name) {
    alert('yayyy!');
  }
  else {
    alert('nooooo!');
  }
};

ValidationApp.validatePhone = function() {
  //This is a regular expression for a phone
  var phoneRegex = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;

  if(phoneRegex.test(this.userPhoneVal)) {
  }
  else {
  }
};

ValidationApp.validateEmail = function() {
  //This is a regular expression for email
  var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
  if(emailRegex.test(this.userEmailVal)) {
  }
  else {
  }
};
