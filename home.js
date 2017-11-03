
function timeout() {
  return new Promise((todoOk, todoMal) => {
    setTimeout(()=> {
      todoOk('han pasado 5 segundos')
    }, 5000);
  })
}


async function wait () {
  const message = await timeout();
  document.body.innerText = message;
  // document.write(message);
}

wait();

// document.write('Hola mundo!');
document.body.innerText = "Hola mundo!"
