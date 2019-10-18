setInterval(() => {
    var goldContainer = document.querySelector(".likesYou__scroller");

    if (goldContainer) {
        goldContainer = goldContainer.childNodes[0];
        for (var i = 1; goldContainer.childNodes.length > i; i++) {
            goldContainer.childNodes[i].childNodes[0].childNodes[0].className = "StretchedBox";
        }
    }
}, 100);
