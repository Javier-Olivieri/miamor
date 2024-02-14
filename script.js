document.getElementById('heart').addEventListener('click', function() {
    document.getElementById('heart-container').style.display = 'none';
    document.getElementById('card').style.display = 'block';
});

document.getElementById('btn').addEventListener('click', function() {
    Swal.fire({
        title: '¡Te amo demasiado!',
        html: '<span style="font-size: 50px;color: red;">&#10084;</span>', // Corazón
        confirmButtonText: 'Cerrar'
    });
});




