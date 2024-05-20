class Star extends HTMLElement {
  constructor() {
    super();
    this.value = this.getAttribute("val");
    this.type = this.getAttribute("tp");
    this.setHover = () => {
      this.style.display;
    };
  }
  #Render() {
    return `
        <label>
            <input
            type="radio"
            name="rating"
            value=${this.value}
            />
            <span class="star"
            >
            &#9733;
            </span>
        </label>
    `;
  }

  connectedCallback() {
    this.innerHTML = this.#Render();
    this.addEventListener("click", (event) => {
      const stars = document.getElementById(this.type);
      stars.setRating(this.value);
    });
    this.addEventListener("mouseenter", function () {
      //   setRating(currentRating !== null ? currentRating : null);
    });
    this.addEventListener("mouseleave", function () {
      //   setHover(null);
    });
  }

  disconnectedCallback() {
    //implementation
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //implementation
  }

  adoptedCallback() {
    //implementation
  }
}

window.customElements.define("star-rating", Star);
