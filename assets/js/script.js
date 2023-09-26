const Cuerpo_correo = "";
let c_detalle = [];

function MostrarTabla() {
  const ingresos = parseFloat(document.getElementById("ingresos").value);
  const monto = parseFloat(document.getElementById("monto").value);
  const cuotas = parseInt(document.getElementById("cuotas").value);
  const tipo = document.getElementById("tipo").value;
  let tasaInteres;

  if (monto > 20000) {
    const credito = document.getElementById("tipo");
    credito.value = "Sobre Saldos";
    tasaInteres = 3.5 / 100;

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
      resultadoDiv.innerHTML = `<table class="table table-striped" id="Tabla_Amortizaciones">
   <thead class="table-primary">
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
       <td><b>Q ${d.cuota}</b></td>
       <td>Q ${d.capital}</td>
       <td>Q ${d.interes}</td>
       <td>Q ${d.saldo}</td>
       <td>Q ${d.impuesto}</td>
       </tr>
   `
     )
     .join("")}
   </tbody>
</table>`;
    }
  }

  //CALCULOS PARA TABLA FLAT
  else if (monto <= 20000 && monto > 0) {
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
    <thead class="table-primary">
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
        <td><b>Q ${d.cuota}</b></td>
        <td>Q ${d.capital}</td>
        <td>Q ${d.interes}</td>
        <td>Q ${d.saldo}</td>
        <td>Q ${d.impuesto}</td>
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
  const TelefonoEmpresa = document.getElementById("telefonoEmpresa").value;
  const TelefonoCasa = document.getElementById("telefonoCasa").value;
  const Direccion = document.getElementById("Direccion").value;
  //Referencias personales
  const RNombre1 = document.getElementById("RNombre1").value;
  const RTelefono1 = document.getElementById("RTelefono1").value;
  const RNombre2 = document.getElementById("RNombre2").value;
  const RTelefono2 = document.getElementById("RTelefono2").value;
  const totalInteres = 0;
  const totalPagar = 0;

  //se verifica si el DPI es correcto

  if (
    dpi.length === 13 &&
    nombre.length > 5 &&
    nit.length > 4 &&
    correo.length > 5 &&
    telefono.length === 8 &&
    empresa.length > 1 &&
    puesto.length > 2 &&
    TelefonoEmpresa.length > 6 &&
    Tiempo.length > 1 &&
    document.getElementById("ingresos").value.length > 2 &&
    RNombre1.length > 4 &&
    RNombre2.length > 4 &&
    RTelefono1.length === 8 &&
    RTelefono2.length === 8 &&
    document.getElementById("monto").value.length > 2 &&
    document.getElementById("cuotas").value.length > 0
  ) {
    if (monto > 20000) {
      const credito = document.getElementById("tipo");
      credito.value = "Sobre Saldos";
      tasaInteres = 3.5 / 100;

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
    } else if (monto <= 20000 && monto > 0) {
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
    <h2 style="margin-top: 1vw; text-align: center;">Detalles del Préstamo</h2></div>
    <p style="margin-left: 1rem; font-size: 22px;"><strong> Datos personales </strong></p>
    <div class="Detalles_texto"><p><strong>Nombre:</strong> ${nombre}</p></div>
    <div class="Detalles_texto"><p><strong>Número de DPI:</strong> ${dpi}</p></div>
    <div class="Detalles_texto"><p><strong>NIT:</strong> ${nit}</p></div>
    <div class="Detalles_texto"><p><strong>Correo Electrónico:</strong> ${correo}</p></div>
    <div class="Detalles_texto"><p><strong>Teléfono:</strong> ${telefono}</p></div>
    <div class="Detalles_texto"><p><strong>Teléfono de Casa:</strong> ${TelefonoCasa}</p></div>
    <div class="Detalles_texto"><p><strong>Dirección de residencia:</strong> ${Direccion}</p></div>
    <p style="margin-left: 1rem; font-size: 22px;"><strong> Referencias personales </strong></p>
    <div class="Detalles_texto"><p><strong>Nombre:</strong> ${RNombre1}</p></div>
    <div class="Detalles_texto"><p><strong>Telefono:</strong> ${RTelefono1}</p></div>
    <div class="Detalles_texto"><p><strong>Nombre:</strong> ${RNombre2}</p></div>
    <div class="Detalles_texto"><p><strong>Telefono:</strong> ${RTelefono2}</p></div>
    <p style="margin-left: 1rem; font-size: 22px;"><strong> Datos Laborales </strong></p>
    <div class="Detalles_texto"><p><strong>Empresa en la que labora:</strong> ${empresa}</p></div>
    <div class="Detalles_texto"><p><strong>Teléfono de la empresa:</strong> ${TelefonoEmpresa}</p></div>
    <div class="Detalles_texto"><p><strong>Puesto que ocupa:</strong> ${puesto}</p></div>
    <div class="Detalles_texto"><p><strong>Tiempo de labor:</strong> ${Tiempo}</p></div>
    <div class="Detalles_texto"><p><strong>Total de Ingresos mensuales:</strong> Q ${ingresos.toFixed(
      2
    )}</p></div>
    <hr>
    <div class="detalles_monto"><p><strong>Monto Solicitado:</strong> Q ${monto.toFixed(
      2
    )}</p></div>
    <div class="detalles_monto"><p><strong>No. de Cuotas:</strong> ${cuotas}</p></div>
    <hr>
    <div class="outer-wrapper">
      <div class="table-wrapper">
        <table class="table table-striped" id="Tabla_Amortizaciones" style="margin-bottom: 2vw;">
          <thead class="table-primary">
            <tr>
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
              <td><b> Q ${d.cuota} </b></td>
              <td>Q ${d.capital}</td>
              <td>Q ${d.interes}</td>
              <td>Q ${d.saldo}</td>
              <td>Q ${d.impuesto}</td>
            </tr>
        `
            )
            .join("")}
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    <!--<p><strong>Total a pagar:</strong> Q ${totalPagar.toFixed(2)}</p>
    <p><strong>Total de intereses:</strong> Q ${totalInteres.toFixed(
      2
    )}</p>-->`;

    const Cuerpo_correo = document.getElementById("Formato_Correo");
    Cuerpo_correo.innerHTML = `
    <h2 style="margin-top: 1vw; text-align: center; font-size:20px">Detalles del Préstamo</h2></div>
    <p style="margin-left: 1rem; font-size: 15px;"><strong> Datos personales </strong></p>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Nombre:</strong> ${nombre}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Número de DPI:</strong> ${dpi}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">NIT:</strong> ${nit}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Correo Electrónico:</strong> ${correo}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Teléfono:</strong> ${telefono}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Teléfono de Casa:</strong> ${TelefonoCasa}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Direccion de residencia:</strong> ${Direccion}</p></div>
    <p style="margin-left: 1rem; font-size: 15px;"><strong> Referencias personales </strong></p>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Nombre:</strong> ${RNombre1}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Teléfono:</strong> ${RTelefono1}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Nombre:</strong> ${RNombre2}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Teléfono:</strong> ${RTelefono2}</p></div>

    <p style="margin-left: 1rem; font-size: 15px;"><strong> Datos Laborales </strong></p>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Empresa en la que labora:</strong> ${empresa}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Teléfono de la empresa:</strong> ${TelefonoEmpresa}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Puesto que ocupa:</strong> ${puesto}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Tiempo de labor:</strong> ${Tiempo}</p></div>
    <div style="margin-left: 1rem; margin-right: 1rem;padding-left: 1rem;border-radius: 2px;background-color: #e2e6eb86;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Total de Ingresos mensuales:</strong> Q ${ingresos.toFixed(
      2
    )}</p></div>
    <hr>
    <div class="detalles_monto" style="font-size: 14px;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">Monto Solicitado:</strong> Q ${monto.toFixed(
      2
    )}</p></div>
    <div class="detalles_monto" style="font-size: 14px;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">No. de Cuotas:</strong> ${cuotas}</p></div>
    <div class="detalles_monto" style="font-size: 14px;"><p><strong style="font-size: 14px; margin-right: 0.5rem;">No. de Cuotas:</strong> ${tipo}</p></div>
    <hr>
        <div class="outer-wrapper">
        <div class="table-wrapper">
    
        <table class="table table-striped" id="Tabla_Amortizaciones" style="margin-bottom: 2vw; border: black solid 2px;  width: 1200px; margin-left: 8px;">
            <thead>
            <tr style=" border: black solid 2px; background-color: #aeb1b3; ">
                <th scope="col" style="width:width: 400px;">Mes</th>
                <th scope="col" style="width:width: 400px;">Cuota</th>
                <th scope="col" style="width:width: 400px;">Capital</th>
                <th scope="col" style="width:width: 400px;">Interes</th>
                <th scope="col" style="width:width: 400px;">Saldo</th>
                <th scope="col" style="width:width: 400px;">Impuesto</th>
            </tr>
            </thead>
    
            <tbody>
            ${c_detalle
              .map(
                (d) => `
                  <tr style="text-align: center;border: black solid 2px;">
                  <th scope="row" style="width:width: 400px;">${d.mes}</th>
                  <td style="width:width: 400px;"><b>Q ${d.cuota}</b></td>
                  <td style="width:width: 400px;">Q ${d.capital}</td>
                  <td style="width:width: 400px;">Q ${d.interes}</td>
                  <td style="width:width: 400px;">Q ${d.saldo}</td>
                  <td style="width:width: 400px;">Q ${d.impuesto}</td>
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
    sitekey: "6LeqPuYlAAAAAPSvUaFLvFdnmsJBn34wIsNLDF1Y",
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


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

const prueba = async () => {
  //obtener el token
  const usuario = {
    userName: "test123",
    password: "test@123",
  };
  const url = "http://74.208.63.148:8090/api/v1";
  const nombre = document.getElementById("nombre").value;
  const dpi = parseInt(document.getElementById("dpi").value);
  const nit = document.getElementById("nit").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  // const empresa = document.getElementById("empresa").value;
  const puesto = document.getElementById("puesto").value;
  // const ingresos = parseFloat(document.getElementById("ingresos").value);
  // const monto = parseFloat(document.getElementById("monto").value);
  // const cuotas = parseInt(document.getElementById("cuotas").value);
  // const tipo = document.getElementById("tipo").value;
  // const Tiempo = document.getElementById("Tiempo_laborando").value;
  // const TelefonoEmpresa = document.getElementById("telefonoEmpresa").value;
  const TelefonoCasa = document.getElementById("telefonoCasa").value;
  const Direccion = document.getElementById("Direccion").value;
  //Referencias personales
  // const RNombre1 = document.getElementById("RNombre1").value;
  // const RTelefono1 = document.getElementById("RTelefono1").value;
  // const RNombre2 = document.getElementById("RNombre2").value;
  // const RTelefono2 = document.getElementById("RTelefono2").value;

  const datos = {
    dpi: dpi,
    nit: nit,
    nombres: nombre,
    apellido: "N/A",
    correo: correo,
    telefonoPrincipal: telefono,
    telefonoSecundario: TelefonoCasa,
    direccion: "direccion",
    municipio: "N/A",
    departamento: "N/A",
    edad: 0,
    genero: "N/A",
    estadoCivil: "N/A",
    ocupacion: puesto,
    createdAt: "2023-09-25T20:43:09.783Z",
    updatedAt: "2023-09-25T20:43:09.783Z",
  };
  //obtener token
  try {
    const conexion = await fetch(
      url + "/auth/login",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      }
    );

    if (!conexion.ok) {
      throw new Error("La solicitud no fue exitosa");
    }

    const respuesta = await conexion.json();
    const token = respuesta.token;
    
    //enviar datos
      try {
        const conexion_datos = await fetch(
          url + "/customers",{
            method: "POST",
            headers: {
              accept: "*/*",
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
          }
        )
          if (conexion_datos.ok) {
            console.log("Datos enviados correctamente");
          } else {
            console.log("Error al enviar los datos");
          } 

      }catch(error){
        console.error("Hubo un error:", error);
      }

  } catch (error) {
    console.error("Hubo un error:", error);
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function sendEmail() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://vallague.com/plantillas/premium/prestamos/src/send.php",
    true
  );
  //xhr.open("POST", "././src/send.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Origin", "https://easycapital.com.gt/");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      if (response.success) {
      } else {
        alert(response.message);
      }
    }
  };
  const message = encodeURIComponent(
    document.getElementById("Formato_Correo").innerHTML
  );
  const correo = encodeURIComponent(document.getElementById("correo").value);
  const captchaResponse = grecaptcha.getResponse();
  const postData = `correo=${correo}&message=${message}&g-recaptcha-response=${captchaResponse}`;
  Mensaje_Enviado();
  xhr.send(postData);
}

const form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Detener la acción predeterminada del formulario
  calcularPrestamo(); // Llamar a la función calcularPrestamo
  window.location.hash = "#Enviar_Recaptcha";
});

function generar_pdf() {
  // Obtener el div que contiene el contenido a exportar
  const pdf = new jsPDF("p", "pt", "letter");
  pdf.fromHTML($("#pdfGenerado").html(), 15, 15, {
    width: 170,
  });
  pdf.fromHTML(contenido);
  window.open(pdf.output("bloburl"), "_blank");
  function downloadPDFWithBrowserPrint() {
    window.print();
  }
  document
    .querySelector("#browserPrint")
    .addEventListener("click", downloadPDFWithBrowserPrint);
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

function Mensaje_Enviado() {
  const Contenedor = document.getElementById("Contenedor");
  Contenedor.innerHTML = `<div class="Mensaje_exitoso">
  <h2>La solicitud ha sido enviada correctamente</h2>
  <p>En su correo electronico podrá verificar que la solicitud ha sido enviada correctamente. </p>
  <p>En caso de no recibirlo:<p>
  <ol>
      <li> Compruebe que el mensaje se encuentre en la carpeta de spam.</li>
      <li> Verifique que el correo proporcionado está correctamente escrito.</li>
  </ol>
   <h2>Solicitamos la siguiente documentación para tu préstamo</h2>
  <ol>
      <li> DPI vigente.</li>
      <li> Recibo de agua, Luz o Teléfono.</li>
      <li> Constancia Laboral (antigüedad mayor a 1 año).</li>
      <li> 2 Cartas de referencia Personal.</li>
      <li> Últimos 3 estados de cuenta.</li>
      <li> En caso sea requerido fiador, debe presentar los mismos requisitos que el solicitante.</li>
  </ol>
</div>`;
}
