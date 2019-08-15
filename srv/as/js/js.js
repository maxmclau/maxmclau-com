(function () {
    const simplex = new SimplexNoise();
    const heavyfilter = document.querySelector('#turbulance-filter-heavy feTurbulence');
    const lightfilter = document.querySelector('#turbulance-filter-light feTurbulence');

    let i = 0;

    function step() {
        let noise = Math.abs(simplex.noise2D(i, 0));
        heavyfilter.setAttribute('baseFrequency', noise * 0.1 + ', ' + noise * 0.05);
        lightfilter.setAttribute('baseFrequency', noise * 0.0025 + ', ' + noise * 0.0025);

        i += 0.025;
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
})();