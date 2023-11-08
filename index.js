function clearText() {
    document.getElementById("inputText").value = "";
}
var dataArray = [];

function formatText() {

    const inputText = document.getElementById("inputText").value;
    if (inputText == "") {
        return;
    }
    const lines = inputText.split('\n');
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

    // Remove a space after the colon on each line
    formattedText = formattedText.replace(/:\s/g, ':');
    document.getElementById("outputText").textContent = formattedText;
    if (dataArray.length >= 7) {
        dataArray.pop()
    }
    dataArray.unshift(formattedText);
    console.log(dataArray.length)
    const historyEntryDiv = document.getElementsByClassName("history-entry");
    for (let i = 0; i < historyEntryDiv.length; i++) {
        historyEntryDiv[i].innerHTML = ""; // 清空每个元素的内容
    }
    // Create a new history item
    for (var i = 0; i < dataArray.length; i++) {
        const historyDiv = document.getElementsByClassName("history");
        const historyItem = document.createElement("div");
        historyItem.className = "history-entry";

        // Create a card for the history item content
        const formattedHistory = document.createElement("textarea");
        formattedHistory.textContent = dataArray[i];
        formattedHistory.className = "card";

        // Create a delete button for the history item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button btn btn-danger btn-sm";
        deleteButton.addEventListener("click", function () {
            historyDiv[0].removeChild(historyItem);
        });

        // Append the formatted text and delete button to the history item
        historyItem.appendChild(formattedHistory);
        historyItem.appendChild(deleteButton);

        // Append the history item to the history section
        historyDiv[0].appendChild(historyItem);
    }

}

function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    const textArea = document.createElement("textarea");
    textArea.value = outputText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const copySuccessMessage = document.getElementById("copySuccessMessage");
    copySuccessMessage.style.opacity = 1;

    // 設置計時器，在2秒後淡出訊息
    setTimeout(() => {
        copySuccessMessage.style.opacity = 0;
    }, 2000);

}