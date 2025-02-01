import { homePageMain } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

function clearPage(){
    const c = document.getElementById('content');
    c.innerHTML= '';
};

document.getElementById('homeBtn').addEventListener("click", () => {
    clearPage();
    homePageMain();
});

document.getElementById('menuBtn').addEventListener("click", () => {
    clearPage();
    menuPage();
});

document.getElementById('aboutBtn').addEventListener("click", () =>{
    clearPage();
    aboutPage();
})

homePageMain();
