const imagenInput = document.getElementById('imagenInput');
const imagenPreview = document.getElementById('imagenPreview');

imagenInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagenPreview.src = e.target.result;
            imagenPreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});