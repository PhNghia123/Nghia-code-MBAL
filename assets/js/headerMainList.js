const payFees = [
    'Cổng thanh toán trực tiếp',
    'Hướng dẫn đóng phí bảo hiểm',
    'Hành trình thông báo đóng phí bảo hiểm'
]
const services = [
    'Thay đổi thông tin hợp đồng',
    'Yêu cầu giải quyết quyền lợi bảo hiểm',
    'Câu hỏi thường gặp'
]

const aboutOur = [
    'Khởi nguồn',
    'Đội ngũ',
    'Gương mặt tư vấn viên xuất sắc',
    'Báo cáo tài chính',
    'Chiến dịch thương hiệu',
    'Hoạt động vì cộng đồng',
    'Góc báo chí',
    'Thông tin quỹ và lãi suất',
    'Câu chuyện khách hàng'
]
const join = [
    'Tuyển dụng',
    'Văn hóa doanh nghiệp',
    'Đăng ký trở thành đại lý',
    'Tuyển dụng Banca'
]
const payModal = $('.pay-modal')
const servicesModal = $('.services-modal')
const abourOurModal = $('.aboutOur-modal')
const joinModal = $('.join-modal')

function start() {
    addElement(payFees, payModal)
    addElement(services, servicesModal)
    addElement(aboutOur, abourOurModal)
    addElement(join, joinModal)
}

start();

// function
function addElement(arr, element) {
   const html =  arr.map(function(curr) {
        return `
            <li class="header-main-2">
                <a href="#" class="header-main-2-link">
                    ${curr}
                </a>
            </li>
        `
    })
    const result = html.join('')
    element.innerHTML = result
}


