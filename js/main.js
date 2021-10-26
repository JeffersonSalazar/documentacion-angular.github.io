let icon_menu = document.querySelector('#icon_menu');

icon_menu.addEventListener('click', function (e) {
    e.preventDefault();

    console.log(e.target);

    alert('holaaaa');
});