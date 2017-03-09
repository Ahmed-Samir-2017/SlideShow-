var index = 1 ;
    showSlide(index);

// this's the function which i use to display the next image ...
function getSlide(n){
    showSlide(index = n);
}

function nexApre(n){
    showSlide(index += n);
}



// this function to display the image of the  slide 

function showSlide ( n ){
    
     var i ,
     slides = document.getElementsByClassName('item'),
     dots = document.getElementsByClassName('dot'),
     slideLen = slides.length ,
     dotLen = dots.length ;
    
    
    // if the user continue pressing on the next until it get more than number of images
    
    if (slideLen < n){
        index = 1 ;
    }
    // if the user continue pressing on the prev until it get less than number of images 
    else if (n < 1) {
        index = slideLen ;
    }
    
    // to give all the images display none to disapper them 
    for ( i = 0 ; i< slideLen ; i++ ){
        slides[i].style.display = "none";
    }
    
    
    for (i = 0 ; i < dotLen ; i++ ){
        dots[i].classList.remove('active');
    }
    
    slides[index - 1].style.display = "block" ;
    dots[index - 1].classList.add('active');
    
}



