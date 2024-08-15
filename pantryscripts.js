const images = [
   "IMG_0343.JPG", "IMG_0344.JPG", "IMG_0347.JPG", "IMG_0348.JPG",
    "IMG_1016.PNG", "IMG_1328.JPG", "IMG_1329.JPG", "IMG_4113.JPG",
     "IMG_4114.JPG", "IMG_5436.JPG", "IMG_5439.JPG", "IMG_5440.JPG",
      "IMG_7747.JPG", "IMG_8959.JPG", "IMG_8960.JPG", "IMG_8961.JPG",
];

let currentPage = 0;
const imagesPerPage = 14; // تعداد باکس‌ها به 14
let currentImageIndex = 0; // شاخص تصویر فعلی برای لایت‌باکس

function renderImages() {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';

    const start = currentPage * imagesPerPage;
    const end = start + imagesPerPage;
    const pageImages = images.slice(start, end);

    pageImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/pantry/${image}`;  // مسیر صحیح به تصاویر
        imgElement.alt = image;
        imgElement.onclick = () => openLightbox(start + index); // تنظیم رویداد کلیک برای باز کردن لایت‌باکس
        gallery.appendChild(imgElement);
    });

    // کنترل دکمه‌ها
    document.getElementById('prev-btn').disabled = currentPage === 0;
    document.getElementById('next-btn').disabled = end >= images.length;
}

function nextPage() {
    currentPage++;
    renderImages();
}

function prevPage() {
    currentPage--;
    renderImages();
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = "block";
    lightboxImg.src = `images/pantry/${images[currentImageIndex]}`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = `images/pantry/${images[currentImageIndex]}`;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = `images/pantry/${images[currentImageIndex]}`;
}

// بارگذاری اولیه
document.addEventListener("DOMContentLoaded", function() {
    renderImages();
});
