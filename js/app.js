// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const menuList = document.querySelector(".menu-navbar");

// btn1.addEventListener("click", (e) => {
//   menuList.style = "transform: translate(0)";
//   document.body.style = "overflow: hidden";
// });

// btn2.addEventListener("click", (e) => {
//   menuList.style = "transform: translate(-100%)";
// });


const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("menu-opened")
});

// DARKMOT ///////

let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


///  BACTOP   ////////////

window.addEventListener('scroll', function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById('backtop');
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.bottom = '20px';
    } else {
      backtop.style.bottom = '-50px';
    }
  }
