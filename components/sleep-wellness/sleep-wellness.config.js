module.exports ={
    context: {
        imageHeroBanner: [
            {
                id: 'heroMobile',
                className: 'img-fit fill-container d-md-none',
                url: '/public/images/1001_02_SoftBedding_1263.png',
                altText: 'Hero Img Mobile'
            },
            {
                id: 'heroTablet',
                className: 'img-fit fill-container d-none d-md-block d-lg-none',
                url: '/public/images/1001_02_SoftBedding_12632x.png',
                altText: 'Hero Img Tablet'
            },
            {
                id: 'heroDesktop',
                className: 'img-fit fill-container d-none d-lg-block',
                url: '/public/images/1001_02_SoftBedding_12632x.png',
                altText: 'Hero Img Desktop'
            }
        ],
        imageLogo: [
            {
                id: 'logoMobile',
                className: 'd-md-none',
                url: 'public/images/SW_logo.png',
                altText: 'Logo Mobile'
            },
            {
                id: 'logoTablet',
                className: 'd-none d-md-inline d-lg-none',
                url: 'public/images/SW_logo2x.png',
                altText: 'Logo Tablet'
            },
            {
                id: 'logoDesktop',
                className: 'd-none d-lg-inline',
                url: 'public/images/SW_logo3x.png',
                altText: 'Logo Desktop'
            }
        ],
        copyTextHeader: 'Better Sleep, Better Life',
        copyTextBody: 'No matter what kind of sleeper you are or maybe have on your gift list this year, we’ve created this guide to help you and your loved ones wake up on the right side of bed every day.'       
    }
}