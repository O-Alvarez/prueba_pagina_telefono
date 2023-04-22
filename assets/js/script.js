function MostrarTabla() {
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const monto = parseFloat(document.getElementById("monto").value);
    const cuotas = parseInt(document.getElementById("cuotas").value);
    const tipo = document.getElementById("tipo").value;
    var tasaInteres;

    if (monto >= 20000) {
        const credito = document.getElementById("tipo");
        credito.value = "Sobre Saldos"
        tasaInteres = 1.5 / 100;

        //calculo amortizaciones Sobre saldos

        var Capital_Mensual = monto / cuotas;
        var s_Saldo = monto;
        var s_Cuota;
        var s_Interes;
        var s_Impuesto;

        const c_detalle = [];

        for (let i = 1; i <= cuotas; i++) {
            s_Interes = s_Saldo * tasaInteres;
            s_Saldo = s_Saldo - Capital_Mensual;

            if (s_Saldo + 1 > 0) {
                s_Impuesto = ((s_Interes / 0.9) * 0.12) + ((s_Interes / 0.9) * 0.1);
            }
            else {
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
            })
            const resultadoDiv = document.getElementById("Mostrar_Tabla");
            resultadoDiv.innerHTML = `<table class="table table-striped">
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
   ${c_detalle.map(d => `
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

        }


    }


    else if (monto < 20000 && monto > 0) {
        const credito = document.getElementById("tipo");
        credito.value = "Flat"
        tasaInteres = 3.5 / 100;

        const c_capital = monto / cuotas;
        var c_CuotaMensual = (monto + (monto * cuotas * tasaInteres)) / cuotas;
        var Saldo = monto;
        var c_impuesto;
        var pcuota;
        const c_detalle = [];
        for (let i = 1; i <= cuotas; i++) {
            var c_interes = monto * tasaInteres;
            Saldo = Saldo - c_capital;
            if (Saldo + 1 > 0) {
                c_impuesto = ((c_interes / 0.9) * 0.12) + ((c_interes / 0.9) * 0.1);
            }
            else {
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
            resultadoDiv.innerHTML = `<table class="table table-striped">
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
    ${c_detalle.map(d => `
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
    const c_detalle = [];

    const totalInteres = 0;
    const totalPagar = 0;

    //se verifica si el DPI es correcto

    if (dpi.length === 13) {

        if (monto >= 20000) {
            const credito = document.getElementById("tipo");
            credito.value = "Sobre Saldos"
            tasaInteres = 1.5 / 100;

            //calculo amortizaciones Sobre saldos

            var Capital_Mensual = monto / cuotas;
            var s_Saldo = monto;
            var s_Cuota;
            var s_Interes;
            var s_Impuesto;



            for (let i = 1; i <= cuotas; i++) {
                s_Interes = s_Saldo * tasaInteres;
                s_Saldo = s_Saldo - Capital_Mensual;

                if (s_Saldo + 1 > 0) {
                    s_Impuesto = ((s_Interes / 0.9) * 0.12) + ((s_Interes / 0.9) * 0.1);
                }
                else {
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
                })
                const resultadoDiv = document.getElementById("Mostrar_Tabla");
                resultadoDiv.innerHTML = `<table class="table table-striped">
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
           ${c_detalle.map(d => `
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

            }


        }


        else if (monto < 20000 && monto > 0) {
            const credito = document.getElementById("tipo");
            credito.value = "Flat"
            tasaInteres = 3.5 / 100;

            const c_capital = monto / cuotas;
            var c_CuotaMensual = (monto + (monto * cuotas * tasaInteres)) / cuotas;
            var Saldo = monto;
            var c_impuesto;
            var pcuota;

            for (let i = 1; i <= cuotas; i++) {
                var c_interes = monto * tasaInteres;
                Saldo = Saldo - c_capital;
                if (Saldo + 1 > 0) {
                    c_impuesto = ((c_interes / 0.9) * 0.12) + ((c_interes / 0.9) * 0.1);
                }
                else {
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
                resultadoDiv.innerHTML = `<table class="table table-striped">
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
            ${c_detalle.map(d => `
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
        ${c_detalle.map(d => `
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
    <!--<p><strong>Total a pagar:</strong> Q${totalPagar.toFixed(2)}</p>
    <p><strong>Total de intereses:</strong> Q${totalInteres.toFixed(2)}</p>-->`;

        const tabla = document.getElementById('Detalles_Prestamo');
        tabla.style.display = 'block';

        const captcha = document.getElementById('Enviar_Recaptcha');
        captcha.style.display = 'block';


    }
    else {
        const mensaje = document.getElementById('Mensaje_Flotante');
        mensaje.style.display = 'block';
        setTimeout(function () {
            mensaje.style.display = 'none';
        }, 4000);
    }


}

var miCaptcha;
var onloadCallback = function () {
    miCaptcha = grecaptcha.render('miCaptcha', {
        'sitekey': '6LcXp6olAAAAAKiXut9OKx6ClO-STCFDYIMronUq',
        'callback': 'verifyCaptcha'
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
            var response = JSON.parse(xhr.responseText);
            if (response.success) {
                alert("El correo se ha enviado correctamente.");
            } else {
                alert(response.message);
            }
        }
    };
    const message = encodeURIComponent(document.getElementById("Detalles_Prestamo").innerHTML);
    const correo = encodeURIComponent(document.getElementById("correo").value);
    const captchaResponse = grecaptcha.getResponse();
    const postData = `correo=${correo}&message=${message}&g-recaptcha-response=${captchaResponse}`;
    xhr.send(postData);
}





const form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Detener la acción predeterminada del formulario
    calcularPrestamo(); // Llamar a la función calcularPrestamo
});




