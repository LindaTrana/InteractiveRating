let numberContainer = document.querySelector('.rating-state_number-container');
let rateNumber = document.querySelector('.thankyou-state_result--number');
let submitBtn = document.querySelector('.rating-state_button');
let ratingState = document.querySelector('.rating-state')
let thankyouState = document.querySelector('.thankyou-state')

numberContainer.addEventListener('click', event =>{
  let selected = event.target.innerText;
  rateNumber.innerText = selected;

  if (selected){
    submitBtn.addEventListener('click', ()=>{
     ratingState.style.display='none';
     thankyouState.style.display='flex';
    
    })

  }

})
