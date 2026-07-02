(function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }

    document.querySelectorAll('.has-dropdown').forEach(function (el) {
        const trigger = el.querySelector('.dd-trigger');
        if (!trigger) return;
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            el.classList.toggle('open');
        });
    });

    document.addEventListener('click', function (e) {
        document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
            if (!el.contains(e.target)) el.classList.remove('open');
        });
    });
})();
