

//所有sponsor共用的區塊
const sponsor_logo = document.querySelector(".sponsor_logo");
//共用的兩個圓圈，沒編號是大園，有編號是小圓
const sponsor_Shape = document.querySelector(".sponsor_Shape");
const sponsor_Shape_2 = document.querySelector(".sponsor_Shape_2");


//定義各sponsor的logo圖區域與簡介區
//第一個
const logo_01 = document.querySelector("#logo_01");
const intro_01 = document.querySelector("#intro_01");
//第二個
const logo_02 = document.querySelector("#logo_02");
const intro_02 = document.querySelector("#intro_02");
//第三個
const logo_03 = document.querySelector("#logo_03");
const intro_03 = document.querySelector("#intro_03");
//第四個
const logo_04 = document.querySelector("#logo_04");
const intro_04 = document.querySelector("#intro_04");


//判斷是否已經被打開用的變數
var shape_open = false;
var intro_01_open = false;
var intro_02_open = false;
var intro_03_open = false;
var intro_04_open = false;



//function彙整
//滑上logo_01時
function on_logo_01() {
  //改變第一個圓transition設定 (可以進出有不同元素效果或速度)
  sponsor_Shape.style.transition = "clip-path 1s cubic-bezier(.34,.33,.44,.99)";
  //透明度1，可以開始被看到
  sponsor_Shape.style.opacity = "1";
  //同上transition設定，第二個圓
  sponsor_Shape_2.style.transition = "clip-path 1.2s cubic-bezier(.34,.33,.44,.99)";
  //透明度1，可以開始被看到
  sponsor_Shape_2.style.opacity = "1";
  //第一個圓加上open屬性
  sponsor_Shape.classList.toggle("open");
  //設定延遲0.01秒後，執行"一次"大括弧{}中的行為
  setTimeout(function () {
    //第二個圓加上open屬性
    sponsor_Shape_2.classList.toggle("open");
  }, 10);
}
//滑出logo_01時
function logo_01_close() {
  //改變第一個圓transition設定 (可以進出有不同元素效果或速度)
  sponsor_Shape.style.transition = "opacity 0.5s ease-in-out"
  //透明度0，漸漸看不到
  sponsor_Shape.style.opacity = "0";
  //同上transition設定，第二個圓
  sponsor_Shape_2.style.transition = "opacity 0.5s ease-in-out"
  //透明度0，漸漸看不到
  sponsor_Shape_2.style.opacity = "0";
  //設定延遲1秒後，執行"一次"大括弧{}中的行為
  setTimeout(function () {
    //第一個圓移去open屬性
    sponsor_Shape.classList.toggle("open")
    //第二個圓移去open屬性
    sponsor_Shape_2.classList.toggle("open")
  }, 1000);
}

//intro淡入 functions
function intro_01_fadein() {
  intro_01.style.transition = "opacity 1s cubic-bezier(.57, -0.37, .23, .98) 0.75s";
  intro_01.style.opacity = "1";
  intro_01.style.zIndex = "10";
}
function intro_02_fadein() {
  intro_02.style.transition = "opacity 1s cubic-bezier(.57, -0.37, .23, .98) 0.75s";
  intro_02.style.opacity = "1";
  intro_02.style.zIndex = "10";
}
function intro_03_fadein() {
  intro_03.style.transition = "opacity 1s cubic-bezier(.57, -0.37, .23, .98) 0.75s";
  intro_03.style.opacity = "1";
  intro_03.style.zIndex = "10";
}
function intro_04_fadein() {
  intro_04.style.transition = "opacity 1s cubic-bezier(.57, -0.37, .23, .98) 0.75s";
  intro_04.style.opacity = "1";
  intro_04.style.zIndex = "10";
}


//intro淡出 functions
function intro_01_fadeout() {
  intro_01.style.transition = "opacity 0.5s cubic-bezier(.57, -0.37, .23, .98) 0s";
  intro_01.style.opacity = "0";
  intro_01.style.zIndex = "9";
}
function intro_02_fadeout() {
  intro_02.style.transition = "opacity 0.5s cubic-bezier(.57, -0.37, .23, .98) 0s";
  intro_02.style.opacity = "0";
  intro_02.style.zIndex = "9";
}
function intro_03_fadeout() {
  intro_03.style.transition = "opacity 0.5s cubic-bezier(.57, -0.37, .23, .98) 0s";
  intro_03.style.opacity = "0";
  intro_03.style.zIndex = "9";
}
function intro_04_fadeout() {
  intro_04.style.transition = "opacity 0.5s cubic-bezier(.57, -0.37, .23, .98) 0s";
  intro_04.style.opacity = "0";
  intro_04.style.zIndex = "9";
}

