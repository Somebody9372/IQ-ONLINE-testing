const RangeAmount = document.querySelector('.calc__range-input--amount');
const RangeReplenishment = document.querySelector('.calc__range-input--replenishment-amount');

const inputAmount = document.querySelector('.form__input--amount');
const inputReplenishment = document.querySelector('.form__input--replenishment-amount');


function slider(inputSlider, inputNumber) {

    inputSlider.oninput = () => {
        console.log(inputSlider.value)
        inputNumber.value = inputSlider.value;
    };

    inputNumber.oninput = () => {
        console.log(inputSlider.value)
        inputSlider.value = inputNumber.value;
    };
};

slider(RangeAmount, inputAmount)
slider(RangeReplenishment, inputReplenishment)


$(function () {
    $('#date').datepicker();
});
