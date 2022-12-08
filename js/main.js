
const show = () => {
    const video = document.getElementById("video");
    const audio = document.getElementById("audio");
    video.style.display = "block";
    audio.style.display = "block";
}

const hide = () => {
    const video = document.getElementById("video");
    const audio = document.getElementById("audio");
    video.style.display = "none";
    audio.style.display = "none";
}

//
// const rec1 = [101,"Kevin Smith","JavaScript 2","A-","Winter","2019"];
// const rec2 = [102,"Lucy Lane","JavaScript 2","A","Winter","2019"];
//
// function return2DArray(rec1, rec2) {
//
//     return new Array(rec1,rec2);
//
// }
//
// console.log(return2DArray(rec1,rec2));
