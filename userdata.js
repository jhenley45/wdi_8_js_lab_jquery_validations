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
  phone_error = $('#user_ph_error');
  email_error = $('#user_email_error');



  $('#add_user_data').submit(function(event) {
    //Set errors equal to false
    ValidationApp.errors = false;
    // Hide any errors from previous attempts
    $('span').hide();

    user_name = $('#user_name').val();
    user_age = $('#user_age').val();
    user_ph = $('#user_ph').val();
    user_email = $('#user_email').val();

    ValidationApp.validateName(user_name);
    ValidationApp.validatePhone(user_ph);
    ValidationApp.validateEmail(user_email);
    ValidationApp.validateAge(user_age);

    if (ValidationApp.errors === false) {
      alert('all good');
    } else {
      alert('noooo baddd');
      event.preventDefault();
    };
  });


});

var ValidationApp = {

};

ValidationApp.validateName = function(name) {
  if (!(name && name.length > 3)) {
    $('#user_name_error').show();
    this.errors = true;
  }
};

ValidationApp.validateAge = function(age) {
  if (!(age && !isNaN(age))) {
    $('#user_age_error').show();
    this.errors = true;
  }
};

ValidationApp.validatePhone = function(phone) {
  //This is a regular expression for a phone
  var phoneRegex = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;

  if(!phoneRegex.test(phone)) {
    $('#user_ph_error').show();
    this.errors = true;
  }
};

ValidationApp.validateEmail = function(email) {
  //This is a regular expression for email
  var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
  if(!emailRegex.test(email)) {
    $('#user_email_error').show();
    this.errors = true;
  }
};
