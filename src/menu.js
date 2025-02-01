import fourM from "../img/fourMeal.webp";
import threeM from "../img/threeMeal.jpg";
import twoM from "../img/twoMeal.jpg";
import oneM from "../img/oneMeal.jpg";

export function menuPage(){

    let homePage = document.getElementById("content");

    const cnt = document.createElement('div');
    cnt.id = 'container2';
    homePage.appendChild(cnt);

    const mainP = document.createElement('p');
    mainP.id = 'menu';
    mainP.textContent = 'Savor the Flavors';
    cnt.appendChild(mainP);

    const boxC = document.createElement('div');
    boxC.className = 'boxContainer';
    cnt.appendChild(boxC);

    const boxData = [
    { imgSrc: fourM, altText: 'a platter of 4 person', title: 'Quadspread' },
    { imgSrc: threeM, altText: 'a platter of 3 person', title: 'Trioplate' },
    { imgSrc: twoM, altText: 'a platter of 2 person', title: 'Duofeast' },
    { imgSrc: oneM, altText: 'a platter of 1 person', title: 'Solomeal' },
    ];

    boxData.forEach(item => {
    const box = document.createElement('div');
    box.className = 'box';

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.altText;

    const p = document.createElement('p');
    p.className = 'p1p';
    p.textContent = item.title;

    const button = document.createElement('button');
    button.className = 'b2';
    button.textContent = 'Book Now';

    box.appendChild(img);
    box.appendChild(p);
    box.appendChild(button);
    boxC.appendChild(box);
    });

}