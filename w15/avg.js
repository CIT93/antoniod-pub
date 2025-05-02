import { cfpData } from "./storage.js";

const calculateTotalPoints = (points) => {
  return points.houseHoldPoints + points.houseSizePoints + points.foodChoicePoints;
};

const calculateAverage = () => {
  
  const totalArray = cfpData.map(points => calculateTotalPoints(points));

  const total = totalArray.reduce((sum, val) => sum + val, 0);

  return total / cfpData.length;
};

const addRow = (avg) => {
  const table = document.getElementById("tab-data");
  if (!table) return;

  const newRow = table.rows[1];
  const cellCount = table.rows[0]?.cells.length || 6;

  for (let i = 0; i < cellCount; i++) {
    newRow.insertCell(i);
  }}
  // const newRow = table.insertRow(-1);

 
export { calculateAverage, addRow };