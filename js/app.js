let fileHandle;
const editor = document.getElementById('editor');
const openBtn = document.getElementById('openBtn');
const saveBtn = document.getElementById('saveBtn');
const fileNameDisplay = document.getElementById('fileName');

// Open File
openBtn.addEventListener('click', async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    editor.value = contents;
    fileNameDisplay.textContent = file.name;
});

// Save File
saveBtn.addEventListener('click', async () => {
    if (!fileHandle) {
        // If no file opened yet, create a new one
        fileHandle = await window.showSaveFilePicker({
            suggestedName: 'untitled.txt',
            types: [{ description: 'Text File', accept: { 'text/plain': ['.txt', '.js', '.html', '.css'] } }],
        });
    }
    
    const writable = await fileHandle.createWritable();
    await writable.write(editor.value);
    await writable.close();
    alert('File saved successfully!');
});
