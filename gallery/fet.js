

fetch('tsconfig.json').then(response => {
    response.json().then(json => {
showImageElement(json.puzo);
showImageElement(json.mem1);
showImageElement(json.mem3);

    })
    })
function showImageElement(url) {
    let htmlImageElement = new Image();
    htmlImageElement.src = url;
    htmlImageElement.style.width = "500px";
    htmlImageElement.style.height = "500px";
    document.querySelector('.smth').appendChild(htmlImageElement);
}
