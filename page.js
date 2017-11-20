const navBar = document.getElementById('navbar'),
    index = document.getElementById('index'),
    about = document.getElementById('about'),
    gallery = document.getElementById('gallery'),
    team = document.getElementById('team'),
    contact = document.getElementById('contact'),
    buttonIndex = document.getElementById('nav-button-home'),
    buttonAbout = document.getElementById('nav-button-about'),
    buttonGallery = document.getElementById('nav-button-gallery'),
    buttonTeam = document.getElementById('nav-button-team'),
    buttonContact = document.getElementById('nav-button-contact'),
    navLogo = document.getElementById('nav-logo'),
    navLogoHome = document.getElementById('nav-logo-home'),
    navMobile = document.getElementsByClassName('navbarmobile')[0];
var inHome = true;

function hidePage(page1, page2, page3, page4) {
    page1.classList.add('hide');
    page2.classList.add('hide');
    page3.classList.add('hide');
    page4.classList.add('hide');
}
function showPage(page) {
    page.classList.remove('hide');
}

function navNotSelect(button1, button2, button3, button4) {
    button1.classList.remove('selected');
    button2.classList.remove('selected');
    button3.classList.remove('selected');
    button4.classList.remove('selected');
}
function navSeclect(button) {
    button.classList.add('selected');
}

function shrinkNav() {
    navBar.classList.remove('nav');
    navLogoHome.parentNode.style.paddingRight = '.5em';
    navLogoHome.style.filter = 'opacity(0)';
    setTimeout(() => {
        navLogoHome.style.display = 'none';
        navLogo.style.display = 'flex';
    }, 200);
    setTimeout(() => {
        navLogo.style.filter = 'opacity(1)';
    }, 201);
}
function extendNav() {
    navBar.classList.add('nav');
    navLogoHome.parentNode.style.paddingRight = '1.5rem';
    navLogo.style.filter = 'opacity(0)';
    setTimeout(() => {
        navLogo.style.display = 'none';
        navLogoHome.style.display = 'flex';
    }, 200);
    setTimeout(() => {
        navLogoHome.style.filter = 'opacity(1)';
    }, 201);
}

// page redirect
function pageIndex() {
    extendNav()
    hidePage(about, gallery, team, contact)
    navNotSelect(buttonAbout, buttonContact, buttonTeam, buttonGallery)
    showPage(index)
    navSeclect(buttonIndex)
    navMobile.classList.add('home')
    inHome = true
    hideNav()
    document.getElementById('nav-icon').classList.toggle('open')
}
function pageAbout() {
    shrinkNav()
    hidePage(index, gallery, team, contact)
    navNotSelect(buttonIndex, buttonContact, buttonTeam, buttonGallery)
    showPage(about)
    navSeclect(buttonAbout)
    navMobile.classList.remove('home')
    inHome = false
    hideNav()
    document.getElementById('nav-icon').classList.toggle('open')
}
function pageGallery() {
    shrinkNav()
    hidePage(index, about, team, contact)
    navNotSelect(buttonIndex, buttonContact, buttonTeam, buttonAbout)
    showPage(gallery)
    navSeclect(buttonGallery)
    navMobile.classList.remove('home')
    inHome = false
    hideNav()
    document.getElementById('nav-icon').classList.toggle('open')
}
function pageTeam() {
    shrinkNav()
    hidePage(index, about, gallery, contact)
    navNotSelect(buttonIndex, buttonContact, buttonGallery, buttonAbout)
    showPage(team)
    navSeclect(buttonTeam)
    navMobile.classList.remove('home')
    inHome = false
    hideNav()
    document.getElementById('nav-icon').classList.toggle('open')
}
function pageContact() {
    shrinkNav()
    hidePage(index, about, team, gallery)
    navNotSelect(buttonIndex, buttonGallery, buttonTeam, buttonAbout)
    showPage(contact)
    navSeclect(buttonContact)
    navMobile.classList.remove('home')
    inHome = false
    hideNav()
    document.getElementById('nav-icon').classList.toggle('open')
}

//navbar
isNavShow = false;
function showNav() {
    if (isNavShow) {
        hideNav()
    } else {
        navBar.children[0].classList.add('shownav')
        document.getElementsByClassName('navfilter')[0].style.visibility = 'inherit'
        isNavShow = true
    }
}
function hideNav() {
    isNavShow = false
    navBar.children[0].classList.remove('shownav')
    document.getElementsByClassName('navfilter')[0].style.visibility = 'hidden'
}

document.getElementById('nav-icon').onclick = function() {
    this.classList.toggle('open');
}
