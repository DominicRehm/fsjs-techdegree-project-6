$(document).foundation()

const infoHeading = document.querySelector('#info_heading');
const infoContainer = document.querySelector('.info_container');

infoContainer.style.display = 'none';

infoHeading.addEventListener('click', () => {
    if (infoContainer.style.display === 'none') {
        infoContainer.style.display = 'block';
    } else {
        infoContainer.style.display = 'none';
    }
});