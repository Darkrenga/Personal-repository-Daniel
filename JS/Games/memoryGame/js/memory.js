const PATH = 'images/';
const BOARD = document.getElementById('game');


const game = {
    init: function() {
        const num_cards = 3;
        const arr_flipped = [];
        let pairs = 0;
        arrGoals = arrGoals.slice(0, num_cards);
        arrGoals = arrGoals.concat(arrGoals);
        arrGoals.sort(function(a, b) {return 0.5 - Math.random()});

        for(let goal of arrGoals) {
            let card = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src', `${PATH}${goal.image}`);
            card.appendChild(img);

            card.onclick = function() {
                this.classList.add('flipped');
                arr_flipped.push(this);

                if(arr_flipped.length === 2) {
                    if(arr_flipped[0].innerHTML === arr_flipped[1].innerHTML) {
                        console.log("Its a match")
                    } else {
                        setTimeout(() => {
                            let toRemoveClass = document.querySelectorAll('.flipped');
                            for(let item of toRemoveClass) {
                                item.classList.replace('flipped', 'closing');
                            }  
                        }, 500);
                    }
                    arr_flipped.length = 0;
                }

            }

            BOARD.appendChild(card);
        }

    },
    win: function() {
        let winner = document.createElement('div');
        winner.classList.add('winner');
        winner.innerHTML = "<h1>Du har vundet</h1>";
        document.body.appendChild(winner);
    },
    reset: ''
}

game.init();

