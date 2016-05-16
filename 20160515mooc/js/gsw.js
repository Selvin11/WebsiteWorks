//原生JS
function addLoadEvent(func){
	var oldOnload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}else{
		window.onload = function(){
			if (oldOnload) {
				oldOnload();
			}
			func();
		}
	}
}
//mouseover && mouseout
// var leftList = document.getElementById('leftList');
// var lists = leftList.getElementsByTagName('li');
// for (var i = 0; i < lists.length; i++) {
// 	lists[i].id = i;
// 	lists[i].onmouseover = function () {
// 		var that = this;
// 		for (var j = 0; j < content.length; j++) {

// 			content[that.id].style.display = 'block';
// 		}
// 		that.onmouseout = function () {
// 			content[that.id].style.display = 'none';
// 		}
// 	}
// }
// window.onload = function(){
// 	var imgBox = document.getElementById("imgBox"),
// 		imgNum = document.getElementById("imgNum"),
// 		aLists = imgNum.getElementsByTagName('a');
// 		for (var i = 0; i < aLists.length; i++) {
// 			aLists.id = i;
// 			aLists[i].onclick = function () {
// 				aLists.className = '';
// 				imgBox.style.left =  - (this.id)*810 + 'px';
// 				this.className = 'active';
// 			};
// 		}
// }
$(function(){
	$("#imgNum a").each(function(){
		$(this).click(function(){
			$("#imgNum a").removeClass();
			$(this).addClass('active');
			$("#imgBox").css('left', - $(this).index()*810 + 'px');
		})
	})
	var timer = 0;
	var i = 0;
	timer = setInterval(changeImg,2000);
	function changeImg() {
		i++;
		if (i==2) {
			i=0;
		}
		$("#imgNum a").removeClass();
		$("#imgNum a").eq(i).addClass('active');
		$("#imgBox").css("left", -(i*810) + 'px');
		console.log(i);
	}
})















