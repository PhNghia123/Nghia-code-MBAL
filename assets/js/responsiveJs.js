if (window.innerWidth < 1311) {
    const hideLink1s = $$('.header-main--link:not(:last-child)')
    for (const hideLink1 of hideLink1s) {
        hideLink1.removeAttribute("href");
    }
}

const headerMainItem = $$('.header-main--item')
const headerMainLinks = $$('.header-main--link:not(:last-child)')
for (const headerMainLink of headerMainLinks) {
    headerMainLink.onclick = function () {
        const elementHeightHeader = headerMainLink.clientHeight
        if (headerMainLink.parentElement.clientHeight === elementHeightHeader) {
            const itemIndex =  headerMainLink.parentElement.children.length - 1
            headerMainLink.parentElement.children[itemIndex].style.display = 'block'
            headerMainLink.style.color = 'var(--primary-color)'
        }
        else {
            const itemIndex =  headerMainLink.parentElement.children.length - 1
            headerMainLink.style.color = 'var(--header-text-color)'
            headerMainLink.parentElement.children[itemIndex].style.display = 'none'
            //đóng toàn bộ menu cấp 2
            const productItemsHeadings = $$('.product-item-heading')
            for (const productItemsHeading of productItemsHeadings) {
                const itemIndex = productItemsHeading.parentElement.children.length - 1
                productItemsHeading.parentElement.children[itemIndex].style.display = 'none'
                productItemsHeading.style.color = 'var(--header-text-color)'
            }
        }
        const productItemsHeadings = $$('.product-item-heading')
        for (const productItemsHeading of productItemsHeadings) {
            const productItemHeight = productItemsHeading.clientHeight
            productItemsHeading.onclick = function () {
                if (productItemsHeading.parentElement.clientHeight === productItemHeight) {
                    const itemIndex = productItemsHeading.parentElement.children.length - 1
                    productItemsHeading.style.color = 'var(--primary-color)'
                    productItemsHeading.parentElement.children[itemIndex].style.display = 'unset'
                } else {
                    const itemIndex = productItemsHeading.parentElement.children.length - 1
                    productItemsHeading.parentElement.children[itemIndex].style.display = 'none'
                    productItemsHeading.style.color = 'var(--header-text-color)'
                }
            }
        }
    }
}

const headerMenuContent = $('.header-content')
const menuOpenHeader = $('.mobile-menu-header-open')
const menuCloseHeader = $('.mobile-menu-header-close')
const menuSearch = $('.mobile-menu-header-search')
menuOpenHeader.onclick = function () {
    headerMenuContent.style.display = 'flex'
    menuSearch.style.display = 'none'
    menuCloseHeader.style.display = 'block'
    menuOpenHeader.style.display = 'none'
}
menuCloseHeader.onclick = function () {
    menuSearch.style.display = 'unset'
    headerMenuContent.style.display = 'none'
    menuOpenHeader.style.display = 'unset'
    menuCloseHeader.style.display = 'none'
    for (const headerMainLink of headerMainLinks) {
        const itemIndex =  headerMainLink.parentElement.children.length - 1
        headerMainLink.style.color = 'var(--header-text-color)'
        headerMainLink.parentElement.children[itemIndex].style.display = 'none'
        //đóng toàn bộ menu cấp 2
        const productItemsHeadings = $$('.product-item-heading')
        for (const productItemsHeading of productItemsHeadings) {
            const itemIndex = productItemsHeading.parentElement.children.length - 1
            productItemsHeading.parentElement.children[itemIndex].style.display = 'none'
            productItemsHeading.style.color = 'var(--header-text-color)'
        }
    }
}
const menuSearchmodal = $('.search-container')
menuSearch.onclick = function() {
    if (menuSearchmodal.clientHeight === 0) {
        menuSearchmodal.style.display = 'flex'
    } else {
        menuSearchmodal.style.display = 'none'
    }
}
window.onscroll = function () {
    menuSearchmodal.style.display = 'none'
}

