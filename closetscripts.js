const images = [
    "IMG_0323.JPG", "IMG_0326.JPG", "IMG_0328.JPG", "IMG_0331.JPG",
 "IMG_0332.JPG", "IMG_0333.JPG", "IMG_0334.JPG", "IMG_0355.JPG",
 "IMG_0356.JPG", "IMG_0357.JPG", "IMG_0358.JPG", "IMG_0359.JPG",
 "IMG_0361.JPG", "IMG_0422.JPG", "IMG_0424.JPG", "IMG_0425.JPG", 
"IMG_0426.JPG", "IMG_0430.JPG", "IMG_0882.PNG", "IMG_0892.PNG", 
"IMG_0893.PNG", "IMG_1145.JPG", "IMG_1146.JPG", "IMG_1149.JPG", 
"IMG_1165.JPG", "IMG_1166.JPG", "IMG_1171.JPG", "IMG_1172.JPG",
 "IMG_1173.JPG", "IMG_1174.JPG", "IMG_1175.JPG", "IMG_1177.JPG",
 "IMG_1322.JPG", "IMG_1324.JPG", "IMG_1325.JPG", "IMG_1472.JPG",
 "IMG_1906.JPG", "IMG_1907.JPG", "IMG_1910.JPG", "IMG_1911.JPG",
 "IMG_1912.JPG", "IMG_1914.JPG", "IMG_1915.JPG", "IMG_1917.JPG",
 "IMG_1918.JPG", "IMG_1919.JPG", "IMG_1921.JPG", "IMG_1922.JPG", 
"IMG_1926.JPG", "IMG_1931.JPG", "IMG_1932.JPG", "IMG_1933.JPG", 
"IMG_1939.JPG", "IMG_1941.JPG", "IMG_1942.JPG", "IMG_1943.JPG",
 "IMG_1944.JPG", "IMG_1945.JPG", "IMG_1954.PNG", "IMG_2011.JPG",
 "IMG_2016.JPG", "IMG_2017.JPG", "IMG_2018.JPG", "IMG_2020.JPG",
 "IMG_2021.JPG", "IMG_2022.JPG", "IMG_2028.JPG", "IMG_2069.JPG",
 "IMG_2088.JPG", "IMG_2089.JPG", "IMG_2091.JPG", "IMG_2092.JPG",
 "IMG_2093.JPG", "IMG_2177.JPG", "IMG_2178.JPG", "IMG_2179.JPG",
 "IMG_2181.JPG", "IMG_2299.JPG", "IMG_2300.JPG", "IMG_2301.JPG",
 "IMG_2304.JPG", "IMG_2309.JPG", "IMG_2310.JPG", "IMG_2311.JPG",
 "IMG_2312.JPG", "IMG_2313.JPG", "IMG_2314.JPG", "IMG_2550.JPG",
 "IMG_2552.JPG", "IMG_2555.JPG", "IMG_2558.JPG", "IMG_2560.JPG",
 "IMG_2567.JPG", "IMG_2569.JPG", "IMG_2572.JPG", "IMG_2578.JPG",
 "IMG_2857.JPG", "IMG_2858.JPG", "IMG_3298.JPG", "IMG_3300.JPG", 
"IMG_3303.JPG", "IMG_3305.JPG", "IMG_3308.JPG", "IMG_3503.JPG",
 "IMG_3505.JPG", "IMG_3506.JPG", "IMG_3514.JPG", "IMG_3515.JPG",
 "IMG_3518.JPG", "IMG_3521.JPG", "IMG_3616.JPG", "IMG_3618.JPG", 
"IMG_3619.JPG", "IMG_3621.JPG", "IMG_3689.JPG", "IMG_3690.JPG", 
"IMG_3694.JPG", "IMG_3697.JPG", "IMG_3874.JPG", "IMG_3877.JPG",
 "IMG_3879.JPG", "IMG_3880.JPG", "IMG_3890.JPG", "IMG_3893.JPG",
 "IMG_3895.JPG", "IMG_4001.JPG", "IMG_4005.JPG", "IMG_4006.JPG",
 "IMG_4007.JPG", "IMG_4008.JPG", "IMG_4010.JPG", "IMG_4042.JPG",
 "IMG_4044.JPG", "IMG_4045.JPG", "IMG_4049.JPG", "IMG_4050.JPG",
 "IMG_4051.JPG", "IMG_4053.JPG", "IMG_4054.JPG", "IMG_4076.JPG",
 "IMG_4083.JPG", "IMG_4085.JPG", "IMG_4086.JPG", "IMG_4088.JPG",
 "IMG_4090.JPG", "IMG_4147.JPG", "IMG_4388.JPG", "IMG_4389.JPG",
 "IMG_4390.JPG", "IMG_4393.JPG", "IMG_4438.JPG", "IMG_4439.JPG",
 "IMG_4706.JPG", "IMG_4707.JPG", "IMG_4709.JPG", "IMG_4710.JPG", 
"IMG_4712.JPG", "IMG_4715.JPG", "IMG_4718.JPG", "IMG_4751.JPG", 
"IMG_4764.JPG", "IMG_4768.JPG", "IMG_4770.PNG", "IMG_4935.JPG", 
"IMG_4937.JPG", "IMG_4938.JPG", "IMG_4940.JPG", "IMG_5104.JPG",
 "IMG_5105.JPG", "IMG_5106.JPG", "IMG_5108.JPG", "IMG_5109.JPG",
 "IMG_5110.JPG", "IMG_5112.JPG", "IMG_5115.JPG", "IMG_5116.JPG",
 "IMG_5119.JPG", "IMG_5123.JPG", "IMG_5124.JPG", "IMG_5126.JPG",
 "IMG_5127.JPG", "IMG_5189.JPG", "IMG_5190.JPG", "IMG_5191.JPG",
 "IMG_5195.JPG", "IMG_5196.JPG", "IMG_5197.JPG", "IMG_5266.JPG", 
"IMG_5271.JPG", "IMG_5273.JPG", "IMG_5274.JPG", "IMG_5308.JPG",
 "IMG_5309.JPG", "IMG_5310.JPG", "IMG_5312.JPG", "IMG_5314.JPG",
 "IMG_5315.JPG", "IMG_5316.JPG", "IMG_5317.JPG", "IMG_5387.JPG",
 "IMG_5389.JPG", "IMG_5392.JPG", "IMG_5395.JPG", "IMG_5396.JPG",
 "IMG_5397.JPG", "IMG_5398.JPG", "IMG_5490.JPG", "IMG_5491.JPG",
 "IMG_5510.JPG", "IMG_5571.JPG", "IMG_5573.JPG", "IMG_5574.JPG", 
"IMG_5575.JPG", "IMG_5577.JPG", "IMG_5579.JPG", "IMG_5582.JPG",
 "IMG_5583.JPG", "IMG_5586.PNG", "IMG_5610.JPG", "IMG_5611.JPG", 
"IMG_5613.JPG", "IMG_5662.JPG", "IMG_5666.JPG", "IMG_5667.JPG", 
"IMG_5668.JPG", "IMG_5671.JPG", "IMG_5672.JPG", "IMG_5675.JPG", 
"IMG_5775.JPG", "IMG_5777.JPG", "IMG_5792.JPG", "IMG_5793.JPG",
 "IMG_5901.JPG", "IMG_5904.JPG", "IMG_5905.JPG", "IMG_5906.JPG",
 "IMG_5928.JPG", "IMG_5959.JPG", "IMG_5960.JPG", "IMG_6073.JPG", 
"IMG_6074.JPG", "IMG_6075.JPG", "IMG_6076.JPG", "IMG_6077.JPG",
 "IMG_6078.JPG", "IMG_6079.JPG", "IMG_6561.JPG", "IMG_6562.JPG",
 "IMG_6563.JPG", "IMG_6565.JPG", "IMG_6566.JPG", "IMG_6569.JPG",
 "IMG_6571.JPG", "IMG_6583.JPG", "IMG_6586.JPG", "IMG_6588.JPG",
 "IMG_6590.JPG", "IMG_6593.JPG", "IMG_6596.JPG", "IMG_6597.JPG",
 "IMG_7361.JPG", "IMG_7369.JPG", "IMG_7371.JPG", "IMG_7372.JPG",
 "IMG_7373.JPG", "IMG_7374.JPG", "IMG_7379.JPG", "IMG_7380.JPG",
 "IMG_7381.JPG", "IMG_7751.JPG", "IMG_7755.JPG", "IMG_7758.JPG",
 "IMG_7763.JPG", "IMG_7764.JPG", "IMG_7765.JPG", "IMG_7766.JPG",
 "IMG_7767.JPG", "IMG_7869.JPG", "IMG_7870.JPG", "IMG_7871.JPG",
 "IMG_8147.JPG", "IMG_8148.JPG", "IMG_8149.JPG", "IMG_8150.JPG",
 "IMG_8490.JPG", "IMG_8495.JPG", "IMG_8496.JPG", "IMG_8498.JPG",
 "IMG_8503.JPG", "IMG_8506.JPG", "IMG_8507.JPG", "IMG_8509.JPG",
 "IMG_8510.JPG", "IMG_8512.JPG", "IMG_8528.JPG", "IMG_8529.JPG",
 "IMG_8530.JPG", "IMG_8531.JPG", "IMG_8532.JPG", "IMG_8533.JPG",
 "IMG_8535.JPG", "IMG_8536.JPG", "IMG_8537.JPG", "IMG_8538.JPG",
 "IMG_8540.JPG", "IMG_8625.JPG", "IMG_8626.JPG", "IMG_8628.JPG",
 "IMG_8852.JPG", "IMG_8875.JPG", "IMG_8876.JPG", "IMG_8877.JPG",
 "IMG_8878.JPG", "IMG_8879.JPG", "IMG_8880.JPG", "IMG_8881.JPG",
 "IMG_8882.JPG", "IMG_8884.JPG", "IMG_8885.JPG", "IMG_8886.JPG",
 "IMG_9179.JPG", "IMG_9183.JPG", "IMG_9185.JPG", "IMG_9186.JPG",
 "IMG_9189.JPG", "IMG_9191.JPG", "IMG_9192.JPG", "IMG_9193.JPG",
 "IMG_9194.JPG", "IMG_9195.JPG", "IMG_9199.JPG", "IMG_9200.JPG", 
"IMG_9201.JPG", "IMG_9208.JPG", "IMG_9212.JPG", "IMG_9538.JPG", 
"IMG_9550.JPG", "IMG_9551.JPG", "IMG_9559.JPG", "IMG_9560.JPG", 
"IMG_9561.JPG", "IMG_9562.JPG", "IMG_9564.JPG", "IMG_9565.JPG",
];

let currentPage = 0;
const imagesPerPage = 28; // تعداد باکس‌ها به 14
let currentImageIndex = 0; // شاخص تصویر فعلی برای لایت‌باکس

function renderImages() {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';

    const start = currentPage * imagesPerPage;
    const end = start + imagesPerPage;
    const pageImages = images.slice(start, end);

    pageImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/closet/${image}`;  // مسیر صحیح به تصاویر
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
    lightboxImg.src = `images/closet/${images[currentImageIndex]}`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = `images/closet/${images[currentImageIndex]}`;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = `images/closet/${images[currentImageIndex]}`;
}

// بارگذاری اولیه
document.addEventListener("DOMContentLoaded", function() {
    renderImages();
});
