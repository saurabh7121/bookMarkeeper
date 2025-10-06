const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn");

let myLeads = [];

// we could get values ["lead1,lead2"] or null
let leadsFromLocalStroage = JSON.parse(localStorage.getItem("myLeads"));

// views elements from localstorage
if (leadsFromLocalStroage) {
  myLeads = leadsFromLocalStroage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";

  /* //"<li><a target='_blank' href='" + inputEl.value + "'>" + inputEl.value + "</a></li>"; */

  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
    <a target='_blank' href='${leads[i]}'> ${leads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

deletebtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  //save myLeads array in the Local Storage
  // PS: remember JSON.stringify() method

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  //reads the local storage changes
  console.log(localStorage.getItem("myLeads"));
});
