// #region Images

let myImages = [
    {
        alt: "Paper speech bubble reading 'FOOL!' taped to a red corrugated metal shutter",
        file: "atanaspaskalev-fool.jpg",
        name: "atanaspaskalev-fool",
    },
    {
        alt: "Snow-covered rolling hills at sunset with dramatic clouds and a low sun",
        file: "edyttka1388-winter-2.jpg",
        name: "edyttka1388-winter-2",
    },
    {
        alt: "Snow-covered field and hills backlit by a bright sun near the horizon",
        file: "edyttka1388-winter.jpg",
        name: "edyttka1388-winter",
    },
    {
        alt: "Close-up of a weathered blue wooden edge with peeling paint and exposed, splintered wood",
        file: "engin_akyurt-blue.jpg",
        name: "engin_akyurt-blue",
    },
    {
        alt: "Close-up of rough grey stacked stones forming a wall",
        file: "engin_akyurt-stone.jpg",
        name: "engin_akyurt-stone",
    },
    {
        alt: "Close-up of rough grey stacked stones forming a wall",
        file: "freeimagesguide-rock-wall.jpg",
        name: "freeimagesguide-rock-wall",
    },
    {
        alt: "Layered stickers and posters on a wall, including one reading 'Yes, life is good'",
        file: "mariya_m-poster.jpg",
        name: "mariya_m-poster",
    },
    {
        alt: "Silhouette of a horse on a lead rope standing on wet ground with snowy hills in the background",
        file: "mellyschatz321-pferd.jpg",
        name: "mellyschatz321-pferd",
    },
    {
        alt: "Close-up of rippled sand dune patterns in warm light",
        file: "mostafa_meraji-desert.jpg",
        name: "mostafa_meraji-desert",
    },
    {
        alt: "Weathered blue wooden boards with peeling paint revealing bare wood",
        file: "no-longer-here-peeling.jpg",
        name: "no-longer-here-peeling",
    },
    {
        alt: "Street art on a cracked wall showing a boy flying a kite shaped like a monster",
        file: "tho-ge-street-art.jpg",
        name: "tho-ge-street-art",
    },
    { alt: "Rain droplets on a glass surface", file: "tlcmich-sunroof.jpg", name: "tlcmich-sunroof" },
    {
        alt: "Extreme close-up of a tabby cat's face, focused on its green eye and whiskers",
        file: "ykaiavu-cat.jpg",
        name: "ykaiavu-cat",
    },
];

console.log(myImages.length);
// console.log(myImages);

// #endregion Images

// #region link HTML

const containerRef = document.getElementById("container");
const dialogRef = document.getElementById("image-dialog");

// #endregion link HTML

// #region functions

function renderPictures(i) {
    containerRef.innerHTML = "";

    for (let i = 0; i < myImages.length; i++) {
        const frames = myImages[i];
        console.log(frames);
        containerRef.innerHTML += framesTemplate(i);
    }
}

function focusPicture(i) {
    loadModal(i);
    dialogRef.classList.add("open");
    dialogRef.showModal();
}

function loadModal(i) {
    dialogRef.innerHTML = "";

    dialogRef.innerHTML += dialogTemplate(i);
}

renderPictures(myImages);

function nextPic(i) {
    if (i === myImages.length - 1) return loadModal(i + 1);
}

function prevPic(i) {
    if (i === 0) return loadModal(i - 1);
}

function closeFocus() {
    dialogRef.close();
    dialogRef.classList.remove("open");
}

// #endregion functions
