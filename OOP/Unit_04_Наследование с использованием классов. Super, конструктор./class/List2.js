class List2 extends List {
    constructor(arr, cssClass) {
        super(arr);
        this.cssClass = cssClass;
    }

    render() {
        let ul = super.render();
        ul.classList.add(this.cssClass);
        return ul;
    }
}
