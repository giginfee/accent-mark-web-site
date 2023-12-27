let hint=document.getElementsByClassName("hint-block")[0]
let questionMark= document.getElementById("question-mark")
let rule= document.getElementById("rule")
let animationDuration=400

hint.addEventListener("mouseenter", mouseOver)
hint.addEventListener("mouseleave", mouseOut)

let timers =[]
function mouseOver(){
    clearAllTimers()
    questionMark.style.opacity = "1";
    rule.style.opacity = "0";
    rule.style.display = "none";
    questionMark.style.display = "block";
    timers.push(changeOpacity(questionMark, animationDuration/2, 1))
    timers.push( setTimeout(()=>{
        questionMark.style.display = "none";
        rule.style.display = "block";

        timers.push(changeOpacity(rule, animationDuration/2, 0))

    }, animationDuration))

}
function mouseOut(){
    clearAllTimers()
    questionMark.style.opacity = "0";
    rule.style.opacity = "1";
    questionMark.style.display = "none";
    rule.style.display = "block";

    timers.push(changeOpacity(rule, animationDuration / 7, 1))
    timers.push(setTimeout(() => {
        questionMark.style.display = " block ";
        rule.style.display = "none";
    }, animationDuration / 3))

    timers.push(setTimeout(() => {
        timers.push(changeOpacity(questionMark, animationDuration/2, 0))

    }, animationDuration))

}

function clearAllTimers(){
    timers.forEach(x=> {
        clearTimeout(x);
        clearInterval(x);
    })
}

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
    return intervalId
}
