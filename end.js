    var x = localStorage.getItem('Score');

    document.getElementById('scoref').innerHTML = x;
    if (x <= 30) {
        window.location.assign('/miles.html');
    }

