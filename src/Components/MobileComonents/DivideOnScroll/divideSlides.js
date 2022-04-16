export const divideSlides = () => {
    const section = document.querySelector('#divide-on-scroll');
    const side1 = document.querySelector('#divideonscroll-video-wrapper-one');
    const side2 = document.querySelector('#divideonscroll-video-wrapper-two');
    const hiddenTextContent = document.querySelector('#divideonscroll-text-content');

    const sectionFromTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    let sectionStartingPoint = (sectionFromTop - sectionHeight / 2) + sectionHeight * 1.2;

    const moveSlidesRightLeft = (scrollFromTop) => {
        side1.style.left = -(scrollFromTop - sectionStartingPoint) * .3 < 0 ? -(scrollFromTop - sectionStartingPoint) * .3 + 'vw' : 0;
        side2.style.left = ((scrollFromTop - sectionStartingPoint) * .3) > 0 ? (scrollFromTop - sectionStartingPoint) * .3 + 'vw' : 0;
    }


    window.onscroll = function () {
        let scrollGoingUp = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;

        const scrollFromTop = window.scrollY;
        const computedLeftSidePlus = window.getComputedStyle(side2).left.slice(0, -3);
        const computedLeftSideMinus = window.getComputedStyle(side1).left.slice(0, -3);

        if (scrollFromTop > sectionStartingPoint &&
            scrollFromTop < sectionStartingPoint + sectionHeight &&
            !scrollGoingUp) {
            moveSlidesRightLeft(scrollFromTop);
            if (computedLeftSidePlus > window.innerWidth * .4) hiddenTextContent.classList.add('divideonscroll__text-content--active');
        }

        if ((scrollFromTop < sectionStartingPoint + sectionHeight) &&
            scrollGoingUp) {
            if (computedLeftSidePlus >= 0 && computedLeftSideMinus <= 0) {
                moveSlidesRightLeft(scrollFromTop);
                if (computedLeftSidePlus < window.innerWidth * .5) hiddenTextContent.classList.remove('divideonscroll__text-content--active');
            }
        }
    }
}