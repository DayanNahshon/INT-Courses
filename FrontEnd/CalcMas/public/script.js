"use strict";
let button = document.querySelector('button');
let input = document.querySelector('input');
let SumNeto = document.querySelector('.neto');
let SumMas = document.querySelector('.mas');
button.addEventListener("click", () => {
    let Salery = Number(input.value);
    if (input.value.length == 0) {
        alert("שגיאה! הכנס בבקשה את סכום הברוטו.");
    }
    else {
        if (Salery <= 6450) {
            SumMas.textContent = (Salery * 0.1).toFixed(2);
            SumNeto.textContent = (Salery - (Salery * 0.1)).toFixed(2);
        }
        if (6451 <= Salery && Salery <= 9240) {
            SumMas.textContent = ((Salery - 6450) * 0.14 + 645).toFixed(2);
            SumNeto.textContent = (Salery - ((Salery - 6450) * 0.14 + 645)).toFixed(2);
        }
        if (9241 <= Salery && Salery <= 14840) {
            SumMas.textContent = ((Salery - 9240) * 0.2 + 1035.6).toFixed(2);
            SumNeto.textContent = (Salery - ((Salery - 9240) * 0.2 + 1035.6)).toFixed(2);
        }
        if (14841 <= Salery && Salery <= 20620) {
            SumMas.textContent = ((Salery - 14840) * 0.31 + 2155.6).toFixed(2);
            SumNeto.textContent = (Salery - ((Salery - 14840) * 0.31 + 2155.6)).toFixed(2);
        }
        if (20621 <= Salery && Salery <= 42910) {
            SumMas.textContent = ((Salery - 20620) * 0.35 + 3947.4).toFixed(2);
            SumNeto.textContent = (Salery - ((Salery - 20620) * 0.35 + 3947.4)).toFixed(2);
        }
        if (42911 <= Salery && Salery <= 55270) {
            SumMas.textContent = ((Salery - 42910) * 0.47 + 11748.9).toFixed(2);
            SumNeto.textContent = (Salery - ((Salery - 42910) * 0.47 + 11748.9)).toFixed(2);
        }
        if (55271 <= Salery) {
            SumMas.textContent = ((Salery - 55270) * 0.5 + 17558.1).toFixed(2);
            SumNeto.textContent = (Salery - ((Salery - 55270) * 0.5 + 17558.1)).toFixed(2);
        }
    }
});
