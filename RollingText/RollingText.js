if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}

(function( window, document, undefined ) {

	"use strict";
	
	var Rolling = {

		init: function (element, list, options) {
			this.element = element;
			this.list = list;
			this.options = options;
			this.elementList = [];
			this.cursor = 0;
			this.timeout = 3;
			this.interval = null;
			this.boxWidth = null;
			this.boxHeight = null;

			this.setup();

			if (this.options.autoplay === true) {
				this.play();
			}

			return this
		},
		setup: function () {
			// setup parent element
			if(this.element.style.position === 'static' || this.element.style.position === '') {
				this.element.style.position = 'relative';
			}
			this.element.style.overflow = 'hidden';
			let rect = this.element.getBoundingClientRect()

			this.element.style.width = rect.width + 'px';
			this.element.style.height = rect.height + 'px';

			this.boxWidth = rect.width
			this.boxHeight = rect.height

			this.element.innerHTML = "";

			this.elementList = [];
			for (let i = 0; i < this.list.length; i++) {
				this.elementList[i] = document.createElement('div');
				this.elementList[i].innerHTML = this.list[i];
				this.elementList[i].classList.add('rolling-list-item');
			}
			this.cursor = 0;

			this.addElement(this.elementList[this.cursor],this.cursor)

		},
		play: async function () {
			return new Promise(async res=>{
				await this.startRoll();
				res()
			})
		},
		stop: function () {

		},
		startRoll: async function () {
			// 추가
			// 롤링
			// 지우기

			return new Promise(async (res,rej)=>{

				console.log(this.timeout * 1000)
				let count = 0

				this.interval = setInterval(_=>{
					this.rollOnce();
					count++;
					if (count >= this.elementList.length - 1) {
						clearInterval(this.interval)
					}

				}, this.timeout * 1000)

			})
			
		},
		addElement: function (inner,idx) {

			// 추가

			this.cursor = this.cursor < this.list.length ? this.cursor + 1 : 0;
			
			this.element.append(inner);
			inner.style.position = 'absolute';
			inner.style.width = this.boxWidth + 'px';
			inner.style.height = this.boxHeight + 'px';
			inner.style.top = this.boxHeight * idx + 'px';
			inner.style.transitionProperty = 'top';
			inner.style.transitionDuration = this.options.speed + 's';
		},
		rollOnce: function () {
			// 롤링
			this.addElement(this.elementList[this.cursor],this.cursor)
			
			return new Promise((res,rej)=>{

				for (var i = 0; i < this.element.children.length; i++) {
					console.log(this.element.children[i])
					let top = parseInt(this.element.children[i].style.top) - this.boxHeight;
					console.log(parseInt(this.element.children[i].style.top))
					this.element.children[i].style.top = top + 'px'
				}
				setTimeout(_=>{
					this.removePreElement()
					res()
				}, this.options.timeout * 1000)
			})
		},
		removePreElement: function () {
			console.log(this.cursor - 1)
			this.elementList[this.cursor - 1].remove()
		},
		stopRoll: function () {

		},

	};

	window.Rolling = function(element, list, options = {}) {
		var rolling = Object.create(Rolling);
		let opt = {
			autoplay: true,
			infinite: true,
			speed: 0.3,
			timeout: 3,
			beforeShow: function () {},
			afterShown: function () {},
			beforeHide: function () {},
			afterHidden: function () {}
		}
		console.log(rolling.init(element, list, opt))
		return this
	}

	window.Rolling.options = {
		autoplay: true,
		infinite: true,
		speed: 0.3,
		timeout: 3,
		beforeShow: function () {},
		afterShown: function () {},
		beforeHide: function () {},
		afterHidden: function () {}
	};

	// method chain
	// $.toast = function(options) {
	//     var toast = Object.create(Toast);
	//     toast.init(options, this);

	//     return {
			
	//         reset: function ( what ) {
	//             toast.reset( what );
	//         },

	//         update: function( options ) {
	//             toast.update( options );
	//         }
	//     }
	// };

})( window, document );