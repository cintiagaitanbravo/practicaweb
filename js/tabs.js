const featuresLinks = document.querySelector('.features__tabs');
const sections = document.querySelectorAll('.features__section');

let currentLink = document.querySelector('.features__link');

featuresLinks.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;

    console.log(currentLink.getAttribute('data-tab'));

    //console.log(e.target.classList.value);

    if (IsActive(currentElement, 'features__link')){
        currentLink.classList.remove('features__link--active');
        currentElement.classList.add('features__link--active');

        let currentSection = Number(currentLink.getAttribute('data-tab'));
        let nextSection = Number(currentElement.getAttribute('data-tab'));

        sections[currentSection].classList.remove('features__section--active');
        sections[nextSection].classList.add('features__section--active');
        

        currentLink = currentElement;
    }


});

function IsActive(element, string){
    return element.classList.value.includes(string);

}
