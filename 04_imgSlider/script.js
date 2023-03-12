const slide = document.querySelector("#slide");
let index = 0;

const imgsrc = [
  "https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118__480.jpg",
  "https://cdn.pixabay.com/photo/2018/07/06/16/57/the-labour-code-3520806__480.jpg",
  "https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063__480.jpg",
  "https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515__480.jpg",
];

const goNext = () => {
  if (index === imgsrc.length - 1) {
    index = 0;
  } else {
    index++;
  }

  slide.src = imgsrc[index];
};

const goPrev = () => {
  if (index === 0) {
    index = imgsrc.length - 1;
  } else {
    index--;
  }
  slide.src = imgsrc[index];
};
