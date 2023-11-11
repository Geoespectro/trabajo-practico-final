
function iniciar() {
    let dropZones = document.querySelectorAll('.caja');
    let contador = 0;

    function prevenir(e) {
        e.preventDefault();
    }

    function arrastrando(e) {
        e.dataTransfer.setData('text', e.target.id);
    }

    function soltado(e) {
        prevenir(e);
        let id = e.dataTransfer.getData('text');
        let imagen = document.getElementById(id);
        imagen.style.display = 'none';
        e.target.innerHTML = `<img src="${imagen.src}" height="400px" width="275px">`;
        contador++;
    }

    function reiniciar() {
        
        document.querySelectorAll('#cajaimagenes img').forEach((imagen) => {
            imagen.style.display = 'block';
        });

       
        document.querySelectorAll('.caja').forEach((dropZone) => {
            dropZone.innerHTML = '<p>Arrastre y suelte la imagen aquí</p>';
        });

        
        contador = 0;
    }

    dropZones.forEach((dropZone) => {
        dropZone.addEventListener('dragenter', prevenir, false);
        dropZone.addEventListener('dragover', prevenir, false);
        dropZone.addEventListener('drop', soltado, false);
    });

    let imagenes = document.querySelectorAll('#cajaimagenes img');
    imagenes.forEach((imagen) => {
        imagen.addEventListener('dragstart', arrastrando, false);
    });

    document.querySelector('.reinicio').addEventListener('click', reiniciar);
}

iniciar();
