<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div class="container">
            <div class="center"><h1>Тренажер для вивчення наголосів</h1></div>
            <p>Знати правильний наголос слів в українській мові потрібно не лише для успішної здачі контрольних іспитів,
                а й для гарної та літературно-правильної вимови навіть у повсякденному житті. </p>
            <p>Цей тренажер стане у нагоді при потребі підготовки до екзаменів та зробить процес вивченням максимально легким та цікавим.
                На сайті можна знайти усі ті слова, які винесені у списках слів з наголосами до НМТ, а також розділ з правилами,
                де написані закономірності, які допоможуть для легшого запам'ятовування. </p>
            <p>Кожне тренування - це квіз на 35 рандомних слів з усього переліку, де потрібно обрати правильну відповідь,
                а в кінці отримати свій результат.</p>
            <p>Для зареєстрованого користувача відкривається новий простір для навчання.
                По-перше, у розділі тренування він може отримувати підказки у вигляді правила, яке застосовується до окремого слова. А головне - це система прогресу, яка включає в себе вивчення слів за рівнями. Як це працює? При виборі правильної відповіді без підказки у режимі тренування слово переходить на наступний рівень, це означає, що наступний раз це слово може з'явитися лише через певну кількість днів.
            </p>

            <ul  >
                <li>Перший рівень – через 2 днів</li>
                <li>Другий рівень – через 7 днів</li>
                <li>Третій рівень – через 15 днів</li>
            </ul>
            <p>Якщо ж відповідь було обрано неправильно, то слово переходить на попередній рівень.</p>
            <p>Таким чином процес навчанням стає більш ефективним, оскільки слова, для яких користувач легко визначає відповідь, не з'являються у процесі тренування, а попадаються лише тоді, коли варто їх нагадати через певний проміжок часу.
            </p>
            <p>На сторінці власного профілю користувач може бачити список усіх слів по рівнях, а також загальний прогрес вивчення, де 100% - це тоді, коли усі слова перейшли на третій рівень.</p>
            <div class="center"><h4>Тому пора зареєструватись та почати вивчення наголосів у новому форматі!
            </h4></div>
            

        </div>


    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBlock from "@/components/LeftBlock.vue";


export default {
    name: "MainPage",
    components: {LeftBlock,Header},
    data(){
        return{
        }
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
    width: 2px;
}
.container{
    scroll-behavior: smooth;
    overflow: auto;

}
h1{
    margin-bottom: 0;
}
p{
    margin-bottom: 0;
}
ul {
    list-style-type: circle;
}
.center{
    display: flex;
    justify-content: center;

}


</style>