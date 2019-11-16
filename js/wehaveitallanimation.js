const rotategroup = document.querySelector('.rotategroup');

TweenMax.to(rotategroup, 78, {
    rotation: -360,
    transformOrigin: "50% 50%",
    repeat: -1,
    ease: Linear.easeNone
});



//CSS
// .rotategroup{
//     transform: rotate(360deg);
//     transform - origin: 50 % 50 %;
//     animation: spin 78s linear infinite;
// }
// @keyframes spin {
//     0 % { transform: rotate(0deg); }
//     100 % { transform: rotate(-360deg); }
// }