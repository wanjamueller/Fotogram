function framesTemplate(i) {
    /*html*/ `
    <figure class="picture">
        <img id="pic${i}"  src="./assets/img/${myImages[i].file}" onclick="focusPicture(i)" alt="./assets/img/${myImages[i].alt}">;
        </figure>
    `;
}

function dialogTemplate(i) {
    /*html*/ `
    <div class="dialog">
        <header>
            <h2>${myImages[i].name}</h2>
            <button class="close" onclick="close.focusPicture()" ><img src="./assets/icon/close_x.png" alt="click X to close the popup"></button>
        </header>
        <img class="focus_picture" id="pic${i}" src="./assets/img/${myImages[i].file}" alt="./assets/img/${myImages[i].alt}" onclick="focusPicture(i)" >
        <footer class=picture_nav>
            <button onclick="prePic(${i})" ><img src="./assets/icons/arrow_left.png" alt="arrow left to previous picture"></button>
            <p>${myImages[i + 1]}/${myImages.length}</p>
            <button onclick="nextPic(${i})"><img src="./assets/icons/arrow_right.png" alt="arrow right to next picture"></button>
        </footer>
        </div>
    `;
}
