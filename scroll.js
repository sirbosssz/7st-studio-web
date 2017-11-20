function checkScroll() {
    if (window.innerWidth >= 991 && inHome) {
        navMobile.classList.remove('hide-lg');
    } else {
        navMobile.classList.add('hide-lg');
    }

    if (window.innerHeight - 50 < window.scrollY && inHome) {
        navMobile.classList.remove('home')
    } else if (window.innerHeight - 50 < window.scrollY && !inHome) {
        navMobile.classList.remove('home')
        navMobile.classList.remove('hide-lg')
    } else if (window.innerHeight - 50 >= window.scrollY && !inHome) {
        navMobile.classList.add('hide-lg')
    } else {
        navMobile.classList.add('home')
        navMobile.classList.add('hide-lg')
    }
}

function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, 600)
}