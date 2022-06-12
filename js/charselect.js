const url = 'js/gamechars.json';

const charSelect = document.getElementById('charSelect');
const modalHeading = document.getElementById('modalHeading');
const charContainer = document.createElement('div');
    charContainer.setAttribute('class', 'charContainer');
    charSelect.appendChild(charContainer);

let currentPlayerSelect = 1;

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(characters => {
            const charContent = document.createElement('div');
            const div = document.createElement('div');
            const charHeading = document.createElement('h2');
            // const charText = document.createElement('p');
            const charImg = document.createElement('img');
            charContent.setAttribute('class', 'charContent');
            charContent.setAttribute('id', characters.id);
            charContent.setAttribute('data-token', characters.Token);
            charContent.setAttribute('data-name', characters.Name);
            charContent.addEventListener('click', populatePlayers);
            charContainer.appendChild(charContent);
            charContent.appendChild(charHeading);
            // charContent.appendChild(charText);
            charContent.appendChild(charImg);
            charImg.setAttribute('class', 'charImg');
            charImg.setAttribute('src', characters.Token);
            charHeading.setAttribute('class', 'charHeading');
            // charText.setAttribute('class', 'charText');
            charHeading.innerHTML = characters.Name;
            // charText.innerHTML = characters.Titles[0] + ' ' + characters.Name + ' was born ' + characters.Born + '.';
            /*
            var chosenChar = document.getElementsByClassName('charContent');
            for (var i = 0 ; i < chosenChar.length; i++) {
                chosenChar[i].addEventListener('click', populatePlayers);
            }
            */
    })
});
function populatePlayers(e) {
    console.log('This function should push first and secound player to game.js');
    console.log(e.currentTarget.dataset.token);
    if (currentPlayerSelect === 1) {
        window.localStorage.setItem('player1token', e.currentTarget.dataset.token);
        window.localStorage.setItem('player1name', e.currentTarget.dataset.name);
        modalHeading.innerHTML = "Select player 2";
        e.currentTarget.setAttribute('style', 'background:#102737;')
        currentPlayerSelect = 2;
        return
    } 
    if (currentPlayerSelect === 2) {
        window.localStorage.setItem('player2token', e.currentTarget.dataset.token);
        window.localStorage.setItem('player2name', e.currentTarget.dataset.name);
        currentPlayerSelect = 1;
        window.location.replace('game.html');
    }
}
var charModal = document.getElementById('characterBtn');
    charModal.addEventListener('click', showModal);
function showModal() {
    var modal = document.getElementById('modal');
        modal.style.display = 'block';
}
