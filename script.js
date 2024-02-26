document.addEventListener("mousemove", function (e) {
    let body = document.querySelector('body');
    let star = document.createElement(`span`);

    let size = Math.random() * 40;
    let transformVaue = Math.random() * 360;

    star.style.left = e.offsetX + 'px';
    star.style.top = e.offsetY + 'px';
    star.style.fontSize = -2 + size + `px`;
    star.style.transform = 'rotate(' + transformVaue + 'deg)';


    body.appendChild(star);

    setTimeout(function () {
        star.remove();
    }, 1000)
})