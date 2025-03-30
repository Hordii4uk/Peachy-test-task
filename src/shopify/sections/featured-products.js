import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "@/shopify/snippets/variant-swatch";

const FeaturedProducts = {
  onLoad() {
    this._init();
    this._initPrice();
    window.addEventListener("resize", this._init.bind(this));
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".swiper");
    if (!this.sliderWrapper) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (!this.slider) {
        this.slider = new Swiper(this.sliderWrapper, {
          slidesPerView: 1,
          autoplay: false,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
          modules: [Autoplay, Pagination],
        });
      }
    } else {
      if (this.slider) {
        this.slider.destroy(true, true);
        this.slider = null;
      }
    }
  },

  _initPrice() {
    const forms = this.container.querySelectorAll("div[data-section-type='featured-products'] form[action='/cart/add']");

    forms.forEach(form => {
      form.addEventListener("change", (event) => {
        const target = event.target;
        if (target.tagName !== "SELECT") return;

        const selectedOption = target.options[target.selectedIndex];
        const priceElement = target.closest("form").querySelector(".option-price");

        if (selectedOption && priceElement) {
          priceElement.textContent = selectedOption.getAttribute("data-price");
        }
      });
    });
  },
};

export default FeaturedProducts;
