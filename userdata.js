$(document).ready(function(){
  var name,
    age,
    phone,
    email,
    name_error,
    age_error,
    phone_error,
    email_error;

  ValidationApp.errors = false;

  $('span').hide();
  name_error = $('#user_name_error');
  age_error = $('#user_age_error');
  phone_error = $('#user_ph_error');
  email_error = $('#user_email_error');



  $('#add_user_data').submit(function(event) {
    event.preventDefault();
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
    }
  });


});

var ValidationApp = {

};

ValidationApp.validateName = function(name) {
  if(name) {
    alert('yayyy name');
  }
  else {
    $('#user_name_error').show();
    this.errors = true;
  }
};

ValidationApp.validateAge = function(age) {
  if(age) {
    alert('yayyy age!');
  }
  else {
    $('#user_age_error').show();
    this.errors = true;
  }
};

ValidationApp.validatePhone = function(phone) {
  //This is a regular expression for a phone
  var phoneRegex = /^[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[_.-]+[0-9]+[0-9]+[0-9]+[0-9]$/;

  if(phoneRegex.test(phone)) {
    alert('yayyy phone!');
  }
  else {
    $('#user_ph_error').show();
    this.errors = true;
  }
};

ValidationApp.validateEmail = function(email) {
  //This is a regular expression for email
  var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
  if(emailRegex.test(email)) {
    alert('yayyy email!');
  }
  else {
    $('#user_email_error').show();
    this.errors = true;
  }
};
