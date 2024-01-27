const form = document.querySelector('form')
// this usecase will give an empty
const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default action
    const height = parseInt(document.querySelector('#height').value)
    
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height: ${height}`;        
    }
    else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight: ${weight}`;        
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // results.innerHTML = `<Span> ${bmi} </span>`;
        if(bmi < 18.6){
            results.innerHTML = `<Span> ${bmi} - Under Weight </span>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `<Span> ${bmi} - Normal Weight </span>`;
        }
        else{
            results.innerHTML = `<Span> ${bmi} - over Weight </span>`;
        }

    }



    
    
})
.toExponential





xxz