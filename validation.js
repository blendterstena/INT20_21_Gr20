window.onload = function () {
  const yourname = document.getElementById("name")
  const youremail = document.getElementById("email")
  const form = document.getElementById('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (yourname.value == "") {
      yourname.style.background = '#640d0f';
      document.getElementById('error-message').innerHTML = "Please enter your name!";
    }else {
      yourname.style.background = 'transparent';
      document.getElementById('error-message').innerHTML = "";
    }

    if (youremail.value == "") {
      youremail.style.background = '#640d0f'
      document.getElementById('email-error').innerHTML = "Please enter your email!";
    } else if (!validateEmail(youremail)) {
      youremail.style.background = '#640d0f'
      document.getElementById('email-error').innerHTML = "Your format e-mail is not valid!";
    } else {
      youremail.style.background = 'transparent'
      document.getElementById('email-error').innerHTML = "";
    }
  })
}


function trim(s) {
  return s.replace(/^\s+|\s+$/, "");
}
function validateEmail(yourmail) {
  var temail = trim(yourmail.value); // value of field with whitespace trimmed off
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;
  if (!emailFilter.test(temail) || yourmail.value.match(illegalChars)) {
    return false;
  }
  return true;
}





