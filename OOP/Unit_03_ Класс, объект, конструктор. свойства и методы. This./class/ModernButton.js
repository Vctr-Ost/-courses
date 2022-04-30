class ModernButton extends Button {
	constructor (width, height, background, value, borderRadius = 0) {
		super (width, height, background, value);
		this.borderRadius = borderRadius;
	}

	render() {
		let el = super.render();
		el.style.borderRadius = this.borderRadius + 'px';
		return el;
	}
}

let nBtn = new ModernButton(80,30,'blue','HI',10);
document.querySelector('body').append(nBtn.render());
