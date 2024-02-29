const inputElement = document.querySelector('#inputname');
const getNameBtn = document.querySelector('#getnamebtn');
const cancelEnterNameBtn = document.querySelector('#goaway');

let enteredNameString;

const getInputedName = (helloMaker) => {
    const handleClickSubmitNameBtn = () => {
        enteredNameString = inputElement.value;
        helloMaker(enteredNameString);
    }
    getNameBtn.addEventListener('click', handleClickSubmitNameBtn);
}

getInputedName(helloMaker);

//helloMaker(enteredName);


function helloMaker(name) {
    console.log(`Hello ${name}`)
}




// // const enteredName = prompt('Введите имя:');


// const inputElement = document.querySelector('#inputname');
// const getNameBtn = document.querySelector('#getnamebtn');
// const cancelEnterNameBtn = document.querySelector('#goaway');


// const getInputName = () => {
//     let enteredNameString;

//     const handleClickSubmitNameBtn = () => {
//         enteredNameString = inputElement.value;
//         helloMaker(enteredNameString);
//     }

//     getNameBtn.addEventListener('click', handleClickSubmitNameBtn);

//     // return enteredNameString;
// }


// const enteredName = getInputName();


// helloMaker(enteredName);

// function helloMaker (name){
//     console.log(`Hello ${name}`);
// }

