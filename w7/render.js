const TBL = document.getElementById("tab-data");

function renderTblHeading () {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold Members", "House Size", "Footprint Points", "Actions",];
    headingTextArr.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      console.log(tr);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");

  data.forEach(function(inputsObj) {
     const tr = document.createElement("tr");
     const values = [inputsObj.firstName,inputsObj.houseM, inputsObj.houseS, inputsObj.cfpTotal];
     values.forEach(function(text) {
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
     });

    
     const td = document.createElement("td");
     const buttonEdit = document.createElement("button");
     const buttonDel = document.createElement("button");
     buttonEdit.textContent = "Edit";
     buttonDel.textContent = "Del";
     td.appendChild(buttonEdit);
     td.appendChild(buttonDel);
     tr.appendChild(td);
     tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };
