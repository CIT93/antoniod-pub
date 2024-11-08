const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const startExercise = (exerciseType, number, time) => {
    return new Promise((resolve, reject) => {
        
        if ( number < 1 || number > 30 ) {
            reject(`ERROR: ${number} is outside of the range`);
            return;
        }

        OUTPUT.textContent = `Based on your ${exerciseType}, your ${number} numbers of Reps, this is the amount of ${time} time to complete`;

        setTimeout(() => {
            resolve("Workout Complete");
        }, time * 5000);
    });
};

const displayOutput = (message, elementType = "p") => {
    const element = document.createElement(elementType);
    element.textContent = message;
    OUTPUT.appendChild(element);
}

const messageError = (error) => {
    displayOutput(error, "h3");
}

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const exerciseType = FORM.exerciseType.value;
    const Repsnumber = parseInt(FORM.Repsnumber.value);
    const Time = parseInt(FORM.Time.value);

    startExercise(exerciseType, Repsnumber, Time)
        .then(displayOutput)
        .catch(messageError);

    FORM.reset();
});
