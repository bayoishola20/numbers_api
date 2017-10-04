let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

/* XHR Requests */

// function randomType() {
// 	if (document.getElementById('triviaRadio').checked){
// 		getTriviaFactAjax();
// 	} else if (document.getElementById('yearRadio').checked){
// 		getYearFactAjax();
// 	} 
// }

// let numberInput = document.querySelector('#numberInput');

// numberInput.addEventListener('input', getTriviaFactAjax);

// function getTriviaFactAjax(){
//     let number = numberInput.value;
    
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+number);

//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }
    
//     xhr.send();
// }


// numberInput.addEventListener('input', getYearFactAjax);

// function getYearFactAjax(){
//     let number = numberInput.value;
    
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+number+'/year');

//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }
    
//     xhr.send();
// }


/* FETCH API */

function randomType() {
	if (document.getElementById('triviaRadio').checked){
		getTriviaFactFetch();
	} else if (document.getElementById('yearRadio').checked){
		getYearFactFetch();
	} 
}

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getTriviaFactFetch);

function getTriviaFactFetch(){
    let number = numberInput.value;

    // fetch returns a promise
    fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
            .then(data => {
                if(number != ''){
                    fact.style.display = 'block';
                    factText.innerText = data;
                }
            })
                .catch(err => console.log(err));
}

numberInput.addEventListener('input', getYearFactFetch);

function getYearFactFetch(){
    let number = numberInput.value;

    // fetch returns a promise
    fetch('http://numbersapi.com/'+number+'/year')
        .then(response => response.text())
            .then(data => {
                if(number != ''){
                    fact.style.display = 'block';
                    factText.innerText = data;
                }
            })
                .catch(err => console.log(err));
}