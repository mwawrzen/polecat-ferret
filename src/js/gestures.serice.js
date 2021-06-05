let position = 0;

window.addEventListener('touchstart', e => {

    position = e.touches[0].screenX;
});

window.addEventListener('touchend', e => {

    if (horizontal) {
        const endPosition = e.changedTouches[0].screenX;
        if (endPosition > position) {
            if (c <= pagesNumber && c > 0)
                c--;
        } else if (endPosition < position) {
            if (c < pagesNumber)
                c++;
        }
        navTo(c);
    }
});
