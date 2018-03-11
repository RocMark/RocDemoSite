if (typeof window.jQuery === 'undefined') {
    // alert('jQuery didn\'t loaded') //* CDN未裝
}
$(() => {
    $('.testTrigger').click(() => {
        $('.alertModalBox').fadeIn(500)
        $('.fullScreenFilter').fadeIn(300)
    })



})
