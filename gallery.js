const photo = document.getElementById('photo');
const photoFilter = document.getElementById('photo-filter');


function photoOpen(element) {
    const image = element.children[0].getAttribute('src');
    const caption = element.children[1].innerText;
    console.log(image + ':' + caption);
    photo.children[0].innerHTML = caption;
    photo.children[1].setAttribute('src', image);
    photoFilter.style.display = 'inherit';
    photoFilter.style.filter = 'opacity(1)';
}

function photoClose() {
    photoFilter.style.filter = 'opacity(0)';
    setTimeout(() => {
        photoFilter.style.display = 'none';
    }, 300);
}