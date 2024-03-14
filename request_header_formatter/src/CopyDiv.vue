<template>
    <div class="output">
        <p>複製下面的格式，就可以到 PostMan bulk 貼上了</p>
        <p>Copy the format below, and you can paste them into Postman in bulk</p>
        <div class="copy-zone">
            <button type="button" class="btn btn-primary" @click="copyToClipboard()">複製(Copy)</button>
            <transition name="fade">
                <div v-if="isCopySuccess" id="copySuccessMessage" class="copy-success-message">
                    已複製成功
                </div>
            </transition>
        </div>
        <textarea v-model="storeData" class="formatted-text" id="outputText" rows="4" cols="50" placeholder="Sec-Ch-Ua:Chromium;v=118, Google Chrome;v=118, Not=A?Brand;v=99
Sec-Ch-Ua-Mobile:?0
Sec-Ch-Ua-Platform:Windows"></textarea>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
let isCopySuccess = ref(false);

const copyToClipboard = () => {
    navigator.clipboard.writeText(store.getters.getData);
    isCopySuccess.value = true;
    setTimeout(() => {
        isCopySuccess.value = false;
    }, 1000); // Hide the message after 2 seconds
};

const storeData = computed(() => store.state.data);
</script>

<style scoped>
.copy-success-message {
    background-color: #4CAF50;
    color: #fff;
    padding: 8px;
    border-radius: 5px;
    opacity: 1;
    transition: opacity 0.5s;
    margin-left: 10px;
}

.copy-zone {
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
}

.output {
    width: 500px;
    height: 20%;
}

textarea {
    resize: none;
    width: 1000px;
}

.formatted-text {
    font-family: Arial, sans-serif;
    width: 500px;
    height: 500px;
    border: 1px solid black;
    display: inline-flexbox;
    overflow: auto;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
