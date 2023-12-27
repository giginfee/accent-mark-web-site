let hint=document.getElementsByClassName("hint-block")[0]
let questionMark= document.getElementById("question-mark")
let rule= document.getElementById("rule")
let animationDuration=400

hint.addEventListener("mouseenter", (e)=>{
    changeOpacity(questionMark, animationDuration, 1)
    setTimeout(()=>{
        questionMark.className+=" hidden";
        rule.classList.toggle("hidden");
        changeOpacity(rule, animationDuration/2, 0)
    }, animationDuration)




})
hint.addEventListener("mouseleave", (e)=>{
        changeOpacity(rule, animationDuration / 7, 1)
        setTimeout(() => {
            rule.className+=" hidden";
            questionMark.classList.toggle("hidden");
        }, animationDuration / 3)

        setTimeout(() => {
            changeOpacity(questionMark, animationDuration, 0)
        }, animationDuration)

})

function changeOpacity(div, duration, opacityStart) {
    let opacity = opacityStart;
    const startTime = new Date().getTime();

    const intervalId = setInterval(function () {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime;

        if (elapsed >= duration) {
            clearInterval(intervalId);
        } else if(opacityStart ===1){
            opacity = 1 - elapsed / duration;
            div.style.opacity = opacity;
        }else if(opacityStart ===0){
            opacity = (elapsed / duration);
            div.style.opacity = opacity;
        }
    }, 10);

    // Clear the interval in case the animation duration is longer than expected
    setTimeout(function () {
        clearInterval(intervalId);
        div.style.opacity = (opacityStart ===0)?1:0;
    }, duration);
}
