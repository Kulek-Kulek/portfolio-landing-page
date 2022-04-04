export const divideSlides = () => {
    const section = document.querySelector('#divideonscroll');

    const side1 = document.querySelector('#divideonscrollVideoWrapper1');
    const side2 = document.querySelector('#divideonscrollVideoWrapper2');

    const sectionFromTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    const side1Width = side1.clientWidth;
    const side2Width = side1.clientWidth;

    let pix = 0;
    window.onscroll = function (e) {
        // print "false" if direction is down and "true" if up
        let scroll = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;
        const top = window.pageYOffset || document.documentElement.scrollTop;
        const computedWidth = window.getComputedStyle(side1).left.slice(0, -3);
        console.log(window.getComputedStyle(side1).left);

        if (top > sectionFromTop - sectionHeight * .15 && !scroll) {
            pix = ++pix;
            side1.style.left = -pix * 30 + 'px';
            side2.style.left = pix * 30 + 'px';
        }
        // if (top > sectionFromTop - sectionHeight * .15 && scroll) {
        //     pix = ++pix;
        //     side1.style.left = +computedWidth + pix + 'px';
        //     side2.style.left = +computedWidth - pix + 'px';
        //     console.log(computedWidth);
        // }
    }

}