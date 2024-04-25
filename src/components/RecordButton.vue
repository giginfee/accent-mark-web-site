<template>
    <div ref="btns" class="record-container" @click="clickButton">
        <img v-if="!recording" src="/src/assets/microphone.png" alt="microphone">
        <img v-else src="/src/assets/stop_record1.png" alt="microphone">
    </div>
</template>

<script>
import audioRecorder from "/src/tools/audioRecorder.js"
export default {
    name: "RecordButton",

    data(){
      return{
          recording:false,
          isNew:true,
          stopTimeout:undefined,
      }
    },
    methods:{
        clickButton()
        {
            this.recording=!this.recording
            if(this.recording) {
                this.startRecord()
            }
            else {
                this.stopRecord()
            }
        },
        startRecord(){
            this.$emit("startRecord")
            this.stopTimeout = setTimeout(()=>this.clickButton(),3000)

            audioRecorder.start()
                .then()
                .catch(error => {
                    if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
                        alert("Ваш браузер не підтримує запис.");
                        return
                    }
                    console.log("An error occured " + error.name);

                    // to do: скинути все на початок
                    }
                );

        },
        stopRecord(){
            clearTimeout(this.stopTimeout);
            console.log("Stopping Audio Recording...");

            audioRecorder.stop()
                .then(audioAsblob => {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        let base64URL = e.target.result;
                        this.sendAudioToServer(base64URL)
                    };
                    reader.readAsDataURL(audioAsblob);
                    this.$emit("stopRecord")
                })
                .catch(error => {
                    console.log(error.name);

                });
        },

        sendAudioToServer(audio){
            console.log("audio")
            console.log(audio)
            const options = {
                method: 'POST',
                mode:"cors",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({audio}),
            };

            fetch('http://localhost:3000/record', options)
                .then(response =>
                    response.json()
                ).then(data=>{
                    console.log("Server answer")
                    console.log(data.answerInd)
                    this.$emit("voiceAnswer", data.answerInd)
                  })
                .catch(error => {
                    console.error('Error: ', error);
                });
        }
    },

}
</script>

<style scoped>

img {
    width: 95%;
}
.record-container{
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
</style>