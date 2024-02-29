const inputElement = document.querySelector('#inputname');
const getNameBtn = document.querySelector('#getnamebtn');
const cancelEnterNameBtn = document.querySelector('#goaway');

let enteredNameString;

const getInputedName = () => {
    return new Promise(
        
        (callBackSuccess, callBackReject) => {

        const handleClickSubmitNameBtn = () => {
            enteredNameString = inputElement.value;
            callBackSuccess(enteredNameString);
        }
        getNameBtn.addEventListener('click', handleClickSubmitNameBtn);

        const handleClickRejectNameBtn = () => {
            callBackReject('Отказался вводить');
        }
        cancelEnterNameBtn.addEventListener('click', handleClickRejectNameBtn);
    }
    
    );
}

const resultOfInput = getInputedName();

resultOfInput
.then((argum) => {console.log(argum); return 555;})

.catch(argum => console.log(argum));


// .finally(() => {console.log('finally')});

// console.log(resultOfInput);

// function helloMaker(name) {
//     console.log(`Hello ${name}`)
// }
