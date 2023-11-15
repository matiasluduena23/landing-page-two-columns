
const formHero: HTMLFormElement = document.querySelector('#hero-form')!;
const formSection: HTMLFormElement = document.querySelector('#form-section')!;



const validateFormEmail = (form: HTMLFormElement) => {

    form?.addEventListener('submit', (e)=> {
        e.preventDefault()
        const input =  (e.target as HTMLInputElement)?.querySelector('input')!.value.trim();
        if(input === "") {
            showError(`Can't be blank`, e.currentTarget as HTMLFormElement)
        }else if(!validateEmail(input)){
            showError(`Please check your email`, e.currentTarget as HTMLFormElement)
        }else {
            showSuccess('Thanks for surscribe!!!', e.currentTarget as HTMLFormElement)
        }
    })
} 


validateFormEmail(formHero)
validateFormEmail(formSection)






function showError(message:string, formTarget: HTMLFormElement | null) {

    const spanErrorElement = formTarget?.querySelector('span');
    (spanErrorElement as HTMLSpanElement).innerText = message;
    formTarget?.classList.remove('show-success');
    formTarget?.classList.add('show-error');

}

function showSuccess(message:string, formTarget: HTMLFormElement | null) {
    const span = formTarget?.querySelector('span');
    (span as HTMLSpanElement).innerText = message;
    formTarget?.classList.remove('show-error');
    formTarget?.classList.add('show-success');
    
    clearSuccess((span as HTMLSpanElement), formTarget)
}


const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function clearSuccess(span: HTMLSpanElement, form: HTMLFormElement  ) {
    setTimeout(() => {
        form.querySelector('input').value = "";
        span.innerText = "";
    }, 3000);
    
  }