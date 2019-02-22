const nav_switch = {
    "about_nav" : "about_page",
    "research_nav" : "research_page",
    "resume_nav" : "resume_page",
    "group_nav" : "group_page",
    "media_nav" : "media_page"
}

setVisibilityForPage('about_nav');
// window.onload = function () {
//     setVisibilityForPage('about_nav');
// };

let top_nav = document.querySelector('.topnav');
top_nav.addEventListener('click', (e) => {
    console.log('nav choose id: ' + e.target.id);
    setVisibilityForPage(e.target.id);
});

function setVisibilityForPage(to_show) {


    let pages = document.getElementsByClassName('page');
    pages = Array.prototype.slice.call(pages);
    pages.forEach(element => {
        element.style.visibility = 'hidden';
        element.style.display = 'none';
        // element.classList.remove("active");
    });
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");

    document.getElementById(to_show).classList.add("active");
    let elem_to_change = document.getElementById(nav_switch[to_show]);
    elem_to_change.style.visibility = "visible";
    elem_to_change.style.display = "block";

}


window.smoothScroll = function (target) {
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
