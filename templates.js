function framesTemplate(i) {
    return /*html*/ `
    <figure class="picture">
        <img id="pic${i}"  src="./assets/img/${myImages[i].file}" onclick="focusPicture(${i})" alt="./assets/img/${myImages[i].alt}">;
        </figure>
    `;
}

function dialogTemplate(i) {
    return /*html*/ `
    <div class="dialog">
        <header class="dialog-header">
            <h2>${myImages[i].name}</h2>
            <div class="close">
            <button class="close-button" onclick="close.focusPicture()" ><img src="./assets/icons/close_x.png" alt="click X to close the popup"></button>
            </div>
        </header>
            <figure class="focus-picture"> 
                <img class="picture-open" id="pic${i}" src="./assets/img/${myImages[i].file}" alt="./assets/img/${myImages[i].alt}" onclick="focusPicture(i)"> 
            </figure>
        <nav>
            <button onclick="prevPic(${i})" ><img src="./assets/icons/arrow_left.png" alt="arrow left to previous picture"></button>
            <p>${i + 1}/${myImages.length}</p>
            <button onclick="nextPic(${i})"><img src="./assets/icons/arrow_right.png" alt="arrow right to next picture"></button>
        </nav>
        </div>
    `;
}
