const btnSectionTwo = document.querySelector('#section-two-form-btn')
const btnHero = document.querySelector('#hero-form-btn')
const inputHero: HTMLInputElement | null = document.querySelector('#hero-input');

console.log(btnHero)
btnHero?.addEventListener('click ' ,(e) => {
    e.preventDefault();

    const inputValue = inputHero?.value.trim();
    console.log(inputValue);
    // showError('Please check your email', inputHero)
})

function showError(message:string, inputHero: HTMLInputElement | null) {
    const spanError = inputHero?.previousElementSibling;
    console.log(spanError);
    (spanError as HTMLSpanElement).classList.add('error');
    (spanError as HTMLSpanElement).innerText = message;

}