function hazeDarkDemo() {
    const mode = document.getElementById('haze-dark-demo');

    if (mode.classList.contains('bg-auto')) {
        mode.classList.replace('bg-auto', 'bg-reverse');
    } else if (mode.classList.contains('bg-reverse')) {
        mode.classList.replace('bg-reverse', 'bg-auto');
    } else mode.classList.add('bg-auto');

    setTimeout(function () {
        mode.classList.replace('bg-reverse', 'bg-auto');
    }, 30000);
}

function toggleVisibility(element, button = null, timeout = 30000) {
    const mode = document.getElementById(element);

    if (mode.classList.contains('d-none')) {
        mode.classList.replace('d-none', 'd-block');

        if (button != null)
            button.textContent = '(hide)';
    } else if (mode.classList.contains('d-block')) {
        mode.classList.replace('d-block', 'd-none');

        if (button != null)
            button.textContent = '(show)';
    } else mode.classList.add('d-none');

    if (timeout === false) {
        return;
    } else if (timeout === true) {
        timeout = 30000;
    } else if (isNaN(timeout)) {
        console.error('Invalid timeout parameter. Using default offset: 30000');
        timeout = 30000;
    }

    setTimeout(function () {
        mode.classList.replace('d-block', 'd-none');

        if (button != null)
            button.textContent = '(show)';
    }, timeout);
}

function copyToClipboard(element, button) {
    var codeSnippet = document.getElementById(element);

    var selection = window.getSelection();
    var range = document.createRange();

    range.selectNodeContents(codeSnippet);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();

    button.textContent = 'Copied!';

    setTimeout(function () {
        button.textContent = 'Copy to clipboard';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('haze-responsive-demo')) {
        function calculateWidth() {
            const element = document.getElementById('haze-responsive-demo');
            const elementSibling = document.getElementById('haze-responsive-demo-container-sibling');
            const rangeInput = document.querySelector('#haze-responsive-range input[type="range"]');
            const rangeResolution = document.querySelector('#haze-responsive-range input[type="range"]').offsetWidth;
            const rangeValue = rangeInput.value;

            if (rangeValue >= 40)
                width = rangeValue / 100 * rangeResolution - 30;
            else {
                rangeInput.value = 40;
                width = 40 / 100 * rangeResolution - 30;
            }

            element.style.width = width + 'px';
            element.style.height = elementSibling.offsetHeight + 'px';

            var opacity = 1 - ((rangeValue - 40) / 60);
            elementSibling.style.opacity = opacity.toFixed(2);

            if (window.innerWidth < 992)
                elementSibling.style.opacity = 1;

            if (element.offsetWidth - 12 > document.getElementById('sm').offsetWidth)
                document.getElementById('md').classList.add('active');
            else {
                document.getElementById('lg').classList.remove('active');
                document.getElementById('md').classList.remove('active');
            }

            if (element.offsetWidth - 12 > (document.getElementById('md').offsetWidth + document.getElementById('sm').offsetWidth))
                document.getElementById('lg').classList.add('active');
            else
                document.getElementById('lg').classList.remove('active');
        }

        const rangeInput = document.querySelector('#haze-responsive-range input[type="range"]');
        calculateWidth();

        document.getElementById('sm').addEventListener('click', function () {
            if (window.innerWidth > 1260)
                rangeInput.value = 48;
            else if (window.innerWidth < 1100)
                rangeInput.value = 62;
            else rangeInput.value = 55;

            calculateWidth();
        });

        document.getElementById('md').addEventListener('click', function () {
            if (window.innerWidth > 1260)
                rangeInput.value = 64;
            else if (window.innerWidth < 1100)
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
    }
});

window.dispatchEvent(new Event('resize'));