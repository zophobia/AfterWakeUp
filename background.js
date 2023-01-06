const images = ["1637069205.jpg","1640008966 (1).jpg","1640008966 (2).jpg","1640008966 (3).jpg","1640008966.jpg","대한민국구석구석_강원_평창_선자령_3840x2160.png","대한민국구석구석_강원_평창_양떼목장_3840x2160.png","대한민국구석구석_대전_소제동_풍뉴가카페_3840x2160.png","대한민국구석구석_전남_보성군_장천리 메타세쿼이아길_3840x2160-min.png","wallpaperbetter.com_3840x2160 (1).jpg","wallpaperbetter.com_3840x2160 (2).jpg","wallpaperbetter.com_3840x2160 (3).jpg","wallpaperbetter.com_3840x2160 (4).jpg","wallpaperbetter.com_3840x2160.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);