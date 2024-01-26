<template>
    <div class="progress-line">
        <div class="progress-line blue-progress-line">
            <div class="point corner-point start-point green" > </div>
            <div id="point25" class="point small-point point25 " v-bind:class="{ green: progress>=25 }"> </div>
            <div id="point50"  class="point small-point point50 " v-bind:class="{ green: progress>=50 }"> </div>
            <div id="point75" class="point small-point point75 " v-bind:class="{ green: progress>=75 }"> </div>
            <div id="end-point" class="point corner-point end-point" v-bind:class="{ green: progress===100 }"></div>
        </div>
        <div class="progress-line green-progress-line" ref="line" >
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressLine",
    props:{
        progress:{
            type:Number,
            required:true
        }
    },
    methods: {
        changeWidth(e) {
            this.$refs.line.style.width = (+this.progress+1)+'%';
        }
    },
    updated() {
        this.changeWidth()
    }
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
    border-bottom: 4px solid #BDD9EC;
    margin: 30px 0;
}
.progress-line{
    position: relative;
    border-radius: 3px;

}

.green-progress-line{
    border-bottom: 4px solid #3EBC33;
    margin: -34px 0 30px 0;
    width: 0;
}
.progress-line{
    position: relative;
}
.progress-line{
    flex: 2
}
</style>