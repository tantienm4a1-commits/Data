document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");
    const modalImg = document.getElementById("modalProductImg");
    const modalTitle = document.getElementById("modalProductTitle");
    const modalPrice = document.getElementById("modalProductPrice");
    const modalStars = document.getElementById("modalProductStars");
    const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
    const cartCount = document.getElementById("cart-count");

    let count = 0;

    productCards.forEach((card) => {
        card.addEventListener("click", function () {
            const imgUrl = this.querySelector(".card-img-top").getAttribute("src");
            const title = this.querySelector(".card-title").textContent;
            const price = this.querySelector(".fw-bold").textContent;
            const starsHTML = this.querySelector(".text-warning").innerHTML;

            modalImg.setAttribute("src", imgUrl);
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            modalStars.innerHTML = starsHTML;
        });
    });
    modalAddToCartBtn.addEventListener("click", function () {
        count++;
        cartCount.textContent = count;
        cartCount.style.transform = "scale(1.3)";
        setTimeout(() => {
            cartCount.style.transform = "scale(1)";
        }, 200);
        const currentModal = bootstrap.Modal.getInstance(document.getElementById("productModal"));
        currentModal.hide();
    });
});
