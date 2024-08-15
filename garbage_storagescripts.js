const images = [
   "IMG_1037.JPG", "IMG_1038.JPG", "IMG_1039.JPG", "IMG_1042.JPG", 
   "IMG_1310.JPG", "IMG_1311.JPG", "IMG_1315.JPG", "IMG_2862.JPG", 
   "IMG_2863.JPG", "IMG_2866.JPG", "IMG_4102.JPG", "IMG_4359.JPG",
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
        imgElement.src = `images/garbage_storage/${image}`;  // مسیر صحیح به تصاویر
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
    lightboxImg.src = `images/garbage_storage/${images[currentImageIndex]}`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = `images/garbage_storage/${images[currentImageIndex]}`;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = `images/garbage_storage/${images[currentImageIndex]}`;
}

// بارگذاری اولیه
document.addEventListener("DOMContentLoaded", function() {
    renderImages();
});
