const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close');
const gallery = document.getElementById('gallery');
const imageInput = document.getElementById('image-input');

// Function to create image elements and add them to the gallery
function displayImages(files) {
    gallery.innerHTML = ''; // Clear existing images
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = document.createElement('div');
            img.classList.add('gallery-item');
            img.innerHTML = `<img src="${event.target.result}" alt="${file.name}">`;
            img.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImage.src = event.target.result;
            });
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// Event listener for the file input
imageInput.addEventListener('change', (event) => {
    const files = event.target.files;
    displayImages(files);
});

// Close modal functionality
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
