const getTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ?? "-- выберите --";

    const items = data.map((item) => {
        let cls = "";
        if (item.id === selectedId) {
            text = item.value;
            cls = "custom-select__item--selected";
        }
        return `
        <li class="custom-select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `;
    });

    return `
            <div class="custom-select__backdrop" data-type="backdrop"></div>
            <div class="custom-select__input" data-type="input">
                <span data-type="value">${text}</span>
                    <svg data-type="arrow" width="14" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M14 .667l-.333-.334L7 7 .333.333 0 .667l7 7 7-7z" fill="#444444"/></svg>
                  </svg>
                </div>
                <div class="custom-select__dropdown">
                  <ul class="custom-select__list">
                        ${items.join("")}
                  </ul>
                </div>
            `;
};

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.options = options;
        this.selectedId = options.selectedId;
        this.#render();
        this.#setup();
    }

    #render() {
        const { placeholder, data } = this.options;
        this.$el.classList.add("custom-select");
        this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener("click", this.clickHandler);
        this.$arrow = this.$el.querySelector('[data-type="arrow"]');
        this.$value = this.$el.querySelector('[data-type="value"]');
    }

    clickHandler(event) {
        const { type } = event.target.dataset;
        if (type === "input") {
            this.toggle();
        } else if (type === "item") {
            const id = event.target.dataset.id;
            this.select(id);
        } else if (type === "backdrop") {
            this.close();
        }
    }

    get isOpen() {
        return this.$el.classList.contains("custom-select--open");
    }

    get current() {
        return this.options.data.find((item) => item.id === this.selectedId);
    }

    select(id) {
        this.selectedId = id;
        this.$value.textContent = this.current.value;
        this.$el.querySelectorAll('[data-type="item"]').forEach((el) => {
            el.classList.remove("custom-select__item--selected");
        });
        this.$el
            .querySelector(`[data-id="${id}"]`)
            .classList.add("custom-select__item--selected");
        this.options.onSelect ? this.options.onSelect(this.current) : null
        this.close();
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.$el.classList.add("custom-select--open");
        this.$arrow.style.transition = ".2s";
        this.$arrow.style.transform = "rotate(180deg)";
    }

    close() {
        this.$el.classList.remove("custom-select--open");
        this.$arrow.style.transform = "rotate(360deg)";
    }

    destroy() {
        this.$el.removeEventListener("click", this.clickHandler);
        this.$el.innerHTML = "";
    }
}
