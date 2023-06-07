const logInButton = document.querySelector("#logInButton");
const logInForm = document.querySelector("#logIn");
const backDrop = document.querySelector(".backDrop");
const signUpButtonChange = document.querySelector("#signUpButtonChange");
const signUpForm = document.querySelector("#signUp");
const logInButtonChange = document.querySelector("#logInButtonChange");
const logInSubmit = document.querySelector(".logInSubmit");
const signUpSubmit = document.querySelector(".signUpSubmit");
const addTask = document.querySelector("#addTask");
const clock = document.querySelector("#clock");
const id = document.querySelectorAll(".id");
const pw = document.querySelectorAll(".pw");
const taskList = document.querySelector("#taskList");
const tasks = document.querySelectorAll(".task");
const checks = document.querySelectorAll(".check");
const deletes = document.querySelectorAll(".delete");
const TaskText = document.querySelector("#taskText");
const addTaskbutton = document.querySelector("#addTaskButton");
const resetButton = document.querySelector("#reset");

for (let i = 0; i < checks.length; ++i) {
  checks[i].addEventListener("click", () => {
    if (tasks[i].style.textDecoration !== "line-through") {
      tasks[i].style.textDecoration = "line-through";
      tasks[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
      tasks[i].style.color = "grey";
      checks[i].style.backgroundColor = "rgb(203, 208, 213)";
      deletes[i].style.backgroundColor = "rgb(203, 208, 213)";
    } else {
      tasks[i].style.textDecoration = "none";
      tasks[i].style.backgroundColor = "rgba(0, 0, 0, 0.586)";
      tasks[i].style.color = "white";
      checks[i].style.backgroundColor = "rgb(203, 208, 213)";
      deletes[i].style.backgroundColor = "rgb(203, 208, 213)";
    }
  });
}

addTaskbutton.addEventListener("click", (event) => {
  event.preventDefault();
  if (TaskText.value.length > 0) {
    const newTask = document.createElement("li");
    newTask.classList.add("task");
    const newTaskText = document.createElement("div");
    const newTaskButtons = document.createElement("div");
    newTaskButtons.classList.add("taskButtons");
    newTaskText.classList.add("taskText");
    newTaskText.innerHTML = `${TaskText.value}`;
    TaskText.value = null;
    const newCheck = document.createElement("button");
    newCheck.classList.add("check");
    newCheck.type = "button";
    newCheck.innerHTML = `<img src="./images/check.png" />`;
    const newDelete = document.createElement("button");
    newDelete.classList.add("delete");
    newDelete.type = "button";
    newDelete.innerHTML = `<img src="./images/trashcan.png" />`;
    newCheck.addEventListener("click", () => {
      if (newTask.style.textDecoration !== "line-through") {
        newTask.style.textDecoration = "line-through";
        newTask.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        newTask.style.color = "grey";
        newCheck.style.backgroundColor = "rgb(203, 208, 213)";
        newDelete.style.backgroundColor = "rgb(203, 208, 213)";
      } else {
        newTask.style.textDecoration = "none";
        newTask.style.backgroundColor = "rgba(0, 0, 0, 0.586)";
        newTask.style.color = "white";
        newCheck.style.backgroundColor = "rgb(203, 208, 213)";
        newDelete.style.backgroundColor = "rgb(203, 208, 213)";
      }
    });
    newDelete.addEventListener("click", () => {
      newTask.style.display = "none";
    });
    newTaskButtons.appendChild(newCheck);
    newTaskButtons.appendChild(newDelete);
    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskButtons);
    taskList.appendChild(newTask);
  }
});

for (let i = 0; i < deletes.length; ++i) {
  deletes[i].addEventListener("click", () => {
    tasks[i].style.display = "none";
  });
}

