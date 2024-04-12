function hazeDarkDemo() {
    const mode = document.getElementById('haze-dark-demo');

    if (mode.classList.contains('bg-dark')) {
        mode.classList.replace('bg-dark', 'bg-light');
    } else if (mode.classList.contains('bg-light')) {
        mode.classList.replace('bg-light', 'bg-dark');

        setTimeout(function () {
            mode.classList.replace('bg-dark', 'bg-light');
        }, 30000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    function calculateWidth() {
        const element = document.getElementById('haze-responsive-demo');
        const elementSibling = document.getElementById('haze-responsive-demo-container-sibling');
        const rangeInput = document.querySelector('#haze-responsive-range input[type="range"]');
        const rangeResolution = document.querySelector('#haze-responsive-range input[type="range"]').offsetWidth;
        const rangeValue = rangeInput.value;

        if (rangeValue >= 40)
            width = rangeValue / 100 * rangeResolution;
        else {
            rangeInput.value = 40;
            width = 40 / 100 * rangeResolution;
        }

        element.style.width = width + 'px';
        element.style.height = elementSibling.offsetHeight;

        elementSibling.style.opacity = (140 - rangeValue) / 100;

        if (window.innerWidth < 992)
            elementSibling.style.opacity = 1;

        if (width >= 600)
            document.getElementById('md').classList.add('active');
        else {
            document.getElementById('lg').classList.remove('active');
            document.getElementById('md').classList.remove('active');
        }

        if (width >= 800)
            document.getElementById('lg').classList.add('active');
        else
            document.getElementById('lg').classList.remove('active');
    }

    const rangeInput = document.querySelector('#haze-responsive-range input[type="range"]');
    calculateWidth();

    document.getElementById('sm').addEventListener('click', function () {
        console.log(window.innerWidth);
        if (window.innerWidth > 1400)
            rangeInput.value = 48;
        else if (window.innerWidth < 1200)
            rangeInput.value = 62;
        else rangeInput.value = 55;

        calculateWidth();
    });

    document.getElementById('md').addEventListener('click', function () {
        if (window.innerWidth > 1400)
            rangeInput.value = 64;
        else if (window.innerWidth < 1200)
            rangeInput.value = 84;
        else
            rangeInput.value = 74;

        calculateWidth();
    });

    document.getElementById('lg').addEventListener('click', function () {
        rangeInput.value = 100;
        calculateWidth();
    });

    window.addEventListener('resize', function () {
        calculateWidth();
    });

    rangeInput.addEventListener('input', function () {
        calculateWidth();
    });
});

window.dispatchEvent(new Event('resize'));
