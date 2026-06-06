const form = document.querySelector("#eventForm");
const personType = document.querySelector("#type");
const personCode = document.querySelector("#personCode");
const codeText = document.querySelector("#code");
const output = document.querySelector("#output");

function updateCodeField() {
  const value = personType.value;

  if (value === "guest") {
    personCode.innerHTML = `
        <label for="code">Access Code</label>
        <input id="code" name="code" type="text" />`;
    personCode.hidden = false;
  } else if (value === "student") {
    personCode.innerHTML = `
        <label for="code">Student I#</label>
        <input id="code" name="code" type="text" />`;
    personCode.hidden = false;
  } else {
    personCode.hidden = true;
  }
}

type.addEventListener("change", updateCodeField);
updateCodeField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const codeInput = document.querySelector("#code");
  const code = codeInput.value.trim();

  console.log(code)

  if (personType.value === "student" && code.length != 9) {
    output.textContent ="Student I# must be 9 digits";
    return;
  } else if (personType.value === "guest" && code.length == 0) {
    output.textContent = "Please provide the Access Code";
    return;
  } else if (personType.value === "guest" && code != "EVENT131") {
    output.textContent = "Incorrect Access Code";
    return;
  } 

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${personType.value}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateCodeField();
});
          