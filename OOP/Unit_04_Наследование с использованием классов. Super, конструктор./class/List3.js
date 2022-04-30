class List3 extends List {
    constructor(arr, cssClass) {
        super(arr);
        this.cssClass = cssClass;
    }

    render() {
        let elem = super.render();
        this.cssClass.forEach(char => {
            elem.classList.add(char);
        })
        return elem;
    }
}
