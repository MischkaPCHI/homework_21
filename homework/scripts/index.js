const outputElement = document.querySelector('#timer');
const play = document.querySelector('#getnamebtn');
const cancelEnterPlayBtn = document.querySelector('#goaway');
const resetBtn = document.querySelector('#reset');


const inputElement = Math.round(Math.random() * 100);
let enteredNameString;

const getInputedNum = () => {
    return new Promise(
        
        (callBackSuccess, callBackReject) => {
        
        const handleClickSubmitNameBtn = () => {
            enteredNameString = inputElement;
            if (enteredNameString > 70) {
                callBackSuccess('Ура, мы выиграли: ' + enteredNameString);
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
.then((argum) => {outputElement.textContent = argum})

.catch(argum => outputElement.textContent = argum);
