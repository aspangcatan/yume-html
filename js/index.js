<script>
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const carousel = document.getElementById('carousel');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');


    // Toggle mobile nav
    if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

    function updateVisuals() {
    const items = Array.from(carousel.querySelectorAll('.carousel-item'));

    // Remove all effects first
    items.forEach(item => {
    item.classList.remove('opacity-50', 'scale-95', 'opacity-100', 'scale-105', 'z-10');
    item.classList.add('opacity-50', 'scale-95');
});

    // Get carousel's horizontal center
    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;

    let closestItem = null;
    let closestDistance = Infinity;

    items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const distance = Math.abs(carouselCenter - itemCenter);
    if (distance < closestDistance) {
    closestDistance = distance;
    closestItem = item;
}
});

    if (closestItem) {
    closestItem.classList.remove('opacity-50', 'scale-95');
    closestItem.classList.add('opacity-100', 'scale-105', 'z-10');
}
}

    function moveLeft() {
    const last = carousel.lastElementChild;
    carousel.insertBefore(last, carousel.firstElementChild);
    requestAnimationFrame(updateVisuals);
}

    function moveRight() {
    const first = carousel.firstElementChild;
    carousel.appendChild(first);
    requestAnimationFrame(updateVisuals);
}

    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

    window.addEventListener('resize', updateVisuals); // Recalculate on resize
    updateVisuals();
</script>