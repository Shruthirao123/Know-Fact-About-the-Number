let userInput=document.getElementById('userInput');
let fact1=document.getElementById('fact');
let spinner=document.getElementById('spinner');
function display(fact){
    spinner.classList.add('d-none');
    fact1.textContent=fact;
    userInput.value="";
}
function fun1(event){
    if (event.key==='Enter'){
        spinner.classList.remove('d-none');
        let url="https://apis.ccbp.in/numbers-fact?number="+userInput.value;
        let options={
            method:"GET",
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let {fact}=data;
            display(fact);
        });
    }
}
userInput.addEventListener('keyup',fun1);
