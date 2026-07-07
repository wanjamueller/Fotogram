const myImages = [
    {
        alt: "Paper speech bubble reading 'FOOL!' taped to a red corrugated metal shutter",
        file: "atanaspaskalev-fool.jpg",
    },
    {
        alt: "Snow-covered rolling hills at sunset with dramatic clouds and a low sun",
        file: "edyttka1388-winter-2.jpg",
    },
    { alt: "Snow-covered field and hills backlit by a bright sun near the horizon", file: "edyttka1388-winter.jpg" },
    {
        alt: "Close-up of a weathered blue wooden edge with peeling paint and exposed, splintered wood",
        file: "engin_akyurt-blue.jpg",
    },
    { alt: "Close-up of rough grey stacked stones forming a wall", file: "engin_akyurt-stone.jpg" },
    { alt: "Close-up of rough grey stacked stones forming a wall", file: "freeimagesguide-rock-wall.jpg" },
    {
        alt: "Layered stickers and posters on a wall, including one reading 'Yes, life is good'",
        file: "mariya_m-poster.jpg",
    },
    {
        alt: "Silhouette of a horse on a lead rope standing on wet ground with snowy hills in the background",
        file: "mellyschatz321-pferd.jpg",
    },
    { alt: "Close-up of rippled sand dune patterns in warm light", file: "mostafa_meraji-desert.jpg" },
    { alt: "Weathered blue wooden boards with peeling paint revealing bare wood", file: "no-longer-here-peeling.jpg" },
    {
        alt: "Street art on a cracked wall showing a boy flying a kite shaped like a monster",
        file: "tho-ge-street-art.jpg",
    },
    { alt: "Rain droplets on a glass surface", file: "tlcmich-sunroof.jpg" },
    { alt: "Extreme close-up of a tabby cat's face, focused on its green eye and whiskers", file: "ykaiavu-cat.jpg" },
];

console.log(myImages.length);

const containerRef = document.getElementById("container");
const sliderRef = document.getElementById("slider");

function renderPictures() {
    containerRef.innerHTML = "";
}
