window.onload = function () {
  const yourname = document.getElementById("name")
  const youremail = document.getElementById("email")
  const form = document.getElementById('form')

  form.addEventListener('submit', (e) => {
    if (yourname.value === "" || yourname.value === null) {
      yourname.style.background = '#640d0f';
      document.getElementById('error-message').innerHTML = "Please enter your name!";
    }
    if (youremail.value === "" || youremail.value === null) {
      youremail.style.background = '#640d0f'
      document.getElementById('email-error').innerHTML = "Please enter your email!";
    } else if (!validateEmail(youremail)) {
      document.getElementById('email-error').innerHTML = "Your format e-mail is not valid!";
    }
    e.preventDefault()
  })
}

function validateEmail(youremail) {
  var temail = trim(email.value); // value of field with whitespace trimmed off
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

  if (youremail.value == "") {
    youremail.style.background = 'Red';
    document.getElementById('email-error').innerHTML = "Please enter an email address.";
  } else if (!emailFilter.test(temail)) { //test email for illegal characters
    document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
  } else if (youremail.value.match(illegalChars)) {
    document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
  } else {
    youremail.style.background = 'transparent';
    document.getElementById('email-error').innerHTML = '';
  }
  return error;
}