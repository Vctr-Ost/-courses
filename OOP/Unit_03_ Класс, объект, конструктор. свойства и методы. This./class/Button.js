class Button {
    constructor (width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        let el = document.createElement('button');
        el.style.background = this.background;
        el.style.width = this.width + 'px';
        el.style.height = this.height + 'px';
        el.textContent = this.value;
        return el;
    }
}

let newElem = new Button(40, 50, 'green', '50');
document.querySelector('body').append(newElem.render());
