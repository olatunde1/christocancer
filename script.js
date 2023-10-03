let clickHandler = document.getElementById('navMe');
let actionEL = document.getElementById('about');

clickHandler.addEventListener('click', function () {
    actionEL.scrollIntoView(true);
})