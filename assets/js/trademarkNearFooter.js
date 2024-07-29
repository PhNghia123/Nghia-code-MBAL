const trademarkNearFooters = $$('.trademark-picture')
for (const trademarkNearFooter of trademarkNearFooters) {
    trademarkNearFooter.onmouseenter  = function() {
        if (window.innerWidth >= 1024) {
            trademarkNearFooter.classList.add('active')
        }
    }
    trademarkNearFooter.onmouseleave  = function() {
        trademarkNearFooter.classList.remove('active')
    }
}
