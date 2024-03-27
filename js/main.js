const cont = document.querySelectorAll('.cont');

// 탑버튼
const topScrollBtn = document.querySelector('.top_scroll_btn');


window.addEventListener('scroll',function(){
    if(this.scrollY >= cont[0].offsetHeight / 2){
        topScrollBtn.classList.add('top_scroll_btn_on');
    }else{
        topScrollBtn.classList.remove('top_scroll_btn_on');
    }

});

topScrollBtn.addEventListener('click',function(e){
    e.preventDefault()
    window.scrollTo({top : 0, behavior:'smooth'});

});