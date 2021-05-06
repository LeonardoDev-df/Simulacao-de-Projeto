var form = document.querySelector('form');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  let isvalid = true;

  if (String(form.nome.value.length) == 0 || form.email.value == "" || form.celular.value == "" || form.msg.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Verifique os dados e tente novamente!',
      timer: 19500
    });
    isvalid = false;
  } else {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Matriculado com Sucesso!',
      timer: 5500
    });
  }

  console.log(isvalid);

});

form.addEventListener('reset', function () {

});