//以下事件監聽器彙整
//logo_01滑鼠點擊偵測器
logo_01.addEventListener("click", function () {
  if (shape_open == true && intro_01_open == true) {
    //關閉圓形及文字的function
    logo_01_close();
    intro_01_fadeout();
    setTimeout(function () {
      shape_open = false;
      intro_01_open = false;
    }, 100);
  }
  if (shape_open == false) {
    //打開共用圖型的function
    on_logo_01();
    shape_open = true;
  }
  if (intro_01_open == false) {
    //關閉其他intro(寫func)
    intro_02_fadeout();
    intro_03_fadeout();
    intro_04_fadeout();
    intro_02_open = false;
    intro_03_open = false;
    intro_04_open = false;
    //改變第一個intro動態設定 (可以進出有不同元素效果或速度)
    intro_01_fadein();
    intro_01_open = true;
  }
});
//logo_02滑鼠點擊偵測器
logo_02.addEventListener("click", function () {
  if (shape_open == true && intro_02_open == true) {
    logo_01_close();
    intro_02_fadeout();
    setTimeout(function () {
      shape_open = false;
      intro_02_open = false;
    }, 100);
  }
  if (shape_open == false) {
    on_logo_01();
    shape_open = true;
  }
  if (intro_02_open == false) {
    intro_01_fadeout();
    intro_03_fadeout();
    intro_04_fadeout();
    intro_01_open = false;
    intro_03_open = false;
    intro_04_open = false;
    intro_02_fadein();
    intro_02_open = true;
  }
});
//logo_03滑鼠點擊偵測器
logo_03.addEventListener("click", function () {
  if (shape_open == true && intro_03_open == true) {
    logo_01_close();
    intro_03_fadeout();
    setTimeout(function () {
      shape_open = false;
      intro_03_open = false;
    }, 100);
  }
  if (shape_open == false) {
    on_logo_01();
    shape_open = true;
  }
  if (intro_03_open == false) {
    intro_01_fadeout();
    intro_02_fadeout();
    intro_04_fadeout();
    intro_02_open = false;
    intro_01_open = false;
    intro_04_open = false;
    intro_03_fadein();
    intro_03_open = true;
  }
});
//logo_04滑鼠點擊偵測器
logo_04.addEventListener("click", function () {
  if (shape_open == true && intro_04_open == true) {
    logo_01_close();
    intro_04_fadeout();
    setTimeout(function () {
      shape_open = false;
      intro_04_open = false;
    }, 100);
  }
  if (shape_open == false) {
    on_logo_01();
    shape_open = true;
  }
  if (intro_04_open == false) {
    intro_01_fadeout();
    intro_02_fadeout();
    intro_03_fadeout();
    intro_02_open = false;
    intro_03_open = false;
    intro_01_open = false;
    intro_04_fadein();
    intro_04_open = true;
  }
});

//web ))) motion
// Wrap every letter in a span

var textWrapper_01 = document.querySelector('.web_link_01');
var textWrapper_02 = document.querySelector('.web_link_02');
var textWrapper_03 = document.querySelector('.web_link_03');
var textWrapper_04 = document.querySelector('.web_link_04');

textWrapper_01.innerHTML = textWrapper_01.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper_02.innerHTML = textWrapper_02.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper_03.innerHTML = textWrapper_03.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper_04.innerHTML = textWrapper_04.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.web_link_01 .letter',
    translateX: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 500 + 100 * i
  }).add({
    targets: '.web_link_01 .letter',
    translateX: [0, 0],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 500,
    delay: (el, i) => 100 + 60 * i
  });

anime.timeline({ loop: true })
  .add({
    targets: '.web_link_02 .letter',
    translateX: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 500 + 100 * i
  }).add({
    targets: '.web_link_02 .letter',
    translateX: [0, 0],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 500,
    delay: (el, i) => 100 + 60 * i
  });

  anime.timeline({ loop: true })
  .add({
    targets: '.web_link_03 .letter',
    translateX: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 500 + 100 * i
  }).add({
    targets: '.web_link_03 .letter',
    translateX: [0, 0],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 500,
    delay: (el, i) => 100 + 60 * i
  });

  anime.timeline({ loop: true })
  .add({
    targets: '.web_link_04 .letter',
    translateX: [50, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 500 + 100 * i
  }).add({
    targets: '.web_link_04 .letter',
    translateX: [0, 0],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 500,
    delay: (el, i) => 100 + 60 * i
  });

