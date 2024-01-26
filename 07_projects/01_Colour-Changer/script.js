const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector("body")
// console.log(body);

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click',(e) =>{
        // console.log(e);
        // console.log(e.target);

        const id = e.target.id;

        switch (id) {
            case 'grey':
                body.style.backgroundColor= "grey";                
                break;
            case 'white':
                body.style.backgroundColor= "white";                
                break;
            case 'blue':
                body.style.backgroundColor= "blue";                
                break;
            case 'yellow':
                body.style.backgroundColor= "yellow";                
                break;
        }

    })
});