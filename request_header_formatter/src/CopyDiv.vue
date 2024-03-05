<template>
    <div class="output">
        <p>複製下面的格式，就可以到 PostMan bulk 貼上了</p>
        <p>Copy the format below, and you can paste them into Postman in bulk</p>
        <div class="copy-zone">
            <button type="button" class="btn btn-primary" @click="copyToClipboard()">複製(Copy)</button>
            <!-- <transition name="fade"> -->
                <div v-if="isCopySuccess" id="copySuccessMessage" class="copy-success-message">
                    已複製成功
                </div>
            <!-- </transition> -->

        </div>
        <textarea v-model="outputText" class="formatted-text" id="outputText" rows="4" cols="50" placeholder="Sec-Ch-Ua:Chromium;v=118, Google Chrome;v=118, Not=A?Brand;v=99
Sec-Ch-Ua-Mobile:?0
Sec-Ch-Ua-Platform:Windows"></textarea>
    </div>
</template>

<script setup>

import { ref } from 'vue';
let outputText = ref('')
let isCopySuccess = ref(false)

const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText.value)
    isCopySuccess.value = true;
    setTimeout(() => {
        isCopySuccess.value = false;
    }, 2000); // Hide the message after 2 seconds
}
</script>

<style scoped>
.copy-success-message {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    opacity: 50;
    transition: opacity 0.3s;
    margin-left: 10px;
    /* 設置左側的間距，使其與按鈕分開 */
}
.copy-zone {
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
    /* 垂直置中 */
}
.output {
    width: 500px;
    height: 20%;
    /* background-color: #a0a0a0; */
    /* Output部分背景色 */
}
</style>
