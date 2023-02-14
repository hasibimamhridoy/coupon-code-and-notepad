function display(displayID){
    const showDisplayId = document.getElementById(displayID)
    const showDisplay = parseInt(showDisplayId.innerText)
    return showDisplay
}


// const mainMoney = document.getElementById('main-money')
const discountPriceDisplayIDDD = document.getElementById('discount-price-display')
const discountPriceDisplay = display('discount-price-display')
const finalPriceDisplay = document.getElementById('final-price-display')
const applyCBtn = document.getElementById('apply-c-btn')
const discountDisplay = document.getElementById('discount-display')
const putDiscountAmount = 10;
const putNewDiscount = 20;

applyCBtn.addEventListener('click',function(event){
    event.preventDefault()
    
    const getUserCoupon = document.getElementById('input-coupon')
    const getUserCouponValue = getUserCoupon.value
    const setMyCouponCodeIs = "h"
    const newDiscount = "hasib"
    const mainMoneyDisplay = display('main-money')
  

    if(getUserCouponValue == setMyCouponCodeIs ){

        const discountPrice = (mainMoneyDisplay/100)*putDiscountAmount
    

        const finalPrice = mainMoneyDisplay-discountPrice
        discountPriceDisplayIDDD.innerText=discountPrice
        finalPriceDisplay.innerText=finalPrice

        const modalMessage = document.createElement('p')
        modalMessage.innerText = 'You have got '+putDiscountAmount +'% of discount'
        discountDisplay.appendChild(modalMessage)
        getUserCoupon.value=''


        

    }

    else if(getUserCouponValue==newDiscount){
        
            const displayFPrice = display('final-price-display')
            const myNewCoupon = (displayFPrice/100)*putDiscountAmount
            const finalPrice =displayFPrice - myNewCoupon
            const previousDiscountPriceDisplay = display('discount-price-display')
            discountPriceDisplayIDDD.innerText=previousDiscountPriceDisplay+myNewCoupon
            finalPriceDisplay.innerText=finalPrice
            const modalMessage = document.createElement('p')
            modalMessage.innerText = 'You have got again '+putDiscountAmount +'% of discount'
        discountDisplay.appendChild(modalMessage)
        getUserCoupon.value=''
        
            
           
        }
    

    else{
        alert('Please Valid Coupon code')
    }

})
