
export function homePageMain(){

    let homePage = document.getElementById("content");
    const cnt = document.createElement('div');
    cnt.id = 'container1';

    const para = document.createElement('p');
    para.className = 'heading';
    para.textContent = 'Web-Restaurant';

    const subPara = document.createElement('p');
    subPara.className = 'details';
    subPara.textContent = 'Welcome to our prestigious restaurant where we serve our premium and authentic foods just at a click. Book your table now & Enjoy the best meal of your life!';

    const btn = document.createElement('button');
    btn.className = 'book';
    btn.textContent = 'Book Your Table';

    cnt.appendChild(para);
    cnt.appendChild(subPara);
    cnt.appendChild(btn);
    homePage.appendChild(cnt);
}