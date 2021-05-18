/* navline service */

const initNavlineService = () => {

    const circles = document.querySelectorAll('.page__nl-circle');

    let activeArticle = [
        ...document.querySelectorAll('.page__navline')[currentPage].children
    ][0];

    const addActiveClass = target => {

        circles.forEach(item => item.classList.remove('page__nl-circle--active'));
        target.classList.add('page__nl-circle--active');
    }

    addActiveClass(activeArticle);

    circles.forEach(item => item.addEventListener('click', e => {

        const paragraphs = document.querySelectorAll(`.${e.target.dataset.article}`);

        anim(pageContents[currentPage], {
            scrollTo: paragraphs[currentPage].offsetTop
        }, .8);

        addActiveClass(e.target);
    }));

    pageContents[currentPage].addEventListener('wheel', e => {

        const circles = [
            ...document.querySelectorAll('.page__navline')[currentPage].children
        ];

        circles.forEach(circle => {

            const selector = `.${circle.dataset.article}`;
            const paragraph = document.querySelectorAll(selector);

            if (
                pageContents[currentPage].clientHeight / 2 +
                pageContents[currentPage].scrollTop >
                paragraph[currentPage].offsetTop
            )
                activeArticle = circle;
        });

        addActiveClass(activeArticle);
    });
}
