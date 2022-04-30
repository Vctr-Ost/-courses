class List {
    constructor(arr) {
        this.item = arr;
    }

    render() {
        let elem = document.createElement('ul');
        this.item.forEach(text => {
            let li = document.createElement('li');
            li.textContent = text;
            elem.append(li);
        })
        return elem;
    }
}
