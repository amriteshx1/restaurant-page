let homePage = document.getElementById("content");

const cnt = document.createElement('div');
cnt.id = 'container';
homePage.appendChild(cnt);

const mainP = document.createElement('p');
mainP.id = 'menu';
mainP.textContent = 'Savor the Flavors';
cnt.appendChild(mainP);

const boxC = document.createElement('div');
boxC.className = 'boxContainer';
cnt.appendChild(boxC);

const boxData = [
    { imgSrc: '../4 person.jpeg', altText: 'a platter of 4 person', title: 'Quadspread' },
    { imgSrc: '../3person s.jpg', altText: 'a platter of 3 person', title: 'Trioplate' },
    { imgSrc: '../2 person s.jpg', altText: 'a platter of 2 person', title: 'Duofeast' },
    { imgSrc: '../1person.jpg', altText: 'a platter of 1 person', title: 'Solomeal' },
];

boxData.forEach(item => {
    const box = document.createElement('div');
    box.className = 'box';

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.altText;

    const p = document.createElement('p');
    p.className = 'p1';
    p.textContent = item.title;

    const button = document.createElement('button');
    button.className = 'b2';
    button.textContent = 'Book Now';

    box.appendChild(img);
    box.appendChild(p);
    box.appendChild(button);
    boxC.appendChild(box);
});