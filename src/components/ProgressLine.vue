<template>
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
</template>

<script>
export default {
    name: "ProgressLine"
}
</script>

<style scoped>

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
.progress-line{
    flex: 2
}
</style>