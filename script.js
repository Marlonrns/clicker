let count = 0;

document.getElementById('cookie').addEventListener('click', function() {
    count++;
    document.getElementById('count').innerText = 'Cookies: ' + count;
});