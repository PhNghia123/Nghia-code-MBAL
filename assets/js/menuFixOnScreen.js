const menu = $('.menu')
const onTop = $('.onTop')
const menuList = $('.menu-list')
const menuOpen = $('.menu-home-open')
const menuClose = $('.menu-home-close')
const main = $('.main')
menu.onclick = openMenuOnScreen

// bắt sự kiên click để đưa lên đầu trang web
onTop.onclick = function() {
    window.scrollTo(0, 0)
}
document.onscroll = function () {
    if (window.scrollY !== 0) {
        onTop.style.display = 'block'
    } else {
        onTop.style.display = 'none'
    }
}
window.onload = function() {
    window.scrollTo(0, 0);
}

//function
function openMenuOnScreen () {
    if (menuList.style.display === 'none') {
        menuList.style.display = 'flex'
        menuOpen.style.display = 'none'
        menuClose.style.display = 'block'
    } else {
        menuList.style.display = 'none'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
    }
}