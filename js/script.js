setTimeout(() => {

    $('.card_list').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1
    });


    $('.img_container').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    var slideLeft = {
        distance: '30%',
        origin: 'left',
        opacity: 0,
        delay: 500,
        duration: 1500,
        reset: true,
    };

    var slideRight = {
        distance: '30%',
        origin: 'right',
        opacity: 0,
        delay: 500,
        duration: 1500,
        reset: true,
    };

    ScrollReveal().reveal('.slide-right', slideRight);
    ScrollReveal().reveal('.slide-left', slideLeft);

    ScrollReveal().reveal('.headline');
}, 500);


function getCookieFav() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; isLoggedIn=`);

    if (parts.length > 1) {
        const object = JSON.parse(parts.pop().split(";").shift());
        return object;
    } else {
        return [];
    }
};

function setCookie(value) {
    const d = new Date();

    let currentArray = getCookieFav();

    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();


    currentArray.push(value);
    document.cookie =
        "isLoggedIn=" +
        JSON.stringify(currentArray) +
        ";" +
        expires +
        ";path=/;Secure";

};

function clearCookie() {
    const d = new Date();


    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
        "isLoggedIn=" +
        JSON.stringify([]) +
        ";" +
        expires +
        ";path=/;Secure";
}
setCookie("test")

console.log(getCookieFav());


// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, 0);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing)