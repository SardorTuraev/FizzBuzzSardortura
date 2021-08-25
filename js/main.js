// Fizzbuzz
var elformSubmit = document.querySelector('.js-form-submit');
var elinputValue = document.querySelector('.js-input-value');
var elResult = document.querySelector('.js-result');


elformSubmit.addEventListener('submit', function (evt){
    evt.preventDefault();
    
    if (Number(elinputValue.value % 5 === 0) && Number(elinputValue.value % 3 === 0))
    {
        elResult.textContent = 'FizzBuzz';
    }
    
    else if (Number(elinputValue.value % 3 === 0))
    {
        elResult.textContent = 'Buzz';
    }
    else if (Number(elinputValue.value % 5 === 0))
    {
        elResult.textContent = 'Fizz';
    }else {
        elResult.textContent = elinputValue.value;
    }
})

/* Kiritilgan son 5 ga bo'linsa - Fizz
Kiritilgan son 3 ga bo'linsa - Buzz
Ham 3 ga, ham 5 ga bo'linsa - FizzBuzz
3 ga ham, 5 ga ham bo'linmasa - raqamning o'zi */




