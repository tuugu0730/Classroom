class ClassSection extends HTMLElement {
  constructor() {
    super();
    this.build = this.getAttribute("build");
    this.roomNo = this.getAttribute("roomNo");
    this.roomID = this.getAttribute("roomID");
    this.type = this.getAttribute("type");
    this.capac = this.getAttribute("cap");
    this.proj = this.getAttribute("proj");
  }
  Render() {
    const encodedData = encodeURIComponent(JSON.stringify(this));
    let i = Math.floor(Math.random() * 10000) + 1;
    const rating = 3; //  !will later fetch rating data from db using fetchget
    let ratingStars = [...Array(rating)]
      .map((star, index) => {
        const currentRating = index + 1;
        return `<span style="color: var(--color-primary)">
        &#9733;
        </span>`;
      })
      .reduce((prev, current) => prev + current);

    return `<a href="class.html?id=${encodedData}" class="class-section-1">
            <article>
              <img
                src="https://source.unsplash.com/random/400x250/?classroom,lesson&${i}"
                alt="classroom-picture"
                class="image"
              />
              <div class="text-wrapper">
                <div class="class-head-ttl">
                    <h3>
                    ${this.build} - 
                    ${this.roomNo}
                    </h3>
                  <btn-like roomId=${encodedData}></btn-like>
                </div>
                <div class="class-type">${this.type}</div>
                <div class="class-info">
                  <div class="seat-count">${this.capac}</div>
                  ${
                    this.proj === "Проектортой"
                      ? '<div class="projector proj-on"></div>'
                      : '<div class="projector proj-off"></div>'
                  }
                </div>
                <div> 
                ${ratingStars}
                </div>
              </div>
            </article>
          </a>
      `;
  }

  connectedCallback() {
    this.innerHTML = this.Render();
  }
}

window.customElements.define("class-section", ClassSection);
