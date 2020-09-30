/* 
<div class= wrapperSelector>
    <div class= fieldSelector>
        <div class= slideSelector ><img src="img/solutions/img_for_slider.jpg" alt="slider"></div>
        <div class= slideSelector ><img src="img/solutions/img_for_slider2.jpg" alt="slider"></div>
        <div class= slideSelector ><img src="img/solutions/img_for_slider3.jpg" alt="slider"></div>
    </div>
   
</div>
<div class= nextSelector>
    <img src="" alt="">
</div>
<div class= prevSelector>
    <img src="" alt="">
</div>
 */

function Slider({
            wrapperSelector,
            fieldSelector,
            slideSelector,
            nextSelector, 
            prevSelector}) {

    const  
        windowSlider = document.querySelector(wrapperSelector),
        sliderField = document.querySelector(fieldSelector),
        slides = document.querySelectorAll(slideSelector),
        widthSlide = deleteNotDigital(window.getComputedStyle(windowSlider).width),
        nextSlide = document.querySelector(nextSelector),
        prevSlide = document.querySelector(prevSelector),
        copyLastSlide = slides[slides.length - 1].cloneNode(true),
        copyFirstSlide = slides[0].cloneNode(true);
        
    let index = 0,
        positInit = -widthSlide,
        allowShift = true;

    sliderField.style.left = `${positInit}px`;
    sliderField.style.width = `${widthSlide * slides.length}px`;
    windowSlider.style.overflow = 'hidden';
    
    sliderField.append(copyFirstSlide);
    sliderField.prepend(copyLastSlide);

    function deleteNotDigital(str){
        return Math.round(+str.replace(/[A-Za-z]/g, ''));
    }
        
    function shiftSlide(dir) {
        if(allowShift){
            sliderField.classList.add('shifting');

            positInit = sliderField.offsetLeft;

            if(dir == 1){
                ++index;
                sliderField.style.left = `${positInit - widthSlide}px`;
            }else if(dir == -1){
                --index;
                sliderField.style.left = `${positInit + widthSlide}px`;
            }
        }
        allowShift = false;
    }

    function checkIndex(){
        sliderField.classList.remove('shifting');
        
        if(index == slides.length){
            index = 0;
            positInit = -widthSlide;
            sliderField.style.left = `${positInit}px`;
        }else if(index == -1){
            index = slides.length - 1;
            positInit = -widthSlide;
            sliderField.style.left = `${positInit * slides.length}px`;
        }
        allowShift = true;
    }

    prevSlide.addEventListener('click', () => shiftSlide(-1));
    nextSlide.addEventListener('click', () => shiftSlide(1));
    sliderField.addEventListener('transitionend', checkIndex);
}