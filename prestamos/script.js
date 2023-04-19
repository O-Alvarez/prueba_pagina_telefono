function MostrarTabla(){
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const monto = parseFloat(document.getElementById("monto").value);
    const cuotas = parseInt(document.getElementById("cuotas").value);
    const tipo = document.getElementById("tipo").value;

    

    const tasaInteres = 3.50 / 100;
    const interesMensual = tasaInteres / 12;
    const cuotaMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -cuotas));
    const totalInteres = cuotaMensual * cuotas - monto;
    const totalPagar = cuotaMensual * cuotas;

    // Calculamos los detalles de cada mes
    let saldo = monto;
    const impuesto = monto * (3 / 100) // Impuesto del 3%
    const detalle = [];
    for (let i = 1; i <= cuotas; i++) {
        const interes = saldo * interesMensual;
        const capital = cuotaMensual - interes;
        saldo -= capital;
        detalle.push({
            mes: i,
            cuota: cuotaMensual.toFixed(2),
            capital: capital.toFixed(2),
            interes: interes.toFixed(2),
            saldo: saldo.toFixed(2),
            impuesto: impuesto.toFixed(2),
        });

        const resultadoDiv = document.getElementById("Mostrar_Tabla");
        resultadoDiv.innerHTML=`<table class="table table-striped">
        <thead>
        <tr>
            <th>Meses</th>
            <th>Cuota</th>
            <th>Capital</th>
            <th>Intereses</th>
            <th>Saldo</th>
            <th>Impuesto</th>
        </tr>
        </thead>

        <tbody>
        ${detalle.map(d => `
            <tr>
            <td>${d.mes}</td>
            <td>Q${d.cuota}</td>
            <td>Q${d.capital}</td>
            <td>Q${d.interes}</td>
            <td>Q${d.saldo}</td>
            <td>Q${d.impuesto}</td>
            </tr>
        `).join('')}
        </tbody>
    </table>`;
}}


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


    //se verifica si el DPI es correcto
    
    if (dpi.length === 13){
        
         // Calculamos los detalles del préstamo
    const tasaInteres = 3.50 / 100;
    const interesMensual = tasaInteres / 12;
    const cuotaMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -cuotas));
    const totalInteres = cuotaMensual * cuotas - monto;
    const totalPagar = cuotaMensual * cuotas;

    // Calculamos los detalles de cada mes
    let saldo = monto;
    const impuesto = monto * (3 / 100) // Impuesto del 3%
    const detalle = [];
    for (let i = 1; i <= cuotas; i++) {
        const interes = saldo * interesMensual;
        const capital = cuotaMensual - interes;
        saldo -= capital;
        detalle.push({
            mes: i,
            cuota: cuotaMensual.toFixed(2),
            capital: capital.toFixed(2),
            interes: interes.toFixed(2),
            saldo: saldo.toFixed(2),
            impuesto: impuesto.toFixed(2),
        });
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
    <p><strong>Total de Ingresos:</strong> Q${ingresos.toFixed(2)}</p>
    <hr>
    <p><strong>Monto Solicitado:</strong> Q${monto.toFixed(2)}</p>
    <p><strong>No. de Cuotas:</strong> ${cuotas}</p>
    <p><strong>Tipo de Crédito:</strong> ${tipo}</p>
    <hr>

    <div class="outer-wrapper">
    <div class="table-wrapper">

    <table class="table table-striped" style="margin-bottom: 2vw;">
        <thead>
        <tr>
            <th>Meses</th>
            <th>Cuota</th>
            <th>Capital</th>
            <th>Intereses</th>
            <th>Saldo</th>
            <th>Impuesto</th>
        </tr>
        </thead>

        <tbody>
        ${detalle.map(d => `
            <tr>
            <td>${d.mes}</td>
            <td>Q${d.cuota}</td>
            <td>Q${d.capital}</td>
            <td>Q${d.interes}</td>
            <td>Q${d.saldo}</td>
            <td>Q${d.impuesto}</td>
            </tr>
        `).join('')}
        </tbody>
    </table>

    </div>
    </div>

    <hr>
    <p><strong>Total a pagar:</strong> Q${totalPagar.toFixed(2)}</p>
    <p><strong>Total de intereses:</strong> Q${totalInteres.toFixed(2)}</p>`;

    const tabla= document.getElementById('Detalles_Prestamo');
    tabla.style.display='block';

    const captcha= document.getElementById('Enviar_Recaptcha');
    captcha.style.display='block';

      
    }
    else{
        const mensaje= document.getElementById('Mensaje_Flotante');
        mensaje.style.display='block';
        setTimeout(function(){
            mensaje.style.display='none';
        }, 4000);
    }

   
}



function sendEmail() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        }
    };
    const message = encodeURIComponent(document.getElementById("Detalles_Prestamo").innerHTML);
    const correo = encodeURIComponent(document.getElementById("correo").value);
    xhr.send(`correo=${correo}&message=${message}`);
}


const form = document.getElementById("formulario");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Detener la acción predeterminada del formulario
  calcularPrestamo(); // Llamar a la función calcularPrestamo
});




