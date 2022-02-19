'use strict'
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Header
{
    const navLink = $$('.header__nav-link')
    const line = $('.line-tabs')

    const handleHoverNavLink = (e) => {
        line.style.display = 'block'
        line.style.animation = 'fadeIn linear 0.3s'
        line.style.width = e.target.offsetWidth
        line.style.left = e.target.offsetLeft
    }
    navLink.forEach((e) => {
        e.addEventListener('mouseover', handleHoverNavLink)
})
}
//container
{ 
    const imgBigs = $$('.img-product-big')
    const imgThumbnails = $$('.img-product-thumbnail')

    // handle show img thumnail
    imgThumbnails.forEach(function (element, index) {
        const ElementmgBig = imgBigs[index]
        element.onclick = (e) => {
            $('.img-product-big.open').classList.remove('open')
            ElementmgBig.classList.add('open')
        }
    })

    const iconClose = $('.icon-close')
    const imgProductInner = $('.full-img-product')
    const innerImgs = $$('.inner-product-img')

    // handle open IMG full width
    imgBigs.forEach((imgBig, index) => {
        imgBig.onclick = (e) => {
            imgProductInner.style.display = 'flex'
            $('.inner-product-img.active').classList.remove('active')
            innerImgs[index].classList.add('active')
        }
    })
    // handle close
    iconClose.onclick = () => {
        imgProductInner.style.display = 'none'
    }

    const innerImgSlides = $$('.inner-img-slide')
    const btnPrevious = $('.icon-back')
    const btnNext = $('.icon-next')

    innerImgs.forEach((elm, index) => {
        // handle back
        btnPrevious.onclick = () => {
            if (index > 0) {
                $('.inner-product-img.active').classList.remove('active')
                innerImgs[--index].classList.add('active')
            }
        } 
        // handle next
        btnNext.onclick = () => {
            if (index < innerImgs.length - 1) {
                $('.inner-product-img.active').classList.remove('active')
                innerImgs[++index].classList.add('active')
            }
        }
    })
    // handle show img thumnail full width
    innerImgSlides.forEach((elm, index) => {
        elm.onclick = () => {
            $('.inner-product-img.active').classList.remove('active')
            innerImgs[index].classList.add('active')
        }
    })

    // handle minus and plus products
    const minusBtn = $('.quantily__minus')
    const quantilyNumber = $('.quantily__number')
    const plusBtn = $('.quantily__plus')

    const handleMinus = function() {
        quantilyNumber.innerText = quantilyNumber.innerText - 1
        if (quantilyNumber.innerText < 0) {
            minusBtn.onclick = () => false
            quantilyNumber.innerText = "0"
        }
    }
    const handlePlus = function () {
        quantilyNumber.innerText = ++quantilyNumber.innerText
    }
    minusBtn.addEventListener('click', handleMinus)
    plusBtn.addEventListener('click', handlePlus)

    // handle submit Add to cart
    const btnAddToCart = $('.quantily__btn')
    const notificationCarts = $('.header__right-cart__have-products')
    const emptyCart = $('.header__right-cart__no-product')
    const quanlityCartNumber = $('.quanlity-cart-number')
    const quanlityCartTotal = $('.header__right-cart-quanlity')
    const totalPriceProduct = $('.total-price-product')

    btnAddToCart.onclick = (e) => {
        if (quantilyNumber.innerText == 0) {
            e.preventDefault();
            notificationCarts.style.display = 'none'
            emptyCart.style.display = 'block'
        } else {
            //call API
            e.preventDefault();
            notificationCarts.style.display = 'block'
            emptyCart.style.display = 'none'
            quanlityCartNumber.innerText = 'x' + quantilyNumber.innerText
            quanlityCartTotal.innerText = quantilyNumber.innerText
            totalPriceProduct.innerText = '$' + (125 * quantilyNumber.innerText) + '.00'
            $('.cart__notification-btn').style.display = 'block'
            quantilyNumber.innerText = '0'
        }
    }
    // handle bin
    const bin = $('.cart__notification-content-bin')

    bin.onclick = (e) => {
        e.stopPropagation();
        notificationCarts.style.display = 'none'
        emptyCart.style.display = 'block'
    }
    
} //End Container