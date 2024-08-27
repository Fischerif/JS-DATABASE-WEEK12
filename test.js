


document.getElementById('fetchFootball').addEventListener('click', async () => {  ///I  would not have figured this out without the videos 
    const response = await fetch('http://localhost:3000/players');
    const players = await response.json();
    const container = document.getElementById('containerF');
    container.innerHTML = '';
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `<h1>${player.title}</h1>`;
        container.appendChild(playerDiv);

    });
    console.log("FETCHED");
});

document.getElementById('aFootball').addEventListener('click', () => {  ///I WAS HAVING CRAZY BUTTON ISSUES 
    console.log("aFootball pressed");
});


///////////////document.getElementById('uFootball').addEventListener('click', () => {
 ///////////////   console.log("uFootball pressed");''
/////////////// });

document.getElementById('rFootball').addEventListener('click', () => {
    console.log("dFootball pressed");
}
);









////I CANT GET ASYNC FUNCTIONS WORKING





document.getElementById('rFootball').addEventListener('click', async () => { ////I orginally tried the method used in the Video this works
const response = await fetch('http://localhost:3000/players');
const players = await response.json(); ///We define a new variable called players that stores the response from the fetch request
const toDelete = players[players.length - 1]; //WE define a new variable called toDelete that stores the last element of the players array
await fetch(`http://localhost:3000/players/${toDelete.id}`, {

    method: 'DELETE' /// We just delete the variable toDelete
});
});

document.getElementById('aFootball').addEventListener('click', async () => { //////ITS ALIIVEE
const newName = document.getElementById('aFootballInput').value;/// We create a new varible called newName that stores the value of the text inpur 
await fetch('http://localhost:3000/players', {
    method: 'POST',
    headers: { ////BEFORE LAST WEEK THE ONLY HEADERS I KNEW ABOUT WHERE THE ONES THAT MOST OFTEN COME AS A RESULT OF A CORNER
        'Content-Type': 'application/json'
     },
    body: JSON.stringify({ title: newName }) 
});
console.log("IT FRIGGIN WORKSS ");
}
);
