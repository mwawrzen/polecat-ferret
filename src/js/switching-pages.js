/* changing pages with scroll */

horizontal = true;

window.addEventListener('wheel', e => {

    if (horizontal) {

        if (
            e.deltaY < 0 &&
            currentPage > 0 &&
            currentPage <= pagesNumber
        )
            currentPage--;

        else if (
            e.deltaY > 0 &&
            currentPage >= 0 &&
            currentPage < pagesNumber
        )
            currentPage++;

        navTo(currentPage);
    }
});
