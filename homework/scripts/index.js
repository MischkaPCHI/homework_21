const outputElement = document.querySelector('#timer');
const play = document.querySelector('#getnamebtn');
const cancelEnterPlayBtn = document.querySelector('#goaway');
const resetBtn = document.querySelector('#reset');

let enteredNum;

const getInputedNum = () => {
    return new Promise(
        
        (callBackSuccess, callBackReject) => {
        let inputElement = Math.round(Math.random() * 100);

        const handleClickSubmitNameBtn = () => {
            
            enteredNum = inputElement;
            if (enteredNum > 70) {
                callBackSuccess('Ура, мы выиграли: ' + enteredNum);
            } else {
                callBackReject('Не повезло, не подфартило: ' + enteredNum);
                alertSound.play();
            }
            console.log(enteredNum);
        }
        play.addEventListener('click', handleClickSubmitNameBtn);

        const handleClickRejectNameBtn = () => {
            callBackReject('Отказался играть');
            alertSound.play();
        }
        cancelEnterPlayBtn.addEventListener('click', handleClickRejectNameBtn);

        resetBtn.addEventListener('click', () => {

            play.removeEventListener('click', handleClickSubmitNameBtn);
            outputElement.textContent = '';
        });

    }

    );
}

resetBtn.addEventListener('click', () => {
    getInputedNum()
    .then((argum) => {outputElement.textContent = argum;})
    .catch(argum => outputElement.textContent = argum);
});
    
getInputedNum()
.then((argum) => {outputElement.textContent = argum;})
.catch(argum => outputElement.textContent = argum);
