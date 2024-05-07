function scrollOffset(element, offset = 64, behavior = 'smooth') {
    const validBehaviors = ['auto', 'smooth', 'initial', 'inherit'];
    if (!validBehaviors.includes(behavior)) {
        console.error('Invalid behavior parameter. Using default behavior: smooth');
        behavior = 'smooth';
    }

    if (isNaN(offset)) {
        console.error('Invalid offset parameter. Using default offset: 120');
        offset = 64;
    }

    var targetElement = document.getElementById(element);
    var offset = targetElement.offsetTop - offset;

    window.scrollTo({
        top: offset,
        behavior: behavior
    });
};

document.addEventListener('keydown', (event) => {
    if (event.code == 'Backslash') {
        const bodyClasses = document.body.classList;
        if (bodyClasses.contains('debug')) {
            bodyClasses.toggle('on');
            bodyClasses.toggle('off');
        }
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

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('breadcrumb-menu-toggle')) {
        const breadcrumbToggle = document.getElementById('breadcrumb-menu-toggle');
        const breadcrumbList = document.getElementById('breadcrumb-collapse');
        const breadcrumbContainer = document.getElementById('breadcrumb-container');

        breadcrumbToggle.addEventListener('click', function () {
            if (breadcrumbList.classList.contains('collapsed')) {
                breadcrumbList.classList.remove('collapsed');

                document.body.classList.add('overflow-hidden', 'position-relative');
                document.documentElement.classList.add('overflow-hidden', 'position-relative');

                if (breadcrumbContainer.getAttribute('scroll-into-view') === "true") {
                    offset = breadcrumbContainer.getAttribute('scroll-offset') ?? 0;
                    scrollOffset('breadcrumb-container', offset);
                }
            } else {
                document.body.classList.remove('overflow-hidden', 'position-relative');
                document.documentElement.classList.remove('overflow-hidden', 'position-relative');

                breadcrumbList.classList.add('collapsed');
            }
        });
    }
});