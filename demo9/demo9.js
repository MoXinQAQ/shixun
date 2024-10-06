var bodys = document.querySelectorAll('.body_main > div');

bodys.forEach(function (body) {
    const titles = body.querySelectorAll('.righthref > span');
    const pages = body.querySelectorAll('.main > div');

    //默认显示页面1
    pages.forEach(function (page, index) {
        page.classList.remove('active');

        if (index === 0) {
            page.classList.add('active');
        }
    });

    titles.forEach((title,index)=>{
        title.addEventListener('mouseenter',()=>{
            pages.forEach(function (page){
                page.classList.remove('active');
            });
            pages[index].classList.add('active');
        });
    });
});









