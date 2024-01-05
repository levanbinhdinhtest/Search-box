let btnSearch = document.querySelector('.btn-search');

btnSearch.addEventListener('click',function(){
    //this chinh la button dang click
    this.parentElement.classList.toggle('open');

    //lay emlent phia truoc this la cho che do focus khi click
    this.previousElementSibling.focus();
    console.log(this.parentElement)
    
});