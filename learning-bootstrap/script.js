import 'bootstrap/dist/css/bootstrap.min.css';

const form = document.querySelector('form');
 
form.addEventListener(
  'submit',
  (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
    }
 
    form.classList.add('was-validated');
  },
  false,
);