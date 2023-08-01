let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, i) =>{
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++) {
            if(i <= index){
                ratingStarInput[i].src = 'img/star-fill.png';
            } else{
                ratingStarInput[i].src = 'img/star.png';
            } 
        }
    })
})