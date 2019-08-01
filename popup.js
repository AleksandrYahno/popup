(function () {

    const form = document.getElementById('block-vebforma');

    if (form) {

        form.classList.add('hidden');
        const btn = document.querySelectorAll('.popUp-btn');
        for (let i = 0; i < btn.length; i++) {
            popUpAdd(btn[i]);
        }

        function popUpAdd(elem) {
            elem.addEventListener('click', function () {
                form.classList.remove("hidden");
                form.classList.add("visible", "visible--active");
                let wid = form.offsetWidth / 2,
                    hei = form.offsetHeight / 2;
                form.style.top = "calc( 50vh - " + hei + "px )";
                form.style.left = "calc( 50vw - " + wid + "px )";
            });
        }

        function popUpRemove() {
            form.classList.add("hidden");
            form.classList.remove("visible", "visible--active");
        }

        window.addEventListener("keydown", function (e) {
            if (e.keyCode === 27) {
                return popUpRemove();
            }
        }, true);

        document.addEventListener('click', function (e) {
            e = e || event;
            target = e.target || e.srcElement;
            if (target === form) {
                return popUpRemove();
            }
        });
    }

})();