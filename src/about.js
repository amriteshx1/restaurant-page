
export function aboutPage(){

    let homePage = document.getElementById("content");

    const cnt = document.createElement('div');
    cnt.id = 'container3';
    homePage.appendChild(cnt);

    const subCnt = document.createElement('div');
    subCnt.id='subCnt';

    const img1 = document.createElement('img');
    img1.src = '../img/aboutImg.jpg';
    img1.alt = 'view of the restaurant';
    subCnt.appendChild(img1);

    const p1 = document.createElement('p');
    p1.className = 'p1';
    p1.textContent = '"Web-Restaurant started as a small cloud kitchen and has grown into a thriving establishment, committed to delivering quality food and exceptional service."';
    subCnt.appendChild(p1);

    cnt.appendChild(subCnt);

    const p2 = document.createElement('p');
    p2.className = 'p2';
    p2.textContent = 'Contact Us :';
    cnt.appendChild(p2);

    const p3 = document.createElement('p');
    p3.className = 'p3';
    p3.innerHTML = 'Web-Restaurant, 45 Culinary Lane, Foodie Town, 12345. <br> Mobile - 0019375582, 0019375583.';
    cnt.appendChild(p3);

}