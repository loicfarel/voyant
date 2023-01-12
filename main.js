let boules = document.getElementsByClassName("boule");
document.onmousemove = function (e) {
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";
    for (let i = 0; i < 2; i++) {
        boules[i].style.left = x;
        boules[i].style.top = y;
        boules[i].style.transform = `translate(-${x},-${y})`;
    }
}
