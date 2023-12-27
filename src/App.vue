<script setup>

</script>

<template>
    <div class="left-block">
        <div  class="logo">
            <a href="/">
                <img src="/src/assets/logo.svg" alt="logo">
            </a>


        </div>
        <div class="words-box">
            <p>
                Слова
            </p>
            <div class="words-list">
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a><a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a><a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a><a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a><a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a><a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a><a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a><a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
                <a>Слово</a>
            </div>

        </div>


    </div>
    <div class="right-side">
        <div class="header">
                <a href="/" class="header-option">Тренажер</a>
                <a href="/" class="header-option">Правила</a>
                <div class="account-box">
                    <a href="/" class="exit-button">Вийти</a>
                    <a href="/" class="avatar-link">
                        <img class="avatar" src="/src/assets/avatar.svg">
                    </a>
                </div>
            </div>
        <div class="main">
            <div class="progress-line">
                <div class="blue-progress-line">
                    <div class="point corner-point start-point green"> </div>
                    <div id="point25" class="point small-point point25 green"> </div>
                    <div id="point50"  class="point small-point point50 "> </div>
                    <div id="point75" class="point small-point point75 "> </div>
                    <div id="end-point" class="point corner-point end-point"></div>
                </div>
                <div class="green-progress-line">
                </div>
            </div>

            <div class="word-card">
                <div class="word-with-options">
                    <div class="word">
                        СЛОВО
                    </div>
                    <div class="options">
                        <button class="option">Варіант 1</button>
                        <button class="option">Варіант 2</button>
                        <button class="option">Варіант 3</button>
                        <button class="option">Варіант 4</button>
                    </div>

                </div>
                <div class="levels">
                    <div class="level-point orange"></div>
                    <div class="level-point"></div>
                    <div class="level-point"></div>
                    <div class="level-point"></div>
                </div>
                 <div class="hint-block">
                     <div id="question-mark">?</div>
                     <div id="rule" class="hidden">Правило що пояснює чому слово має такий наголос</div>
                </div>


            </div>
        </div>
    </div>

</template>

<style scoped>
#rule{
    opacity: 0;
    font-size: 18px;
    font-weight: normal;
    text-align: start;
}

.hidden{
    display: none;
}

.hint-block{
    /*align-self:start;*/
    text-align:center;
    color: white;
    background-color: #89ADC7;
    padding: 1% 2%;
    border-radius: 16px;
    font-weight: bold;
    font-size: 24px;
    height: max-content;
    min-height: 0;
    transition: min-height 0.5s, flex 0.5s ;
    max-height: fit-content;
    flex:0;
}

.hint-block:hover{
    text-align: start;
    box-sizing: border-box;
    cursor: pointer;
    flex:1;
    min-height:100%;
}


.hint-block:hover #question-mark{
    /*transition: opacity 0.35s;*/
    /*opacity: 0;*/

}

/*.hint-block:hover #rule{*/
/*    !*transition: opacity 0.5s;*!*/
/*    opacity:1;*/
/*}*/



.levels{
    padding: 10px 8px;
    display: flex;
    flex-direction: column;
    gap: 1%;
}

.level-point{
    width: 7px;
    height: 7px;
    border-radius: 10px;
    background-color: #D9D9D9;
}
.orange{
    background-color: #F07F17;
}



.word-card{
    padding-top: 4%;
    display: flex;
    flex-direction: row;
    height: 40%;
    min-height: 185px;
}
.word-with-options{
    display: flex;
    flex-direction: column;
}
.word{
    min-height: 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: bold;
    border-radius: 16px;
    border: 4px solid #3171A0;
    flex: 0.3;
    background-color: white;
    margin: 0 0 4% 0;
}
.options{
    flex: 1;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 4%;
    row-gap: 9%;

}
.option{
    padding: 10px 20px;

    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: 300;
    box-sizing: border-box;
    border-radius: 16px;
    border-width: 0;
    background-color: #3171A0;
    transition: background-color 0.3s;
}
.option:hover{
    cursor: pointer;
    background-color: rgba(49, 113, 160, 0.75);
}
.option:active{
    cursor: pointer;
    background-color: rgba(49, 113, 160, 1);
}


.point{
    top: -6px;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 30px;
    background-color: #BDD9EC;
}
.small-point{
    width: 9px;
    height: 9px;
    top: -2.5px;

}
.point25{
    margin-left: 25%;
}.point50{
    margin-left: 50%;
}.point75{
    margin-left: 75%;
}
.green{
    background-color: #3EBC33;
}

.corner-point{

}
.start-point{

}
.end-point{
    right: 0;
}
.blue-progress-line{
    position: relative;
    border-bottom: 4px solid #BDD9EC;
    border-radius: 3px;
    margin: 30px 0;

}
.green-progress-line{
    position: relative;
    border-bottom: 4px solid #3EBC33;
    border-radius: 3px;
    margin: -34px 0 30px 0;
    width: 27%;

}
.progress-line{
    position: relative;
}
/*.word-with-options, .progress-line{
    width: 70%;
}*/
.word-with-options, .progress-line{
flex: 2
}





.avatar-link{
    display: flex;
    align-items: center;
    justify-content: center;
}
.avatar{
    width: 90%;
}


.exit-button{
    margin-left: 2%;
    font-size: 14px;
    background-color: #D3DFE8;
    border-radius: 7px;
    padding: 8px 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s,color 0.3s ;
}

.exit-button:hover{
    background-color: #89ADC7;
    color:#D3DFE8;
}
.account-box{
    flex: 1;
    display: flex;
flex-direction: row-reverse;
    align-items: center;

}
a{
    color: inherit;
    text-decoration-line: none;
}
.words-box{
    padding: 35px  0 18px 10px;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.words-list{
    flex: 1;
    overflow: auto;
    scroll-behavior: smooth;
    direction: rtl;
}
.words-list a{
    margin-left: 5px;
    display: block;
    font-size: 18px;
    font-weight: 400;
    direction: ltr;

}
.words-box p{
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 10px 0;
}
.logo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
.right-side{
    min-width: 350px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 4%;
}
.header {
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #D3DFE8;
    display: flex;
    flex-direction: row;
}




.header-option{
    font-size: 14px;
    display: flex;
    margin-right: 7%;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s;
}
.header-option:hover{
    font-weight: 500;
    margin-right: 69px;
    transform: translateY(-10%);

}
.left-block{
    width: 250px;
    height: 100%;
    background-color: #D4DFE8;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;

}
.main{
    width: 100%;
    flex: 1;

}

.logo a img{
    width: 80%;
}
.logo a{
    display: flex;
    align-items: center;
    justify-content: center;
}

/*@media (min-width: 1024px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/
/*}*/

::-webkit-scrollbar {
    width: 2px;
}

::-webkit-scrollbar-track {
    background: rgba(56, 56, 56, 0.2);

}

::-webkit-scrollbar-thumb {
    background: rgba(56, 56, 56, 0.39);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(56, 56, 56, 0.5);
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(56, 56, 56, 0.39);
}
</style>
