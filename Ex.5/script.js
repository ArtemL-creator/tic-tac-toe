const area = document.getElementById('area')
let queue = 0;
let result = '';
const cont_wrap = document.getElementById('content');
const modal_res = document.getElementById('modal-result-wrapper');
const overl = document.getElementById('overlay');
const btn_res = document.getElementById('btn-restart');

area.addEventListener("click", evnt => {
    if (evnt.target.className = 'btn') {
        if (evnt.target.value != 'X' && evnt.target.value != 'O') {
            queue % 2 === 0 ? evnt.target.value = 'X' : evnt.target.value = 'O';
            queue++;
            check();
        }
    }
})

const check = () => {
    const battons = document.getElementsByClassName('btn');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (i = 0; i < arr.length; i++) {
        if (battons[arr[i][0]].value == 'X' && battons[arr[i][1]].value == 'X' && battons[arr[i][2]].value == 'X') {
            result = 'крестики';
            preRes(result);
        } else if (battons[arr[i][0]].value == 'O' && battons[arr[i][1]].value == 'O' && battons[arr[i][2]].value == 'O') {
            result = 'нолики';
            preRes(result);
        }
        else if (queue >= 9) {
            preRes(result);
        }
    }
}

const preRes = result => {
    if (result != '') {
        cont_wrap.innerHTML = `Победили ${result}!`;
    } else {
        cont_wrap.innerHTML = 'Ничья!';
    }
    modal_res.style.display = 'block';
    overl.style.display = 'block';
}

const closeModal = () => {
    modal_res.style.display = 'none';
    location.reload();
}

btn_res.addEventListener('click', closeModal);
overl.addEventListener('click', closeModal);