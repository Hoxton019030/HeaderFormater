<template>
    <div class="input">
        <div>
            <label for="inputText">把你複製下來的cookie放這邊：</label>
            <br>
            <label for="inputText">Put the cookies you copied from your browser here:：</label>
            <br>
            <textarea v-model="header" class="form-control" id="inputText" rows="4" cols="50" placeholder="Sec-Ch-Ua:
Chromium;v=118, Google Chrome;v=118, Not=A?Brand;v=99
Sec-Ch-Ua-Mobile:
?0
Sec-Ch-Ua-Platform:
Windows"></textarea>
            <br>
            <button type="button" class="btn btn-primary" @click="formatText()">排版(Format)</button>
            <button type="button" class="btn btn-primary" @click="clearText()">清空(Clear)</button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
const store = useStore();

let header = ref('')
// let result = ref('')
const clearText = () => {
    header.value = ''
}


const formatText = () => {

    
    if (header.value == "") {
        return
    }
    const lines = header.value.split('\n')
    let formattedText = "";

    for (let i = 0; i < lines.length; i++) {
        const trimmedLine = lines[i].trim();
        if (i % 2 === 0) {
            formattedText += trimmedLine;
        } else {
            formattedText += trimmedLine + "\n";
        }
        if (i % 2 === 0 && i < lines.length - 2) {
            formattedText += " ";
        }
    }
    formattedText = formattedText.replace(/:\s/g, ':');
    store.
    commit('setData',formattedText)
    let result=computed(()=>store.state.data)

}

</script>

<style scoped>
.input {
    width: 500px;
    height: 30%;
    /* Input部分背景色 */
}

.btn {
    margin: 5px;
}
</style>