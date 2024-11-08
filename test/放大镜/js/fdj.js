var tabs = document.getElementsByClassName("btns")[0].getElementsByTagName("li");
var tabContents = document.getElementsByClassName("tab-contents")[0].getElementsByTagName("li");

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
        console.log(i, this, this.index, this.getAttribute("index"));

        // 规范的html属性可以使用 element.id  element.title className
        // 不规范的html属性 使用getAttribute获取

        // for (var j = 0; j < tabContents.length; j++) {
        //     tabContents[j].classList.remove("active");
        // }
        // tabContents[this.getAttribute("index")].classList.add("active");

        // 处理 contents
        for (var j = 0; j < tabContents.length; j++) {
            if (j == this.getAttribute("index")) {
                tabContents[j].classList.add("active");
            } else {
                tabContents[j].classList.remove("active");
            }
        }

        // 处理 tabs
        for (var j = 0; j < tabs.length; j++) {
            if (j == this.getAttribute("index")) {
                tabs[j].classList.add("active");
            } else {
                tabs[j].classList.remove("active");
            }
        }
    };
}

var stage = document.querySelector(".stage");
var mask = document.querySelector(".mask");
var preview = document.querySelector(".preview img");
stage.onmousemove = function (event) {
    var x = event.clientX - stage.offsetLeft;
    var y = event.clientY - stage.offsetTop;
    console.log(x, y);
    maskX = x - 100;
    maskY = y - 100;
    if (maskX < 0) {
        maskX = 0;
    }
    if (maskX > stage.offsetWidth - mask.offsetWidth) {
        maskX = stage.offsetWidth - mask.offsetWidth;
    }
    if (maskY < 0) {
        maskY = 0;
    }
    if (maskY > stage.offsetHeight - mask.offsetHeight) {
        maskY = stage.offsetHeight - mask.offsetHeight;
    }

    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";
    preview.style.left = -maskX * 2 + "px";
    preview.style.top = -maskY * 2 + "px";
};