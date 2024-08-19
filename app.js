document.addEventListener(`DOMContentLoaded`, function(){
    const entradaTexto = document.getElementById(`ingreso_texto`)
    const botonEncriptar = document.getElementById(`boton_encriptar`)
    const botonDesencriptar = document.getElementById(`boton_desencriptar`)
    const resultadoTexto = document.getElementById(`resultado_texto`)
    const munhecoImg = document.getElementById(`munheco_img`)
    const resultadoTitulo = document.getElementById(`resultado_titulo`)
    const resultadoParrafo = document.getElementById(`resultado_parrafo`)
    const botonCopiar = document.getElementById(`boton_copiar`)



    function encriptado(texto){
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    };

    function desencriptado(texto){
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    };

    function validarTexto(texto) {
        return /^[a-z\s]*$/.test(texto);
    };

    function mostrarResultadoTexto(texto) {
        munhecoImg.style.display = 'none';
        resultadoTitulo.style.display = 'none';
        resultadoParrafo.style.display = 'none';
        resultadoTexto.style.display = 'block';
        botonCopiar.style.display = 'block';
    
        resultadoTexto.value = texto;
        resultadoTexto.style.height = 'auto';
        resultadoTexto.style.height = resultadoTexto.scrollHeight + 'px';
    };
    botonEncriptar.addEventListener('click', function() {
        const texto = entradaTexto.value.toLowerCase();
        if (texto === "") {
            alert('Por favor, ingrese un valor en cuadro de texto');
        } else {
            if (!validarTexto(texto)) {
                alert('Por favor, ingrese solo letras minúsculas sin acentos');
                return;
            }
            const textoEncriptado = encriptado(texto);
            mostrarResultadoTexto(textoEncriptado);
        }
    });

    botonDesencriptar.addEventListener('click', function() {
        const texto = entradaTexto.value.toLowerCase();
        if (texto === "") {
            alert('Por favor, ingrese un valor en cuadro de texto');
        } else {
            if (!validarTexto(texto)) {
                alert('Por favor, ingrese solo letras minúsculas sin acentos');
                return;
            }
            const textoDesencriptado = desencriptado(texto);
            mostrarResultadoTexto(textoDesencriptado);
        }
    });

    botonCopiar.addEventListener('click', function() {
        resultadoTexto.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});