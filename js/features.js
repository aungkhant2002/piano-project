let cords = document.getElementById("cords");
let pianoMemory = [];
let list = document.getElementById("list");

function run(x) {
    const audio = new Audio(`sound/${x}.mp3`);
    audio.play();
    cords.value += x + ",";
    console.log(`U play ${x} key`);
}

function saveCords() {
    let input = cords.value;
    cords.value = "";
    pianoMemory.push(input);
    console.log(`${input} is saved in memory`);
    list.innerHTML = "";
    pianoMemory.map(function (el, index) {
        list.innerHTML += `<li>${el}<button class="replay-btn" onclick="replay(${index})">Replay</button></li>`;
    });
}

let arr = ['C4', 'E4', 'G4'];

function runMemory(sounds, delay = 1000) {
    let x = delay;
    sounds.map(function (el, index) {
        setTimeout(run, x, el);
        x += delay;
    });
}

function replay(x) {
    let current = pianoMemory[x].split(",");
    current.pop();
    console.log(current);
    runMemory(current);
    cords.value = "";
}

document.addEventListener("keyup", function (e) {
    let current = e.keyCode;
    if (current == 65) {
        run('C4');
    } else if (current == 83) {
        run('D4')
    } else if (current == 68) {
        run('E4')
    } else if (current == 70) {
        run('F4')
    } else if (current == 74) {
        run('G4')
    } else if (current == 75) {
        run('A4')
    } else if (current == 76) {
        run('B4')
    } else if (current == 186) {
        run('C5')
    }
})