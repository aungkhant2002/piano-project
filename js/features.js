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