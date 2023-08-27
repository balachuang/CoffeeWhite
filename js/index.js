// Vue 3.0 with options-base style
const vm = Vue.createApp({
	data() {
		return {
            mainTitle: "咖啡小白的無腦記錄",
			powderWeight: 18, // 乾粉重 (g)
			pwRatio: 15,      // 粉水比, 15 表示分水比為 1:15
			swRatio: 1.5,       // 一二段水量微調, 2 表示一二段水量比為 2:1
            menuArray: JSON.parse(JSON.stringify(coffeeMethods)),
		}
	},
	mounted: function () {
		$('#menu li:first').addClass('selected');
		$('div.cooking-method:first').addClass('selected');
		this.reCalculation();
	},
	methods: {
		onClickMenu(e) {
			$('#menu li').removeClass('selected');
			$('div.cooking-method').removeClass('selected');

			let selectObj = $(e.srcElement);
			let methName = $(e.srcElement).text();
			let methObj = $('div.cooking-method-title:contains("' + methName + '")');
			selectObj.closest('li').addClass('selected');
			methObj.closest('div.cooking-method').addClass('selected');
		},
		onFocusInput(e) {
			$(e.srcElement).select();
		},
		reCalculation() {
			this.menuArray = JSON.parse(JSON.stringify(coffeeMethods));
			for (let i=0; i<this.menuArray.length; ++i) {
				let menu = this.menuArray[i];
				for (let j=0; j<menu.steps.length; ++j) {
					let water = menu.steps[j].water;
					while(true) {
						let repStrs = water.match(/\{.*\}/g);
						if (repStrs == null) break;

						for (let k=0; k<repStrs.length; ++k) {
							let trgStr = repStrs[k];
							trgStr = trgStr.substring(1, trgStr.length-1);
							trgStr = trgStr.replace(/p/g, '' + this.powderWeight);
							trgStr = trgStr.replace(/r/g, '' + this.pwRatio);
							trgStr = trgStr.replace(/s/g, '' + this.swRatio);

							water = water.replace(repStrs[k], '' + eval(trgStr));
						}
					}
					this.menuArray[i].steps[j].water = water;
				}
			}
		}
	},
	watch: {
		powderWeight: function(val, oldVal) {
			this.value = val;
			this.oldValue = oldVal;
			this.reCalculation();
		},
		pwRatio: function(val, oldVal) {
			this.value = val;
			this.oldValue = oldVal;
			this.reCalculation();
		},
		swRatio: function(val, oldVal) {
			this.value = val;
			this.oldValue = oldVal;
			this.reCalculation();
		}
	}
}).mount('#coffee-main');
