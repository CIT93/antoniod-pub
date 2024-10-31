document.addEventListener('DOMContentLoaded', () => {
    const FORM = document.getElementById("form");

    const startExercise = (exerciseType, number, time) => {
        const output = document.getElementById("output");
        output.textContent = `Based on your ${exerciseType}, your ${number} numbers of Reps, this is the amount of ${time} time to complete`;

        setTimeout(() => {
            output.textContent = "Workout Complete";
        }, time * 5000);
    };

    FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        const exerciseType = FORM.exerciseType.value;
        const Repsnumber = FORM.Repsnumber.value;
        const Time = FORM.Time.value;
        startExercise(exerciseType, Repsnumber, Time);
        FORM.reset();
    });
});
