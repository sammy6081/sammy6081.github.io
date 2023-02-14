
const asideSection = document.querySelector('.aside-section');
const toggleBtn1 = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.toggle-btn-2');
const scrolls = document.querySelectorAll('.scroll');
const mainCon = document.querySelector('.main-con');
const cardsCon = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');

toggleBtn1.addEventListener('click', function(){
    asideSection.classList.toggle('show-aside');
});
closeBtn.addEventListener('click', function(){
    asideSection.classList.toggle('show-aside');
});

for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', () => {
        cards.classList.toggle('card-alt-style')
    });
}

