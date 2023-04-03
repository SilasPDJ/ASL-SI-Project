// console.log(videosLibras.getAttribute("src"));

const YOUTUBE = "https://www.youtube.com/embed/";
// TODO: improve transform dynamically

let arrayLibras = {
    "BOM DIA": "sX458sUdYMc",
    "BOA TARDE": "FGWeEjAxoD4",
    // "BOA NOITE": "https://youtu.be/OOxzeRXzg5M",
};

let arrayAsl = {
    "BOM DIA": "VjAORB0NEaw",
    "BOA TARDE": "Xgn5_WGB9JI",
};

// create a method that downloads the links in the arrays above getting the values of the arrays and save them in datasource/videos project

function getNewIframe(id, url) {
    let existingIframe = document.getElementById(id);
    if (existingIframe) {
        existingIframe.parentNode.removeChild(existingIframe);
    }

    const LOOP_URL = "";

    let iframe = document.createElement("iframe");
    iframe.setAttribute("width", "430");
    iframe.setAttribute("height", "260");
    iframe.setAttribute("id", id);
    iframe.setAttribute("src", url + LOOP_URL);
    document.querySelector(".videos").appendChild(iframe);

    return iframe;
}

function selectTextToTranslate() {
    let textTranslated = document.querySelector("#textTranslated");
    let value = textTranslated.value;
    let optionElement = textTranslated.querySelector(
        `option[value="${value}"]`
    ).text;
    const COMPLEMENT_URL = "?autoplay=1&mute=1";

    const videosLibras = getNewIframe(
        "videosLibras",
        YOUTUBE + arrayLibras[optionElement] + COMPLEMENT_URL
    );
    const videosAsl = getNewIframe(
        "videosASL",
        YOUTUBE + arrayAsl[optionElement] + COMPLEMENT_URL
    );
}

document
    .querySelector("#textTranslated")
    .addEventListener("change", selectTextToTranslate);

// downloadVideos(videoUrls);
