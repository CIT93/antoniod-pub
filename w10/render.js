const TBL = document.getElementById("tab-data");

const renderTblHeading = function() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "HouseHold Members",
    "House Size",
    "Footprint Points",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
    console.log(tr);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const renderTblBtn = function(index, data) {
  const td = document.createElement("td");
  const buttonEdit = document.createElement("button");
  const buttonDel = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonDel.textContent = "Del";
  td.appendChild(buttonEdit);
  td.appendChild(buttonDel);
  buttonDel.addEventListener("click", function(e){
    console.log(e);
    data.splice(index, 1);
    renderTbl(data);
  })
  buttonEdit.addEventListener("click", function(e){
    
  })
  return td;
}

const rednerTblBody = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (inputsObj, index) {
    console.log(index)
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(inputsObj)) {
      if (key !== "lastname" && key !== "houseMPTS" && key !== "houseSMPTS") {
        console.log("build td");
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const values = [
      inputsObj.firstName,
      inputsObj.houseM,
      inputsObj.houseS,
      inputsObj.cfpTotal,
    ];
    values.forEach(function (text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  return tbody;
}

const renderTbl = function(data) {
  const table = renderTblHeading();
  const tbody = rednerTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };
