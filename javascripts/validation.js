const input = document.getElementById("email");
const input_conf = document.getElementById("email_confirm");
const form = document.getElementById("form");
const elemento_padre = document.getElementById('tableId');
const elemento_padre_cuarto_hijo = document.getElementById('contact_content_id');

function emailValidation(e) {  
  const elemento_P_agregado = form.getElementsByClassName('alert_p')[0];
  

  if (e.target.value !== input.value) {
    if (!elemento_P_agregado) { 
      input_conf.classList.add("alert_input_rojo");
      const p = document.createElement('p');
      const message = document.createTextNode("Correo electrónico no coincidente.");
      p.appendChild(message);
      p.classList.add("alert_p");
      elemento_padre.insertBefore(p, elemento_padre_cuarto_hijo);
    }
  } else {
    if (elemento_P_agregado) {
      elemento_padre.removeChild(elemento_P_agregado);
      input_conf.classList.remove("alert_input_rojo");
    }
  }
};

input.addEventListener('keyup', emailValidation);
input.addEventListener('blur', emailValidation);
input_conf.addEventListener('keyup', emailValidation);
input_conf.addEventListener('blur', emailValidation);


form.addEventListener('submit', (e) => {
  e.preventDefault();
});