/* navline service */

const initNavlineService = () => {

    let activeArticle = [
        ...document.querySelectorAll('.page__navline')[c].children
    ][0];

    const addActiveClass = target => {

        navlineOptionButtons.forEach(item => {
            item.classList.remove('page__nl-circle--active');
        });

        target.classList.add('page__nl-circle--active');
    }

    addActiveClass(activeArticle);

    navlineOptionButtons.forEach(item => item.addEventListener('click', e => {

        const selector = `.${e.target.dataset.article}`;
        const paragraphs = document.querySelectorAll(selector);

        anim(pageContents[c], {
            scrollTo: paragraphs[c].offsetTop
        }, .8);

        addActiveClass(e.target);
    }));

    pageContents[c].addEventListener('wheel', e => {

        const navlineOptionButtons = [
            ...document.querySelectorAll('.page__navline')[c].children
        ];

        navlineOptionButtons.forEach(circle => {

            const selector = `.${circle.dataset.article}`;
            const paragraph = document.querySelectorAll(selector);

            if (
                pageContents[c].clientHeight / 2 +
                pageContents[c].scrollTop >
                paragraph[c].offsetTop
            )
                activeArticle = circle;
        });

        addActiveClass(activeArticle);
    });
}
