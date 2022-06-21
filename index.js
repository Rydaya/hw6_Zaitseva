//Hw1

let elem = document.querySelector('.elem');
let image = document.createElement('img');
elem.after(image);

elem.addEventListener("click", function () {
    image.src = 'image.jpg';
    image.style.width = '100px';
    image.style.height = '100px';
});

image.addEventListener("click", function () {
    image.src = '';
    image.style.width = '';
    image.style.height = '';
})

image.addEventListener("mouseover", function () {
    let zoomImage = setInterval(function () {
        if (parseInt(image.style.width) >= 200) {
            clearInterval(zoomImage);
        } else {
            image.style.width = parseInt(image.style.width) + 1 + 'px';
            image.style.height = parseInt(image.style.height) + 1 + 'px';
        }
    }, 10);
})

//Hw2

const arr = [1, 2, 3, 0, 4, 5, 6];
arr.reverse();
let sum = 0;

for (let num of arr) {
    if (num === 0) {
        break;
    }
    sum += num;
}

console.log(sum);

//Hw3

const arr2 = [1, 2, 3, 4, 5, 6]

function getIteration(arr) {
    let result = 0;
    let sum = 0;
    for (let num of arr) {
        if (sum > 10) {
            return result;
        }
        sum += num;
        result++;
    }
}

console.log(getIteration(arr2));

//Hw4

let inputgettext = document.querySelector('.inputgettext');
let btngettext = document.querySelector('.btngettext');

btngettext.addEventListener("click", () => {
    console.log(inputgettext.value);
});

//Hw5

const links = Array.from(document.querySelectorAll('a'));

for (let link of links) {
    link.addEventListener("mouseover", (event) => {
        event.target.innerText = event.target.title + '(' + event.target.href + ')';
    });
}

//Hw6

const removeBtn = document.querySelector('.removeBtn');
removeBtn.addEventListener("click", () => {
    removeBtn.remove();
});

//Hw7
let numberInput = document.querySelector('.numberInput');
let start = document.querySelector('.start');
let round = document.querySelector('.round');

numberInput.addEventListener('focusout', (event) => {
    resultValue = parseInt(event.target.value);
    if (!Number.isInteger(resultValue)) {
        event.target.value = '';
    } else {
        event.target.value = resultValue;
    }
});

start.addEventListener('click', () => {
    round.style.left = numberInput.value + 'px';
    if (parseInt(round.style.left) > 600 || parseInt(round.style.left) < 0) {
        numberInput.value = 'Error';
        round.style.left = '0px';
    }
})

//Hw8

const btn = document.querySelectorAll('.btn');

for (let elem of btn) {
    elem.onclick = logDataAttr;
}

function logDataAttr(event) {
    if (Object.keys(event.target.dataset).length === 0) {
        console.log('У этого элемента 0 дата аттрибутов');
        return;
    }
    console.log(`У этого элемента ${Object.keys(event.target.dataset).length} дата аттрибутов`)
    for (let key in event.target.dataset) {
        console.log(`Аттрибут ${key} - ${event.target.dataset[key]}`);
    }
}