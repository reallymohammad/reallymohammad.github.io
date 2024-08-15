const images = [
    "IMG_3509.JPG", "IMG_3510.JPG", "IMG_3536.JPG", "IMG_3544.JPG", 
    "IMG_3545.JPG", "IMG_3552.JPG", "IMG_3751.JPG", "IMG_3752.JPG",
     "IMG_3888.JPG", "IMG_3890.JPG", "IMG_3894.JPG", "IMG_3940.JPG", 
     "IMG_3942.JPG", "IMG_4242.JPG", "IMG_4243.JPG", "IMG_4244.JPG", 
     "IMG_4254.JPG", "IMG_5306.JPG", "IMG_5307.JPG", "IMG_5781.JPG", 
     "IMG_5784.JPG", "IMG_5801.JPG", "IMG_5802.JPG", "IMG_5803.JPG", 
     "IMG_6033.JPG", "IMG_6037.JPG", "IMG_6039.JPG", "IMG_6052.JPG",
      "IMG_6054.JPG", "IMG_6055.JPG", "IMG_7628.JPG", "IMG_7629.JPG", 
      "IMG_7630.JPG", "IMG_7632.JPG", "IMG_7644.JPG", "IMG_7649.JPG",
       "IMG_7659.PNG", "IMG_9358.JPG", "IMG_9361.JPG", "IMG_9366.JPG",
        "IMG_9372.JPG", "IMG_9373.JPG", "IMG_9464.JPG", "IMG_9468.JPG",
         "IMG_9475.JPG", "IMG_9476.JPG", "IMG_9477.JPG", "IMG_9478.JPG",
          "IMG_9620.JPG", "IMG_9622.JPG", "IMG_9626.JPG", "IMG_9632.JPG",
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
        imgElement.src = `images/entertainment/${image}`;  // مسیر صحیح به تصاویر
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
    lightboxImg.src = `images/entertainment/${images[currentImageIndex]}`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = `images/entertainment/${images[currentImageIndex]}`;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = `images/entertainment/${images[currentImageIndex]}`;
}

// بارگذاری اولیه
document.addEventListener("DOMContentLoaded", function() {
    renderImages();
});
