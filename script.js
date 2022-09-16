const itemClick__1 = document.querySelector(".item__1");
const itemClick__2 = document.querySelector(".item__2");
const actionImg__1 = document.querySelector(".item__action-1");
const actionImg__2 = document.querySelector(".item__action-2");
const actionCirculImg__1 = document.querySelector(".circul__img-1");
const actionCirculImgAction__1 = document.querySelector(".circul__img-action-1");
const actionCirculImg__2 = document.querySelector(".circul__img-2");
const actionCirculImgAction__2 = document.querySelector(".circul__img-action-2");


itemClick__1.addEventListener('click', (e) => {
    actionImg__1.classList.toggle('item__action-action_1');
    actionCirculImg__1.classList.toggle('circul__img-hidden')
    actionCirculImgAction__1.classList.toggle('circul__img-action-1')
})


itemClick__2.addEventListener('click', (e) => {
    actionImg__2.classList.toggle('item__action-action_2');
    actionCirculImg__2.classList.toggle('circul__img-hidden');
    actionCirculImgAction__2.classList.toggle('circul__img-action-2');
})