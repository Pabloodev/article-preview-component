const btn = document.querySelector('.arrow')
const share = document.querySelector('.content-share')

let isInvisible = false

btn.addEventListener('click', function() {
    
    if (isInvisible) {
        share.style.display = 'flex';
        isInvisible = false
    } else {
        share.style.display = 'none';
        isInvisible = true
    }
})