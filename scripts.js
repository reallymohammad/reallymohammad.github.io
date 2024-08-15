
document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var galleryItems = document.getElementsByClassName("gallery-item");
    var closeBtn = document.getElementsByClassName("close")[0];

    for (var i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    }

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
});
