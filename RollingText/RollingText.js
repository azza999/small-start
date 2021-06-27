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
			this.interval = null;
			this.boxWidth = null;
			this.boxHeight = null;

			this.setup();

			if (this.options.autoplay === true) {
				this.play();
			}
			
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
			this.cursor = -1;
			this.addNextElement();

		},
		play: function () {
			this.startRoll();
		},
		stop: function () {

		},
		startRoll: function () {
			let self = this
			setTimeout(function() {
				self.addNextElement();
				setTimeout(function() {
					self.rollOnce();
				}, 50)
				setTimeout(function() {
					self.removePreElement();
				}, self.options.speed*10000-1)
			}, this.options.speed*10000)
			
		},
		addNextElement: function () {
			this.cursor = this.cursor < this.list.length ? this.cursor + 1 : 0;
			
			this.element.append(this.elementList[this.cursor]);
			console.log(this.elementList[this.cursor]);
			this.elementList[this.cursor].style.position = 'absolute';
			this.elementList[this.cursor].style.width = this.boxWidth + 'px';
			this.elementList[this.cursor].style.height = this.boxHeight + 'px';
			this.elementList[this.cursor].style.top = this.boxHeight * this.cursor + 'px';
			this.elementList[this.cursor].style.transitionProperty = 'top';
			this.elementList[this.cursor].style.transitionDuration = this.options.speed + 's';
		},
		rollOnce: function () {
			for (var i = 0; i < this.element.children.length; i++) {
				let top = parseInt(this.element.children[i].style.top) || 0 - this.boxHeight;
				this.element.children[i].style.top = top + 'px'
			}
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
			beforeShow: function () {},
			afterShown: function () {},
			beforeHide: function () {},
			afterHidden: function () {}
		}
		rolling.init(element, list, opt)
	}

	window.Rolling.options = {
		autoplay: true,
		infinite: true,
		speed: 0.3,
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