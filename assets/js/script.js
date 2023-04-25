const Cuerpo_correo = "";
let c_detalle = [];

function MostrarTabla() {
  const ingresos = parseFloat(document.getElementById("ingresos").value);
  const monto = parseFloat(document.getElementById("monto").value);
  const cuotas = parseInt(document.getElementById("cuotas").value);
  const tipo = document.getElementById("tipo").value;
  let tasaInteres;

  if (monto >= 20000) {
    const credito = document.getElementById("tipo");
    credito.value = "Sobre Saldos";
    tasaInteres = 1.5 / 100;

    //calculo amortizaciones Sobre saldos

    let Capital_Mensual = monto / cuotas;
    let s_Saldo = monto;
    let s_Cuota;
    let s_Interes;
    let s_Impuesto;

    const c_detalle = [];

    for (let i = 1; i <= cuotas; i++) {
      s_Interes = s_Saldo * tasaInteres;
      s_Saldo = s_Saldo - Capital_Mensual;

      if (s_Saldo + 1 > 0) {
        s_Impuesto = (s_Interes / 0.9) * 0.12 + (s_Interes / 0.9) * 0.1;
      } else {
        s_Impuesto = 0;
      }
      s_Cuota = Capital_Mensual + s_Interes + s_Impuesto;

      c_detalle.push({
        mes: i,
        cuota: s_Cuota.toFixed(2),
        capital: Capital_Mensual.toFixed(2),
        interes: s_Interes.toFixed(2),
        saldo: s_Saldo.toFixed(2),
        impuesto: s_Impuesto.toFixed(2),
      });
      const resultadoDiv = document.getElementById("Mostrar_Tabla");
      resultadoDiv.innerHTML = `<table class="table table-striped id="Tabla_Amortizaciones">
   <thead>
   <tr>
       <th>Mes</th>
       <th>Cuota</th>
       <th>Capital</th>
       <th>Interes</th>
       <th>Saldo</th>
       <th>Impuesto</th>
   </tr>
   </thead>
   <tbody>
   ${c_detalle
     .map(
       (d) => `
       <tr>
       <td>${d.mes}</td>
       <td>Q${d.cuota}</td>
       <td>Q${d.capital}</td>
       <td>Q${d.interes}</td>
       <td>Q${d.saldo}</td>
       <td>Q${d.impuesto}</td>
       </tr>
   `
     )
     .join("")}
   </tbody>
</table>`;
    }
  }

  //CALCULOS PARA TABLA FLAT
  else if (monto < 20000 && monto > 0) {
    const credito = document.getElementById("tipo");
    credito.value = "Flat";
    tasaInteres = 3.5 / 100;

    const c_capital = monto / cuotas;
    let c_CuotaMensual = (monto + monto * cuotas * tasaInteres) / cuotas;
    let Saldo = monto;
    let c_impuesto;
    let pcuota;
    const c_detalle = [];
    for (let i = 1; i <= cuotas; i++) {
      let c_interes = monto * tasaInteres;
      Saldo = Saldo - c_capital;
      if (Saldo + 1 > 0) {
        c_impuesto = (c_interes / 0.9) * 0.12 + (c_interes / 0.9) * 0.1;
      } else {
        c_impuesto = 0;
      }

      pcuota = c_CuotaMensual + c_impuesto;
      c_detalle.push({
        mes: i,
        cuota: pcuota.toFixed(2),
        capital: c_capital.toFixed(2),
        interes: c_interes.toFixed(2),
        saldo: Saldo.toFixed(2),
        impuesto: c_impuesto.toFixed(2),
      });

      const resultadoDiv = document.getElementById("Mostrar_Tabla");
      resultadoDiv.innerHTML = `<table class="table table-striped" id="Tabla_Amortizaciones">
    <thead>
    <tr>
        <th>Mes</th>
        <th>Cuota</th>
        <th>Capital</th>
        <th>Interes</th>
        <th>Saldo</th>
        <th>Impuesto</th>
    </tr>
    </thead>
    <tbody>
    ${c_detalle
      .map(
        (d) => `
        <tr>
        <td>${d.mes}</td>
        <td>Q${d.cuota}</td>
        <td>Q${d.capital}</td>
        <td>Q${d.interes}</td>
        <td>Q${d.saldo}</td>
        <td>Q${d.impuesto}</td>
        </tr>
    `
      )
      .join("")}
    </tbody>
</table>`;
    }
  }
}

