window.addEventListener("load", () => {
    /* IMAGE ZOOM */

    const imgZoom = document.getElementById("img-zoom");
    const imgZoomContent = document.getElementById("img-zoom-content");

    imgZoom.addEventListener("click", () => {
        imgZoom.className = "";
        imgZoomContent.className = "";
    })

    for (const img of document.getElementsByClassName("zoomable")) {
        img.addEventListener("click", () => {
            imgZoom.className = "show";
            imgZoomContent.className = "show";
            imgZoomContent.src = img.src;
        });
    }

    /* EXPAND / COLLAPSE EVERYTHING */

    const expandEverything = document.getElementById("expand-everything");
    expandEverything.addEventListener("click", () => {
        for (const details of document.getElementsByTagName("details")) {
            details.open = true;
        }
    });

    const collapseEverything = document.getElementById("collapse-everything");
    collapseEverything.addEventListener("click", () => {
        for (const details of document.getElementsByTagName("details")) {
            details.open = false;
        }
    });
});
