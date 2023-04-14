var app = new Vue({
  el: "#form1",
  data: function () {
    return {
      username: "",
      email: "",
      emailBlured: false,
      valid: false,
      submitted: false,
      password: "",
      passwordBlured: false,
    };
  },

  methods: {
    validate: function () {
      this.emailBlured = true;
      this.passwordBlured = true;
      //this.validUsername(this.username) &&
      if (this.validEmail(this.email) && this.validPassword(this.password)) {
        this.valid = true;
      }
    },
    validUsername: function (username) {
      if (username.length > 0) {
        return true;
      }
    },

    validEmail: function (email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      if (re.test(email.toLowerCase())) {
        return true;
      }
    },

    validPassword: function (password) {
      if (password.length > 7) {
        return true;
      }
    },

    submit: function () {
      this.validate();
      if (this.valid) {
        this.submitted = true;
        // Lưu thông tin vào local storage
        localStorage.setItem("username", this.text);
        localStorage.setItem("email", this.email);
        localStorage.setItem("password", this.password);
        setTimeout(function () {
          window.location.href = "/log-in.html";
        }, 1000);
      }
    },
  },
});

var app = new Vue({
  el: "#form2",
  data: function () {
    return {
      email: "",
      emailBlured: false,
      valid: false,
      submitted: false,
      password: "",
      passwordBlured: false,
      storedEmail: localStorage.getItem("email"),
      storedPassword: localStorage.getItem("password"),
    };
  },

  methods: {
    validate: function () {
      this.emailBlured = true;
      this.passwordBlured = true;
      if (
        this.email === this.storedEmail &&
        this.password === this.storedPassword
      ) {
        this.valid = true;
      }
    },

    validEmail: function (email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      if (re.test(email.toLowerCase())) {
        return true;
      }
    },

    validPassword: function (password) {
      if (password.length > 7) {
        return true;
      }
    },

    submit: function () {
      this.submitted = true;
      setTimeout(function () {
        window.location.href = "/user.html";
      }, 1000);
    },
  },
});

var app = new Vue({
  el: "#form3",
  data: function () {
    return {
      email: "",
      emailBlured: false,
      code: "",
      codeBlured: false,
      storedEmail: localStorage.getItem("email"),
    };
  },

  methods: {
    validate: function () {
      this.emailBlured = true;

      if (this.email === this.storedEmail) {
        this.valid = true;
      }
    },

    validEmail: function (email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      if (re.test(email.toLowerCase())) {
        return true;
      }
    },

    submit: function () {
      this.submitted = true;
      setTimeout(function () {
        // window.location.href = "/index.html";
        ChangeText();
      }, 500);
    },
  },
});

function ChangeText(text) {
  var emailLabel = document.getElementById("email-label");
  text.innerHTML = "Confirm";
  emailLabel.innerHTML = "The OTP you have received has to be entered";
}
