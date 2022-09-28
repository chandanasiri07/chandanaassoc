const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", AOS.init({ once: true }));

function formSubmitHandler() {
  var e = {
    name: document.getElementById("nameInput").value,
    phone: document.getElementById("phoneInput").value,
    email: document.getElementById("emailInput").value,
    message: document.getElementById("messageInput").value,
  };
  console.log(e);
  const n = validateInputs(e);
  if (n.success)
    submit(e),
      document.getElementById("contactForm").classList.add("hidden"),
      document.getElementById("FormSuccess").classList.remove("hidden");
  else {
    var t = "";
    n.message.forEach((e) => {
      t += `<p>${e}</p>`;
    }),
      (document.getElementById("formError").innerHTML =
        "Please Enter Email Address or Phone, So we can contact you.");
    document.getElementById("formError").classList.remove("hidden");
  }
}
function validateInputs(e) {
  var n = [];
  return (
    "" === e.email || validateEmail(e.email) || n.push("Invalid Email"),
    "" === e.email &&
      "" === e.phone &&
      n.push("Enter Phone number or Email Address"),
    "" === e.message && n.push("Please Enter the message."),
    n.length >= 1 ? { success: !1, message: n } : { success: !0, message: null }
  );
}

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault(), formSubmitHandler();
});
const validateEmail = (e) =>
  e.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
function submit(e) {
  $.ajax({
    type: "POST",
    url: "https://email.chandanaandassociates.com/",
    data: e,
    dataType: "json",
    encode: !0,
  });
}
