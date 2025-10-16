
    function handleCost(event){
    console.log(event.key)
    if(event.key === 'Enter'){
      calculateTotal();
    }

    }

    function calculateTotal(){
      const inputElement = document.querySelector(`.js-cost-input`);

     let cost =  Number(inputElement.value);
     console.log(cost);

      if(cost < 40)
      {
      cost = cost + 10;
      }
       document.querySelector('.js-total-cost')
       .innerHTML =  `£${cost}`;

    }

    function subscribe(){
     const buttonElememt = document
      .querySelector('.js-subscribe-button');

    if(buttonElememt.innerText === 'Subscribe'){
      buttonElememt.innerHTML = 'Subscribed'; 
      buttonElememt.classList.add('is-subscribed');
    }
    else{
      buttonElememt.innerHTML = 'Subscribe';
      buttonElememt.classList.remove('is-subscribed');
     }

    }
