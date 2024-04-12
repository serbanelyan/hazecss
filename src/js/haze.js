document.addEventListener('keydown', (event) => {
    var keyCode = event.code;

    if (keyCode == 'Backslash') {
        const bodyClasses = document.body.classList;
        const isDebugOn = bodyClasses.contains('debug');
        bodyClasses.toggle('debug', !isDebugOn);
        bodyClasses.toggle('on', !isDebugOn);
        bodyClasses.toggle('off', isDebugOn);
    }
}, false);

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('navbar-collapse');

    navToggle.addEventListener('click', function () {
        if (navList.classList.contains('collapsed')) {
            navList.classList.remove('collapsed');
        } else {
            navList.classList.add('collapsed');
        }
    });
});