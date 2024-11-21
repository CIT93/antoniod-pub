import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHead = () => {
  const table = document.createElement("table");
    table.setAttribute('id', 'myTable');
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "House Size",
    "Food Choice",
    "Footprint",
    "Actions"
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblBttns = (index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener("click", () => {
    onUpdate(index, data);
  });
  btnEdit.addEventListener("click", () => {
    const obj = data[index];
    FORM.firstName.value = obj.firstN;
    FORM.lastName.value = obj.lastN;
    FORM.housem.value = obj.houseMembers;
    FORM.houses.value = obj.houseSize;
    FORM.foodChoice.value = obj.foodChoice;
    onUpdate(index, data);
  });
  return td;
};

const renderTblRow = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    const keys = [
      "firstN",
      "houseMembers",
      "houseSize",
      "foodChoice",
      "total"
    ];
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    const td = renderTblBttns(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};
// function addRow(myTable) {
//   let newRow = tableRef.insertRow(-1);
// }

const calculateAvg = (cfpData) => { cfpData = (2) [{},{}]
  const reduceTotal = cfpData.reduce((sum, ea) => sum + ea.total, 0 )
  const tableRef= document.getElementById("table-id")
  let newRow = tableRef.insertRow(-1);
  let newCell = newRow.insertCell(0);
  let newCell_1 = newRow.insertCell(0);
  let newCell_2 = newRow.insertCell(0);
  let newCell_3 = newRow.insertCell(0);
  let newCell_4 = newRow.insertCell(0);
  let newLabl = document.createTextNode(`Average Footprint`);
  let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`);
  newCell_1.appendChild(newLabl);
  newCell.appendchild(newText);
}

const renderTbl = (cfpData) => {
  TBL.innerHTML = "";
  if (cfpData.length !== 0) {
    const table = renderTblHead();
    const tbody = renderTblRow(cfpData);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(cfpData)
  }
};

export { renderTbl };
