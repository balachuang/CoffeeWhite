// Vue 3.0 with options-base style
const vm = Vue.createApp({
	data() {
		return {
            mainTitle: "咖啡小白的無腦記錄",
			powderWeight: 18, // 乾粉重 (g)
			pwRatio: 15,      // 粉水比, 15 表示分水比為 1:15
			blRatio: 2,       // 悶蒸 (bloom) 手量比, 2 表示為粉重的兩倍
			swRatio: 1.5,     // 一二段水量微調, 2 表示一二段水量比為 2:1
            menuArray: JSON.parse(JSON.stringify(coffeeMethods)),
		}
	},
	mounted: function () {
		$('#menu li:first').addClass('selected');
		$('div.cooking-method:first').addClass('selected');
		this.reCalculation();
		this.resizeTableCol();
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

			this.resizeTableCol();
		},
		onFocusInput(e) {
			$(e.srcElement).select();
		},
		reCalculation() {
			this.menuArray = JSON.parse(JSON.stringify(coffeeMethods));
			for (let i=0; i<this.menuArray.length; ++i) {
				let menu = this.menuArray[i];
				for (let j=0; j<menu.steps.length; ++j) {
					let waterStr = menu.steps[j].water;
					waterStr = waterStr.replace(/p/g, '' + this.powderWeight);
					waterStr = waterStr.replace(/r/g, '' + this.pwRatio);
					waterStr = waterStr.replace(/b/g, '' + this.blRatio);
					waterStr = waterStr.replace(/s/g, '' + this.swRatio);
					let waterNum = Math.round(eval(waterStr));

					this.menuArray[i].steps[j].water = waterNum;
					if (j == 0)
						this.menuArray[i].steps[j].totalWater = waterNum;
					else
						this.menuArray[i].steps[j].totalWater = this.menuArray[i].steps[j-1].totalWater + waterNum;
				}
			}
		},
		resizeTableCol() {
			let tableObj = $('div.selected table');
			let tbWidth = tableObj.width();
			let thObjs = tableObj.find('th');
			let th1Width = 0;
			for (var n=0; n<thObjs.length; ++n) {
				if (n == 0) th1Width = $(thObjs[n]).width();
				else {
					$(thObjs[n]).css('width', (tbWidth - th1Width) / thObjs.length);
				}
			};
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
		blRatio: function(val, oldVal) {
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
