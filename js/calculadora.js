// calculadora.js

document.addEventListener("DOMContentLoaded", function () {
    // Entradas
    const calcType = document.getElementById("calcType");
    const valorComercial = document.getElementById("valorComercial");
    const precioDeSesion = document.getElementById("precioDeSesion");

    // Resultados (salidas)
    const displayValorComercial = document.getElementById("displayValorComercial");
    const displayValorJudicial = document.getElementById("displayValorJudicial");
    const displayHonorarios = document.getElementById("displayHonorarios");
    const displayCession = document.getElementById("displayCession");
    const displayPrimerPago = document.getElementById("displayPrimerPago");
    const displaySegundoPago = document.getElementById("displaySegundoPago");
    const displayTercerPago = document.getElementById("displayTercerPago");
    const displayTotal = document.getElementById("displayTotal");
    const displayGanancia = document.getElementById("displayGanancia");
    const displayCostoCompra = document.getElementById("displayCostoCompra");

     // 🧮 Formatear número como moneda mexicana (ej: 1,500,000)
    function formatCurrencyMX(value) {
        if (isNaN(value) || value === "") return "";
        return value.toLocaleString("es-MX", { minimumFractionDigits: 0 });
    }

    // 🔢 Quitar comas, puntos, símbolos para obtener el valor numérico
    function unformatNumber(value) {
        return parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
    }

    // ✏️ Formatear campo mientras se escribe
    function formatInputCurrency(input) {
        let value = unformatNumber(input.value);
        if (value) {
            input.value = "$" + formatCurrencyMX(value);
        } else {
            input.value = "";
        }
    }

    // Función principal de cálculo
    function calcular() {
        let tipo = calcType.value;
        let valor = unformatNumber(valorComercial.value.replace(/[^0-9.]/g, "")) || 0;
        let cesion = unformatNumber(precioDeSesion.value.replace(/[^0-9.]/g, "")) || 0;

        // Valor Judicial (2/3 del valor comercial)
        let valorJudicial = (2 / 3) * valor;

        // Honorarios
        let honorarios = 0;
        if (tipo === "sentencia") {
            honorarios = valor < 3000000 ? 435000 : 0.06 * (valor - 3000000) + 435000;
        } else if (tipo === "adjudicado") {
            honorarios = valor < 5060000 ? 390000 : 0.06 * (valor - 5060000) + 435000;
        } else {
            honorarios = 0;
        }

        // Pagos parciales
        let primerPago = honorarios * 0.75;
        let tercerPago = honorarios * 0.25;

        // Precio total
        let precioTotal = primerPago + tercerPago + cesion;

        // Cálculo de ganancia y costo de compra
        let ganancia = valor > 0 ? 1 - precioTotal / valor : 0;
        let costoCompra = valor > 0 ? precioTotal / valor : 0;

        // Mostrar resultados con formato moneda o porcentaje
        displayValorComercial.textContent = `$${valor.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displayValorJudicial.textContent = `$${valorJudicial.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displayHonorarios.textContent = `$${honorarios.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displayCession.textContent = `$${cesion.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displayPrimerPago.textContent = `$${primerPago.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displaySegundoPago.textContent = `$${cesion.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displayTercerPago.textContent = `$${tercerPago.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displayTotal.textContent = `$${precioTotal.toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
        displayGanancia.textContent = `${(ganancia * 100).toFixed(2)}%`;
        displayCostoCompra.textContent = `${(costoCompra * 100).toFixed(2)}%`;
    }

    // 🔄 Escuchar cambios en los campos
    calcType.addEventListener("change", calcular);

    valorComercial.addEventListener("input", () => {
        formatInputCurrency(valorComercial);
        calcular();
    });

    precioDeSesion.addEventListener("input", () => {
        formatInputCurrency(precioDeSesion);
        calcular();
    });

    // Calcular al cargar
    calcular();
});


   // 📋 Función para copiar el valor de un resultado al portapapeles
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Obtener el texto sin espacios extra
    const value = element.textContent.trim();

    // Copiar al portapapeles usando la API moderna
    navigator.clipboard.writeText(value).then(() => {
        // Mostrar notificación temporal
        showToast("¡Valor copiado!");
    }).catch(err => {
        console.error("Error al copiar:", err);
    });
}

// 🔔 Mostrar el mensaje de confirmación (usa el <div id="toast"> de tu HTML)
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