function calcularPrestamo() {
  // Obtenemos los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const dpi = document.getElementById("dpi").value;
  const nit = document.getElementById("nit").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const empresa = document.getElementById("empresa").value;
  const puesto = document.getElementById("puesto").value;
  const ingresos = parseFloat(document.getElementById("ingresos").value);
  const monto = parseFloat(document.getElementById("monto").value);
  const cuotas = parseInt(document.getElementById("cuotas").value);
  const tipo = document.getElementById("tipo").value;
  const Tiempo = document.getElementById("Tiempo_laborando").value;

  const totalInteres = 0;
  const totalPagar = 0;

  //se verifica si el DPI es correcto

  if (dpi.length === 13) {
    if (monto >= 20000) {
      const credito = document.getElementById("tipo");
      credito.value = "Sobre Saldos";
      tasaInteres = 1.5 / 100;

      //calculo amortizaciones Sobre saldos

      let Capital_Mensual = monto / cuotas;
      let s_Saldo = monto;
      let s_Cuota;
      let s_Interes;
      let s_Impuesto;
      c_detalle = [];

      for (let i = 1; i <= cuotas; i++) {
        s_Interes = s_Saldo * tasaInteres;
        s_Saldo = s_Saldo - Capital_Mensual;

        if (s_Saldo + 1 > 0) {
          s_Impuesto = (s_Interes / 0.9) * 0.12 + (s_Interes / 0.9) * 0.1;
        } else {
          s_Impuesto = 0;
        }
        s_Cuota = Capital_Mensual + s_Interes + s_Impuesto;

        c_detalle.push({
          mes: i,
          cuota: s_Cuota.toFixed(2),
          capital: Capital_Mensual.toFixed(2),
          interes: s_Interes.toFixed(2),
          saldo: s_Saldo.toFixed(2),
          impuesto: s_Impuesto.toFixed(2),
        });
      }
    } else if (monto < 20000 && monto > 0) {
      const credito = document.getElementById("tipo");
      credito.value = "Flat";
      tasaInteres = 3.5 / 100;
      c_detalle = [];
      const c_capital = monto / cuotas;
      let c_CuotaMensual = (monto + monto * cuotas * tasaInteres) / cuotas;
      let Saldo = monto;
      let c_impuesto;
      let pcuota;

      for (let i = 1; i <= cuotas; i++) {
        let c_interes = monto * tasaInteres;
        Saldo = Saldo - c_capital;
        if (Saldo + 1 > 0) {
          c_impuesto = (c_interes / 0.9) * 0.12 + (c_interes / 0.9) * 0.1;
        } else {
          c_impuesto = 0;
        }

        pcuota = c_CuotaMensual + c_impuesto;
        c_detalle.push({
          mes: i,
          cuota: pcuota.toFixed(2),
          capital: c_capital.toFixed(2),
          interes: c_interes.toFixed(2),
          saldo: Saldo.toFixed(2),
          impuesto: c_impuesto.toFixed(2),
        });
      }
    }

    // Mostramos el resultado en una tabla
    const resultadoDiv = document.getElementById("Detalles_Prestamo");
    resultadoDiv.innerHTML = `
    <h2 style="margin-top: 1vw; text-align: center;">Detalles del Préstamo</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Número de DPI:</strong> ${dpi}</p>
    <p><strong>NIT:</strong> ${nit}</p>
    <p><strong>Correo Electrónico:</strong> ${correo}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Empresa en la que labora:</strong> ${empresa}</p>
    <p><strong>Puesto que ocupa:</strong> ${puesto}</p>
    <p><strong>Años de laburo en la empresa:</strong> ${Tiempo}</p>
    <p><strong>Total de Ingresos mensuales:</strong> Q${ingresos.toFixed(2)}</p>
    <hr>
    <p><strong>Monto Solicitado:</strong> Q${monto.toFixed(2)}</p>
    <p><strong>No. de Cuotas:</strong> ${cuotas}</p>
    <hr>
    <div class="outer-wrapper">
    <div class="table-wrapper">

    <table class="table table-striped" id="Tabla_Amortizaciones" style="margin-bottom: 2vw;">
        <thead>
        <tr >
            <th scope="col">Mes</th>
            <th scope="col">Cuota</th>
            <th scope="col">Capital</th>
            <th scope="col">Interes</th>
            <th scope="col">Saldo</th>
            <th scope="col">Impuesto</th>
        </tr>
        </thead>

        <tbody>
        ${c_detalle
          .map(
            (d) => `
            <tr>
            <th scope="row">${d.mes}</th>
            <td>Q${d.cuota}</td>
            <td>Q${d.capital}</td>
            <td>Q${d.interes}</td>
            <td>Q${d.saldo}</td>
            <td>Q${d.impuesto}</td>
            </tr>
        `
          )
          .join("")}
        </tbody>
    </table>

    </div>
    </div>

    <hr>
    <!--<p><strong>Total a pagar:</strong> Q${totalPagar.toFixed(2)}</p>
    <p><strong>Total de intereses:</strong> Q${totalInteres.toFixed(2)}</p>-->`;

    const Cuerpo_correo = document.getElementById("Formato_Correo");
    Cuerpo_correo.innerHTML = `
        <h2 style="margin-top: 1vw; text-align: center; font-size: 28px;">Solicitud del Préstamo</h2>
        <p><strong style="font-size: 14px;">Nombre:  </strong> ${nombre}</p>
        <p><strong style="font-size: 14px;">Número de DPI:  </strong> ${dpi}</p>
        <p><strong style="font-size: 14px;">NIT:  </strong> ${nit}</p>
        <p><strong style="font-size: 14px;">Correo Electrónico:  </strong> ${correo}</p>
        <p><strong style="font-size: 14px;">Teléfono:  </strong> ${telefono}</p>
        <p><strong style="font-size: 14px;">Empresa en la que labora:</strong> ${empresa}</p>
        <p><strong style="font-size: 14px;">Puesto que ocupa:  </strong> ${puesto}</p>
        <p><strong style="font-size: 14px;">Años de laburo en la empresa:  </strong> ${Tiempo}</p>
        <p><strong style="font-size: 14px;">Total de Ingresos mensuales:  </strong> Q${ingresos.toFixed(2)}</p>
        <hr>
        <p><strong>Monto Solicitado:</strong> Q${monto.toFixed(2)}</p>
        <p><strong>No. de Cuotas:</strong> ${cuotas}</p>
        <p class="Tipo_detalle"><strong>Tipo de Crédito:</strong> ${tipo}</p>
        <hr>
        <div class="outer-wrapper">
        <div class="table-wrapper">
    
        <table class="table table-striped" id="Tabla_Amortizaciones" style="margin-bottom: 2vw; border: black solid 2px;  width: 1200px; margin-left: 8px;">
            <thead>
            <tr style=" border: black solid 2px; background-color: #aeb1b3; ">
                <th style="width:width: 400px;">Mes</th>
                <th style="width:width: 400px;">Cuota</th>
                <th style="width:width: 400px;">Capital</th>
                <th style="width:width: 400px;">Interes</th>
                <th style="width:width: 400px;">Saldo</th>
                <th style="width:width: 400px;">Impuesto</th>
            </tr>
            </thead>
    
            <tbody>
            ${c_detalle
              .map(
                (d) => `
                <tr style="text-align: center;border: black solid 2px;">
                <td style="width:width: 400px;">${d.mes}</td>
                <td style="width:width: 400px;">Q${d.cuota}</td>
                <td style="width:width: 400px;">Q${d.capital}</td>
                <td style="width:width: 400px;">Q${d.interes}</td>
                <td style="width:width: 400px;">Q${d.saldo}</td>
                <td style="width:width: 400px;">Q${d.impuesto}</td>
                </tr>
            `
              )
              .join("")}
            </tbody>
        </table>
    
        </div>
        </div>
    
        <hr>`;

    const tabla = document.getElementById("Detalles_Prestamo");
    tabla.style.display = "block";

    const captcha = document.getElementById("Enviar_Recaptcha");
    captcha.style.display = "block";
  } else {
    const mensaje = document.getElementById("Mensaje_Flotante");
    mensaje.style.display = "block";
    setTimeout(function () {
      mensaje.style.display = "none";
    }, 4000);
  }
}

