let html = document.querySelector('html')
window.onload = function(){
    html.style.fontSize = `${100*window.innerWidth/520}px`
}

window.onresize = function(){
    html.style.fontSize = `${100*window.innerWidth/520}px`
}