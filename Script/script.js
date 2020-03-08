var imageContent = document.getElementById("slides");
var image = ["1", "2", "3", "4", "5", "6", "7"];
var counter = image.length;

function nextImage() {
    if (counter < image.length) {
        ++counter;
    } else {
        counter = 1;
    }
    imageContent.innerHTML = "<img class=\"slideshow\" src=\"Images/Host photos/" + image[counter - 1] + ".jpg\">";
}

function prevImage() {
    if (counter > 1) {
        --counter;
    } else {
        counter = 7;
    }
    imageContent.innerHTML = "<img class=\"slideshow\" src=\"Images/Host photos/" + image[counter - 1] + ".jpg\">";
}
