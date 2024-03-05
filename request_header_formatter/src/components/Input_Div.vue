<template>
    <div class="input">
                <div>
                    <label for="inputText">把你複製下來的cookie放這邊：</label>
                    <br>
                    <label for="inputText">Put the cookies you copied from your browser here:：</label>
                    <br>
                    <textarea class="form-control" id="inputText" rows="4" cols="50" placeholder="Sec-Ch-Ua:
Chromium;v=118, Google Chrome;v=118, Not=A?Brand;v=99
Sec-Ch-Ua-Mobile:
?0
Sec-Ch-Ua-Platform:
Windows"

></textarea>
                    <br>
                    <button type="button" class="btn btn-primary" onclick="formatText()">排版(Format)</button>
                    <button type="button" class="btn btn-primary" onclick="clearText()">清空(Claer)</button>
                </div>
            </div>
</template>


<script>
export default {
    name: 'Input-Dev'
}
</script>