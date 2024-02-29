const outputElement = document.querySelector('#timer');
const play = document.querySelector('#getnamebtn');
const cancelEnterPlayBtn = document.querySelector('#goaway');
const resetBtn = document.querySelector('#reset');



let inputElement = () => Math.round(Math.random() * 100 + 1);
let enteredNum;

const getInputedNum = () => {
    return new Promise(
        
        (callBackSuccess, callBackReject) => {
        
        const handleClickSubmitNameBtn = () => {
            enteredNum = inputElement();
            console.log(enteredNum);
            if (enteredNum > 70) {
                callBackSuccess('Ура, мы выиграли: ' + enteredNum);
            } else {
                callBackReject('Не повезло, не подфортило');
                alertSound.play();
            }
        }
        play.addEventListener('click', handleClickSubmitNameBtn);

        const handleClickRejectNameBtn = () => {
            callBackReject('Отказался играть');
            alertSound.play();
        }
        cancelEnterPlayBtn.addEventListener('click', handleClickRejectNameBtn);
    }

    );
}

const resultOfInput = getInputedNum();

resultOfInput
.then((argum) => {outputElement.textContent = argum;})

.catch(argum => outputElement.textContent = argum);
