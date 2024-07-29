const commentOfPicture = [
    'Tìm các chương trình khuyến mãi mới nhất',
    'Đóng phí bảo hiểm',
    'Lên kế hoạch nghỉ hưu',
    'Chuẩn bị tương lai cho con',
    'Tìm sản phẩm bảo hiểm có yếu tố đầu tư'
]
const sliderPictures = [
    './assets/pic/slider/anh1.jpg',
    './assets/pic/slider/anh2.jpg'
]
const sliderPicture = $('.slider-picture')
const commentOfPictureList = $('.comment-of-picture-list')
const commentOfPictureBody = $('.comment-of-picture-body')
const btnSlideNext = $('.slider-move-right')
const btnSlidePre = $('.slider-move-left')
var indexPicture = 0
commentOfPictureBody.onclick = function(e) {
    commentOfPictureList.classList.toggle('open')
}
btnSlideNext.onclick = function() {
    indexPicture++;
    btnNext(indexPicture, sliderPictures)
}
btnSlidePre.onclick = function() {
    indexPicture--;
    btnPre(indexPicture, sliderPictures)
}
function start() {
    addElement(commentOfPicture, commentOfPictureList)
    nextPicture(indexPicture, sliderPictures)
}


start()

// function
function addElement(arr, element) {
    const html =  arr.map(function(curr) {
        return `
            <li class="comment-of-picture-item">
                <a href="#" class="comment-of-picture-link">
                    ${curr}
                    <i class="comment-of-picture-icon-2 fa-solid fa-arrow-right"></i>
                </a>
                
            </li>
        `
    })
    const result = html.join('')
    element.innerHTML = result
}

function nextPicture(a, arr) {
    setInterval(function() {
        a++
        btnNext(a, arr)
    }, 7000)
}

function btnNext (a, arr) {
    const slideBtn = a % (arr.length)
    outputPic(slideBtn, arr)
}
function btnPre (a, arr) {
    const slideBtn = Math.abs(a % (arr.length))
    outputPic(slideBtn, arr)
}

function outputPic(a, arr) {
    sliderPicture.style = `background-image: url(${arr[a]});`
}