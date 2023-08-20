var bmi__age = document.querySelector('#bmi__age') as HTMLInputElement;
var bmi__weight = document.querySelector('#bmi__weight') as HTMLInputElement;
var bmi__feet = document.querySelector('#bmi__feet') as HTMLSelectElement;
var bmi__inch = document.querySelector('#bmi__inch') as HTMLSelectElement;
var bmi__output = document.querySelector('#bmi__output') as HTMLHeadingElement;
var bmi__btn = document.querySelector('.bmi__btn') as HTMLButtonElement;

var pointer = document.querySelector('.hand-pointer') as HTMLSpanElement;

const resetValue = () => {
  bmi__age.value = '';
  bmi__weight.value = '';
  bmi__inch.value = 'Choose (inch)';
  bmi__feet.value = 'Choose (feet)';
};

bmi__btn.addEventListener('click', () => {
  try {
    const METERS_CONVERT = 0.304;
    let age = Number(bmi__age.value);
    let weight = Number(bmi__weight.value);
    let feet = Number(bmi__feet.value + '.' + bmi__inch.value);

    const meter = feet * METERS_CONVERT * 2;

    const bmi = weight / meter;

    if (bmi >= 2) {
      bmi__btn.textContent = 'Generating...';

      setTimeout(() => {
        bmi__output.innerHTML = `${age} of ${String(bmi.toFixed(2))}`;
        bmi__btn.textContent = 'Generate';

        if (bmi <= 18.4) {
          pointer.classList.add('under-weight');
          pointer.classList.remove('normal');
          pointer.classList.remove('over-weight');
          pointer.classList.remove('obese');
        } else if (bmi > 18.5 && bmi <= 24.9) {
          pointer.classList.add('normal');
          pointer.classList.remove('under-weight');
          pointer.classList.remove('over-weight');
          pointer.classList.remove('obese');
        } else if (bmi > 25.0 && bmi <= 39.9) {
          pointer.classList.add('over-weight');
          pointer.classList.remove('normal');
          pointer.classList.remove('under-weight');
          pointer.classList.remove('obese');
        } else {
          pointer.classList.add('obese');
          pointer.classList.remove('over-weight');
          pointer.classList.remove('normal');
          pointer.classList.remove('under-weight');
        }
      }, 300);
      resetValue();
    }
  } catch (error) {
    console.log(error);
  }
});
