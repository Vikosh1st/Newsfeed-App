const searchToggle = document.querySelector(".toggleSearch");
const searchForm = document.querySelector(".searchForm");

searchToggle.addEventListener('click', () => {
    this.classList.toggle('is-active');
    searchForm.classList.toggle('is-active');
    navList.classList.remove('is-active');
});

navToggle.addEventListener('click', function () {
     navList.classList.toggle('is-active');
     searchForm.classList.remove('is-active');
});


const openTab = (ev, tabName) => {
    const allTabs = document.getElementsByClassName("tabContent");
    for (let i = 0; i < allTabs.length; i++) {
        allTabs[i].style.display = "none";
    }
    const allTablinks = document.getElementsByClassName("tabLink");
    for (let i = 0; i < allTabs.length; i++) {
        allTablinks[i].className = allTablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    ev.currentTarget.className += " active";
}

