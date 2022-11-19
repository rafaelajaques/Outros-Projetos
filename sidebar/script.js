const sidebar = document.getElementById('sidebar')
const menuBtn = document.getElementById('menuBtn')
const overlay = document.getElementById('overlay')

menuBtn.onclick = function () {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('hidden');
};

overlay.onclick = function () {
    overlay.classList.toggle('hidden');
    sidebar.classList.toggle('active');
};

