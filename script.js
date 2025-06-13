const root = document.documentElement;
const logoImg = document.querySelector(".logo")
const themeBtn = document.querySelector(".themebtn")
themeBtn.addEventListener("click", themeChange)
let themeState = 0

function themeChange() {
  const isDark = !themeState;
  root.style.setProperty('--clr', isDark ? 'white' : 'black');
  root.style.setProperty('--bg', isDark ? 'black' : 'white');
  root.style.setProperty('--ftr', isDark ? 'invert(1)' : 'none');
  logoImg.setAttribute('src', isDark ? './dark-logo.png' : './logo.png');
  themeBtn.innerHTML = `<span class="material-icons">${isDark ? 'light_mode' : 'dark_mode'}</span>`;
  themeState = isDark ? 1 : 0;
}

const main = document.querySelector(".main")
const cur = document.querySelector(".cur")




main.addEventListener("mousemove", (e) => {
  cur.style.left = `${e.clientX - 20}px`;
  cur.style.top = `${e.clientY - 20}px`;
});

const menubtn = document.querySelector(".menu-icon")
const menuBar = document.querySelector(".menu-bar")
let state = 0
menubtn.addEventListener("click", () => {
  if(!state){
    menuBar.style.display="flex"
    menubtn.innerHTML=`<span class="material-icons">close</span>`
    state = 1
    
  }else{
    menubtn.innerHTML=`<span class="material-icons">menu</span>`
    menuBar.style.display="none"
    state = 0
  }
})
menuBar.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menuBar.style.display = "none";
    menubtn.innerHTML = `<span class="material-icons">menu</span>`;
    state = 0;
  }
})
