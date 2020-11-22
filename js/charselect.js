const url = 'js/gamechars.json';

const charSelect = document.getElementById('charSelect');
const charContainer = document.createElement('div');
    charContainer.setAttribute('class', 'charContainer');
    charSelect.appendChild(charContainer);


fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(characters => {
            const charContent = document.createElement('div');
            const div = document.createElement('div');
            const charHeading = document.createElement('h2');
            const charText = document.createElement('p');
            const charImg = document.createElement('img');
            charContent.setAttribute('class', 'charContent');
            charContent.setAttribute('id', characters.Id);
            charContainer.appendChild(charContent);
            charContent.appendChild(charImg);
            charContent.appendChild(charHeading);
            charContent.appendChild(charText);
            charImg.setAttribute('class', 'charImg');
            charImg.setAttribute('src', characters.Token);
            charHeading.setAttribute('class', 'charHeading');
            charText.setAttribute('class', 'charText');
            charHeading.innerHTML = characters.Name;
            charText.innerHTML = characters.Titles[0] + ' ' + characters.Name + ' was born ' + characters.Born + '.';
            var chosenChar = document.getElementsByClassName('charContent');
            for (var i = 0 ; i < chosenChar.length; i++) {
                chosenChar[i].addEventListener('click', populatePlayers);
            }
    })
});
function populatePlayers() {
    console.log('This function should push first and secound player to game.js');
    // not finished, sorry
    // next should be called when players are selected
    window.location.replace('game.html');
}
var charModal = document.getElementById('characterBtn');
    charModal.addEventListener('click', showModal);
function showModal() {
    var modal = document.getElementById('modal');
        modal.style.display = 'block';
}
