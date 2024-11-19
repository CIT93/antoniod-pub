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
function addRow(myTable) {
  let newRow = tableRef.insertRow(-1);
}

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHead();
    const tbody = renderTblRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
};

export { renderTbl, addRow };
