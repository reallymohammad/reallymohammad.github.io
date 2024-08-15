const images = [
    "IMG_0579.JPG", "IMG_0581.JPG", "IMG_0586.JPG", "IMG_0587.JPG", "IMG_0589.JPG",
    "IMG_0590.JPG", "IMG_0591.JPG", "IMG_0619.JPG", "IMG_0621.JPG", "IMG_0622.JPG",
    "IMG_0624.JPG", "IMG_1481.JPG", "IMG_1635.JPG", "IMG_1637.JPG", "IMG_1638.JPG",
    "IMG_1639.JPG", "IMG_1644.JPG", "IMG_1764.JPG", "IMG_1765.JPG", "IMG_1769.JPG",
    "IMG_1771.JPG", "IMG_1773.JPG", "IMG_1946.JPG", "IMG_1950.JPG", "IMG_2398.JPG",
    "IMG_2403.JPG", "IMG_2408.JPG", "IMG_2409.JPG", "IMG_2410.JPG", "IMG_2413.JPG",
    "IMG_2414.JPG", "IMG_2415.JPG", "IMG_2418.JPG", "IMG_2420.JPG", "IMG_2426.JPG",
    "IMG_2427.JPG", "IMG_3060.JPG", "IMG_3132.JPG", "IMG_3147.JPG", "IMG_3710.JPG",
    "IMG_3718.JPG", "IMG_3725.JPG", "IMG_3726.PNG", "IMG_3862.JPG", "IMG_4830.JPG",
    "IMG_4831.JPG", "IMG_4871.PNG", "IMG_4872.PNG", "IMG_5571.JPG", "IMG_5578.JPG",
    "IMG_5579.JPG", "IMG_5580.JPG", "IMG_5582.JPG", "IMG_5752.JPG", "IMG_5758.JPG",
    "IMG_5762.JPG", "IMG_7465.JPG", "IMG_7478.JPG", "IMG_7482.JPG", "IMG_7483.JPG",
    "IMG_7485.JPG", "IMG_7489.PNG", "IMG_7490.JPG", "IMG_7492.JPG", "IMG_7493.JPG",
    "IMG_7494.JPG", "IMG_7495.JPG", "IMG_7496.JPG",
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
        imgElement.src = `images/office/${image}`;  // مسیر صحیح به تصاویر
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
    lightboxImg.src = `images/office/${images[currentImageIndex]}`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = `images/office/${images[currentImageIndex]}`;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = `images/office/${images[currentImageIndex]}`;
}

// بارگذاری اولیه
document.addEventListener("DOMContentLoaded", function() {
    renderImages();
});
