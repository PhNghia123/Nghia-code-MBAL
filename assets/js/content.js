const contentProducts = [
    {
        name: 'Quẳng gánh âu lo',
        insur: 'Sản phẩm chính',
        note: 'Bỏ lại đằng sau những lo âu ngăn cản Bạn lập kế hoạch tài chính chủ động, với Sản phẩm bảo hiểm liên kết chung Quẳng Gánh Âu Lo, Bạn sẽ được lựa chọn Thời hạn đóng phí linh hoạt mà vẫn đảm bảo các quyền lợi bảo vệ giúp Bạn giải tỏa mọi lo lắng.',
        image: './assets/pic/content/product/1.jpg'
    },
    {
        name: 'Vững tương lai',
        insur: 'Sản phẩm chính',
        note: 'Là sản phẩm bảo hiểm nhân thọ Liên kết chung trọn đời, dễ dàng thiết kế linh hoạt theo nhu cầu của bạn, giúp Bạn đạt được mục tiêu nhanh chóng tại mỗi giai đoạn trong cuộc sống.',
        image: './assets/pic/content/product/2.png'
    },
    {
        name: 'Bảo vệ toàn diện',
        insur: 'Bảo hiểm tai nạn',
        note: 'Bảo vệ bạn trước rủi ro để tận hưởng hạnh phúc trọn vẹn',
        image: './assets/pic/content/product/3.png'
    },
    {
        name: 'Ung dung sống trọn',
        insur: 'Bảo hiểm ung thư',
        note: 'Là sản phẩm bảo hiểm có thể giúp Bạn có thể an tâm, vô lo trước rủi ro bệnh ung thư',
        image: './assets/pic/content/product/4.jpg'
    },
]

const contentInfo = [
    {
        img: './assets/pic/content/ThongTinKhachHang/1.png',
        heading: 'Giải quyết quyền lợi Bảo hiểm',
        note: 'Cách thức nhanh chóng để yêu cầu Giải quyêt quyền lợi bảo hiểm'
    },
    {
        img: './assets/pic/content/ThongTinKhachHang/2.png',
        heading: 'Thay đổi thông tin hợp đồng',
        note: 'Cách thức liên hệ với chúng tôi để yêu cầu thay đổi thông tin trên Hợp đồng Bảo hiểm'
    },
    {
        img: './assets/pic/content/ThongTinKhachHang/3.png',
        heading: 'Phương thức đóng phí',
        note: 'Hướng dẫn hình thức thanh toán bằng tiền mặt hoặc trực tuyến'
    },
]
const contentBody = $('.content-body');
const content2Body = $('.content-2-body')
function start() {
    addElementContent1(contentProducts, contentBody)
    addElementContent2(contentInfo, content2Body)
}

start()
// function
function addElementContent1(arr, element) {
    const html =  arr.map(function(curr) {
        return `
            <div class="content-bodyDiv col l-6 m-6 c-12">
                <a href="#" class="content-bodyPic set-bgr-content" style="background-image: linear-gradient(0, rgba(18, 58, 87, 0.79), rgba(237, 251, 254, 0.1)), url(${curr.image});">
                    <div class="content-body-header">
                        <h3 class="content-body-header-product">${curr.insur}</h3>
                        <h4 class="content-body-header-product-name">${curr.name}</h4>
                        <p class="content-body-body-para">
                            ${curr.note}
                        </p>
                    </div>
                    <div class="content-body-body">
                        <i class="content-body-body-icon fa-solid fa-circle-arrow-right"></i>
                    </div>
                </a>
            </div>
        `
    })
    const result = html.join('')
    element.innerHTML = result
}

function addElementContent2(arr, element) {
    const html =  arr.map(function(curr) {
        return `
            <a href="#" class="information-item col l-4 m-12 c-12">
                <img src="${curr.img}" alt="" class="information-item-img">
                <div class="information-item-body">
                    <h3 class="information-item-heading">${curr.heading}</h3>
                    <p class="information-item-content">${curr.note}</p>
                </div>
                <span class="information-item-see-more" href="#">
                    Tìm hiểu thêm
                    <i class="information-item-see-more-icon fa-solid fa-circle-arrow-right"></i>
                </span>
            </a>
        `
    })
    const result = html.join('')
    element.innerHTML = result
}



// xử lý khi hover vào thêm class active
const contentBodyWPictures =  contentBody.children
for (const contentBodyWPicture of contentBodyWPictures) {
    const thisContentWithPics = contentBodyWPicture.children
    for (const thisContentWithPic of thisContentWithPics) {
        thisContentWithPic.onmouseenter = function() {
            if (window.innerWidth >= 1024) {
                contentBodyWPicture.classList.add('content-1-active')
            }
        }
    }
}

for (const contentBodyWPicture of contentBodyWPictures) {
    const thisContentWithPics = contentBodyWPicture.children
    for (const thisContentWithPic of thisContentWithPics) {
        thisContentWithPic.onmouseleave = function() {
            contentBodyWPicture.classList.remove('content-1-active')
        }
    }
    
}


 
 
 
