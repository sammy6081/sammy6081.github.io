const time = document.getElementById('time');

const btns = document.querySelectorAll('.btn');
const colors = document.querySelector('.clr-selector-btn');
const skins = document.querySelectorAll('.img');


const features = document.querySelector('.features');
const watchContents = document.querySelectorAll('.watch-content');
const contentBtns = document.querySelectorAll('.time');
features.addEventListener('click', function(e){
    const id = e.target.dataset.id
    if(id){
        // remove other active btn
        contentBtns.forEach(function(contentBtn){
        contentBtn.classList.remove('active');
        e.target.classList.add('active');
    });
    // hide other articles
    watchContents.forEach(function(watchContent){
        watchContent.classList.remove('active')
    });
    const element = document.getElementById(id)
    element.classList.add('active')
    }
});

colors.addEventListener('click', function(e){
    const id = e.target.dataset.id
    if(id){
        // remove other active btn
        btns.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    // hide other articles
    skins.forEach(function(skin){
        skin.classList.remove('active')
    });
    const element = document.getElementById(id)
    element.classList.add('active')
    }
});

setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toTimeString().substring(0, 8);
}, 1000);