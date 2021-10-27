let flag = 0; //flag is the variable which tells us what number element of the slides array to show since an html collection of four slides are stored in it

// calling slideshow for the first time with default value of 0 
slideshow(flag);

function controller(x)
{
    flag += x;
    // if someone has clicked the left button then -1 will be done
    // and if someone has clicked the right button +1 will be done to the value of flag

    slideshow(flag); //passing the flag variable througth the slide show function
}


function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){ //slides.lenth will be one more than the index of the last element of the array slides
        flag = 0;
        num = 0;
    }
    else if( num < 0 ){
        num = slides.length - 1;
        flag = slides.length - 1;
    }

    // here first i blocked the display of all the slides using the for loop
    for(elem of slides){
        elem.style.display = "none";
    }

    // then we are blocking the block statement of only the slide that is passed by the controller function to make it visible to the user
    slides[num].style.display = "block";
}