const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const headerSearch = $('.header-main--search')
const searchModal = $('.search-container')
headerSearch.onclick = function() {
    searchModal.classList.toggle('open')
}
