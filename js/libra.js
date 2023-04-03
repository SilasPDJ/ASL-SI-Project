// https://www.youtube.com/@nhojeal2225/videos

const YOUTUBE = "https://www.youtube.com/embed/";
// TODO: improve transform dynamically

let arrayLibras = {
    "BOM DIA": "sX458sUdYMc",
    "BOA TARDE": "FGWeEjAxoD4",
    OBRIGADO: "fJDIKh8059c",
    // "BOA NOITE": "https://youtu.be/OOxzeRXzg5M",
};

let arrayAsl = {
    "BOM DIA": "VjAORB0NEaw",
    "BOA TARDE": "Xgn5_WGB9JI",
    OBRIGADO: "IvRwNLNR4_w",
};

function addOptionToSelect(selectId, optionText) {
    const select = document.getElementById(selectId);
    const newOption = document.createElement("option");
    const idNum = select.options.length + 1; // get the new option ID by adding 1 to the number of existing options
    newOption.setAttribute("value", `option${idNum}`); // set the value attribute to the new option ID
    newOption.textContent = optionText;
    select.appendChild(newOption);
}

for (opt in arrayAsl) {
    addOptionToSelect("textTranslated-portuguese", opt);
}

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

function selectTextToTranslate(event) {
    let textTranslated = event.target;
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

for (let id of ["textTranslated-portuguese", "textTranslated-english"]) {
    document
        .querySelector(`#${id}`)
        .addEventListener("change", selectTextToTranslate);
}

// downloadVideos(videoUrls);
