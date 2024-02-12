document.addEventListener('DOMContentLoaded', function () {
    fetch('https://oleksii-lemeshinskyi-kv13.github.io/webdesign-lab1/components/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the footer:', error);
        });
});