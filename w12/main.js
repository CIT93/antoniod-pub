const FORM = document.getElementById("form");
const output = document.getElementById("output");

function asyncWorkout() {
  const heading = document.createElement("p");
  heading.textContent = "Submit to start!";
  output.appendChild(heading);

  FORM.addEventListener("submit", function (event) {
    event.preventDefault();

    const exercise = FORM.elements["type"].value;
    const reps = FORM.elements["reps"].value;
    const time = FORM.elements["time"].value;

    const workoutMsg = document.createElement("p");
    workoutMsg.textContent = `Start! ${exercise} — your goal is ${reps} reps!`;
    output.appendChild(workoutMsg);

    setTimeout(() => {
      const stopMsg = document.createElement("p");
      stopMsg.textContent = `Finished! ${exercise}`;
      output.appendChild(stopMsg);
    }, parseInt(time) * 1000);
  });
}

asyncWorkout();
