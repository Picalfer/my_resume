document.getElementById('button1').addEventListener('click', function () {
    changeColorPalette('#FADBD8', '#F1948A', '#D98880', '#E6B0AA');
});

document.getElementById('button2').addEventListener('click', function () {
    changeColorPalette('#D6EAF8', '#85C1E9', '#5DADE2', '#5499C7');
});

document.getElementById('button3').addEventListener('click', function () {
    changeColorPalette('#F2FADB', '#E14631', '#2c2b2b', '#E14631');
});

document.getElementById('button4').addEventListener('click', function () {
    changeColorPalette('#E6E6E6', '#33cc33', '#000000', '#ffffff');
});

function changeColorPalette(bodyColor, titleDecorationColor, leftAreaColor, headingColor) {
    document.body.style.backgroundColor = bodyColor;

    document.getElementById('title').style.backgroundColor = titleDecorationColor;

    document.getElementById('left-container').style.backgroundColor = leftAreaColor;

    var headings = document.querySelectorAll('.container h3');
    for (var i = 0; i < headings.length; i++) {
        headings[i].style.color = headingColor;
    }
}

var downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function () {
    var downloadLink = document.createElement('a');
    downloadLink.href = 'res/resume.png';
    downloadLink.download = 'Артур Кожемякин.jpg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});