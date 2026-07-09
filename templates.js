function framesTemplate(i) {
    return /*html*/ `
    <figure class="picture">
        <img id="pic${i}"  src="./assets/img/${myImages[i].file}" tabindex="0"  aria-controls= "image-dialog" onclick="focusPicture(${i})" onkeypress="focusPicture(${i})" alt="./assets/img/${myImages[i].alt}">;
        </figure>`;
}

function dialogTemplate(i) {
    return /*html*/ `<div aria-labelledby="dialogTitle" class="dialog">
        <header class="dialog-header">
            <h2 tabindex="0" aria-describedby="picture name" id="dialogTitle">${myImages[i].name}</h2>
            <div class="close"><button tabindex="0" aria-label="close dialog" class="close-button" onclick="closeFocus()" onkeypress="closeFocus()" ><img src="./assets/icons/close_x.png" alt="click X to close the popup"></button></div>
        </header>
            <figure class="focus-picture"><img class="picture-open" id="pic${i}" src="./assets/img/${myImages[i].file}" alt="./assets/img/${myImages[i].alt}" onclick="focusPicture(i)"></figure>
        <footer class="dialog-footer">
            <button tabindex="0" aria-label="next picture" onclick="prevPic(${i})" onkeypress="prevPic(${i})" ><img src="./assets/icons/arrow_left.png" alt="arrow left to previous picture"></button>
            <div><p>${i + 1}/${myImages.length}</p></div>
            <button tabindex="0" aria-label="previous picture" onclick="nextPic(${i})" onkeypress="nextPic(${i})"><img src="./assets/icons/arrow_right.png" alt="arrow right to next picture"></button>
</footer>
        </div>`;
}
