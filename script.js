const box = document.getElementById('box');
document.onmousemove = (event) => {
    box.style.left = event.clientX - (box.clientWidth/2) + 'px'; 
    box.style.top  = event.clientY - (box.clientHeight/2)+ 'px';
}