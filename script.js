// #region link HTML

const containerRef = document.getElementById("container");
const dialogRef = document.getElementById("image-dialog");

// #endregion link HTML

// #region functions

function renderPictures(i) {
    containerRef.innerHTML = "";
    for (let i = 0; i < myImages.length; i++) {
        const frames = myImages[i];
        containerRef.innerHTML += framesTemplate(i);
    }
}

function focusPicture(i) {
    showModal(i);
    dialogRef.classList.add("open");
    dialogRef.showModal();
}

function showModal(i) {
    dialogRef.innerHTML = "";
    dialogRef.innerHTML += dialogTemplate(i);
}

function nextPic(i) {
    if (i == myImages.length - 1) i = -1;
    return showModal(i + 1);
}

function prevPic(i) {
    if (i == 0) i = myImages.length;
    return showModal(i - 1);
}

function closeFocus() {
    dialogRef.close();
    dialogRef.classList.remove("open");
}

function eventListeners() {
    dialogRef.addEventListener("click", (event) => {
        if (event.target === dialogRef) {
            closeFocus();
        }
    });

    dialogRef.addEventListener("keydown", (esc) => {
        if (esc.key === "Escape") {
            closeFocus();
        }
    });
}

function eventBubblingPrevention(event) {
    event.stopPropagation();
}

function init() {
    renderPictures();
    eventListeners();
}

// #endregion functions
