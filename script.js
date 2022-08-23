let precioTotal = 0;

function comprar() {
  while (true) {
    let album = parseInt(
      prompt(
        "Tenemos 3 albums a la venta: \n1.Bocanadas (Gustavo Cerati), \n2.Harry's House (Harry Styles) \n3.Folklore (Taylor swift) \n4.Ir a changuito \n5.Salir"
      )
    );

    if (album == 1) {
      alert(
        "Cerati en este album uso Samples experimentales y es uno de sus mejores discos COMPRENLO"
      );
      let cantidadUnidades = parseInt(prompt("Cuantos albums vas a llevar?"));
      let precio = cantidadUnidades * 150;
      alert(
        "Agregaste " +
          cantidadUnidades +
          "albums 'Bocanadas' de Gustavo Cerati por $" +
          precio +
          " al changuito"
      );
      precioTotal += precio;
    } else if (album == 2) {
      alert(
        "Este es el ultimo album del cantante Harry Styles, que se mantuvo 3 semanas consecutivas como el numero 1 COMPRENLO"
      );
      let cantidadUnidades = parseInt(prompt("Cuantos albums vas a llevar?"));
      let precio = cantidadUnidades * 300;
      alert(
        "Agregaste " +
          cantidadUnidades +
          "albums 'Harry's House' de Harry Styles por $" +
          precio +
          " al changuito"
      );
      precioTotal += precio;
    } else if (album == 3) {
      alert(
        "Folklore salio el 4 de octubre de 2020 y en este album Taylor experimenta con nuevos generos musicales"
      );
      let cantidadUnidades = parseInt(prompt("Cuantos albums vas a llevar?"));
      let precio = cantidadUnidades * 200;
      alert(
        "Agregaste " +
          cantidadUnidades +
          "albums 'Folklore' de Taylor Swift por $" +
          precio +
          " al changuito"
      );
      precioTotal += precio;
    } else if (album == 4) {
      alert("El total de tu changuito es: " + precioTotal);
      pagoCuotas();
      break;
    } else if (album == 5) {
      alert("Gracias");
      break;
    } else {
      alert("No es posible realizar la operacion");
      break;
    }
  }
}

function pagoCuotas() {
  for (let i = 0; i < 5; i++) {
    let pregunta = prompt("Desea realizar su pago en cuotas? Y o N");
    if (pregunta == "Y") {
      let cuotas = parseInt(prompt("Puedes realizar el pago en \n3 \n6 \n12"));
      let totalCuotas = (precioTotal / cuotas) * 1.1;
      totalCuotas = totalCuotas.toFixed(2);
      alert(
        "Perfecto te quedarian en " +
          cuotas +
          " cuotas de " +
          totalCuotas +
          " nos contactaremos en cuanto tengamos tu pedido listo para retirar"
      );
      break;
    } else if (pregunta == "N") {
      alert(
        "Perfecto el total de " +
          precioTotal +
          " puedes pagarlo en crypto o realizar tu pago mediante tarjeta de credito/debito o mercadopago"
      );
      break;
    } else {
      alert("Elija una de las opciones disponibles");
    }
  }
}

let boton = document.querySelector("#Comprar");
boton.addEventListener("click", comprar);