for (let i = 0; i < 2; ++i) {
  id[i].addEventListener("input", onSubmitCheck);
  pw[i].addEventListener("input", onSubmitCheck);
}
logInButton.addEventListener("click", onStart);
backDrop.addEventListener("click", Cancel);
signUpButtonChange.addEventListener("click", () => {
  logInForm.style.display = "none";
  signUpForm.style.display = "block";
  for (let i = 0; i < 2; ++i) {
    id[i].value = null;
    pw[i].value = null;
  }
  logInSubmit.disabled = true;
  signUpSubmit.disabled = true;
  logInSubmit.style.cursor = "default";
  signUpSubmit.style.cursor = "default";
  logInSubmit.style.background = signUpSubmit.style.background = "";
});
logInButtonChange.addEventListener("click", () => {
  signUpForm.style.display = "none";
  logInForm.style.display = "block";
  for (let i = 0; i < 2; ++i) {
    id[i].value = null;
    pw[i].value = null;
  }
  logInSubmit.disabled = true;
  signUpSubmit.disabled = true;
  logInSubmit.style.cursor = "default";
  signUpSubmit.style.cursor = "default";
  logInSubmit.style.background = signUpSubmit.style.background = "";
});
logInSubmit.addEventListener("click", onlogIn);
signUpSubmit.addEventListener("click", onSignUp);
function onSubmitCheck() {
  for (let i = 0; i < 2; ++i) {
    if (id[i].value.length > 3 && pw[i].value.length > 3) {
      console.log(1);
      logInSubmit.style.background =
        "linear-gradient(90deg,rgba(52, 197, 144, 0.8) 0%,rgba(54, 182, 186, 0.8) 53.65%,rgba(56, 166, 228, 0.8) 100%";
      signUpSubmit.style.background =
        "linear-gradient(90deg,rgba(52, 197, 144, 0.8) 0%,rgba(54, 182, 186, 0.8) 53.65%,rgba(56, 166, 228, 0.8) 100%";
      logInSubmit.disabled = false;
      signUpSubmit.disabled = false;
      logInSubmit.style.cursor = "pointer";
      signUpSubmit.style.cursor = "pointer";
    } else {
      if (i === 0) {
        logInSubmit.style.background = "";
        logInSubmit.disabled = true;
        logInSubmit.style.cursor = "default";
      } else {
        signUpSubmit.style.background = "";
        signUpSubmit.disabled = true;
        signUpSubmit.style.cursor = "default";
      }
    }
  }
}
function onStart() {
  logInForm.style.display = "block";
  backDrop.style.display = "block";
}
function Cancel() {
  backDrop.style.display = "none";
  logInForm.style.display = "none";
  signUpForm.style.display = "none";
  for (let i = 0; i < 2; ++i) {
    id[i].value = null;
    pw[i].value = null;
  }
  logInSubmit.style.background = signUpSubmit.style.background = "";
  logInSubmit.disabled = signUpSubmit.disabled = true;
}
function onlogIn(e) {
  e.preventDefault();
  Cancel();
  logInButton.style.display = "none";
  clock.style.display = "block";
  addTask.style.display = "flex";
  taskList.style.display = "flex";
  resetButton.style.display = "block";
}
function onSignUp(e) {
  e.preventDefault();
  Cancel();
}
function updateTime() {
  let now = new Date();

  let year = now.getFullYear();
  let month = addLeadingZero(now.getMonth() + 1);
  let day = addLeadingZero(now.getDate());

  let hours = addLeadingZero(now.getHours());
  let minutes = addLeadingZero(now.getMinutes());
  let seconds = addLeadingZero(now.getSeconds());

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  let dateString = year + "/" + month + "/" + day + ", ";
  let timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;

  document.getElementById("date").innerHTML = dateString;
  document.getElementById("time").innerHTML = timeString;

  setTimeout(updateTime, 1000);
}

function addLeadingZero(number) {
  return (number < 10 ? "0" : "") + number;
}
updateTime();

resetButton.addEventListener("click", () => {
  let tasks = document.querySelectorAll(".task");
  for (let i = 0; i < tasks.length; ++i) {
    tasks[i].style.display = "none";
  }
});
