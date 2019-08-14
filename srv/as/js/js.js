(function () {

    const filter = document.querySelector('#turbulance-filter feTurbulence');

    function dooo(pos) {
        filter.setAttribute('baseFrequency', pos / 200 * 0.06);
    }

    ticking = false;

    window.addEventListener('scroll', function (e) {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                dooo(window.scrollY);
                ticking = false;
            });

            ticking = true;
        }
    });
})();