let miCaptcha;
let onloadCallback = function () {
  miCaptcha = grecaptcha.render("miCaptcha", {
    sitekey: "6LcXp6olAAAAAKiXut9OKx6ClO-STCFDYIMronUq",
    callback: "verifyCaptcha",
  });
};

function verifyCaptcha(response) {
  // Si el usuario ha completado correctamente el reCAPTCHA, enviar el formulario
  if (response.length > 0) {
    sendEmail();
  } else {
    alert("Por favor, verifica que eres humano");
  }
}

function sendEmail() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "././src/send.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      if (response.success) {
        alert("El correo se ha enviado correctamente.");
      } else {
        alert(response.message);
      }
    }
  };
  const message = encodeURIComponent(document.getElementById("Formato_Correo").innerHTML);
  const correo = encodeURIComponent(document.getElementById("correo").value);
  const captchaResponse = grecaptcha.getResponse();
  const postData = `correo=${correo}&message=${message}&g-recaptcha-response=${captchaResponse}`;
  xhr.send(postData);
}

const form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Detener la acción predeterminada del formulario
  calcularPrestamo(); // Llamar a la función calcularPrestamo
  window.location.hash = "#Enviar_Recaptcha";
});

//codigo para implemtar la descarga de la informacion en un pdf

function generarPDF() {
  // Obtener el div que contiene el contenido a exportar
  const contenido = document.getElementById("Detalles_Prestamo").innerHTML;
  const pdf = new jsPDF("p", "pt", "letter");
  pdf.fromHTML(contenido);
  window.open(pdf.output('bloburl'), '_blank');
  //pdf.save("prestamo.pdf");

  /*
  let margin = 10;
  let scale = doc.internal.pageSize.width - margin * 2;
  document.body.scrollWidth;
  doc.html(divContenido, {
    x: margin,
    y: margin,
    html2canvas: {
      scale: scale,
    },
    callback: function (doc) {
      window.open(doc.output("bloburl"), "_blank");
    },
  });

  /*
    // Agregar el contenido del div al documento PDF
    doc.fromHTML(divContenido,15,15,{
    });
    // Descargar el documento PDF
    window.open(doc.output('bloburl'), '_blank');
   // doc.save('miDocumento.pdf');*/
}
