// Import your new components
import { UIManager } from './ui-manager.js';
import { SyntaxHighlighter } from '../lib/syntax-highlighter.js';

// Initialize UI
UIManager.init();

let fileHandle;
const editor = document.getElementById('editor');
const openBtn = document.getElementById('openBtn');
const saveBtn = document.getElementById('saveBtn');
const fileNameDisplay = document.getElementById('fileName');

// --- Existing File Logic ---

// Open File
openBtn.addEventListener('click', async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    editor.value = contents;
    
    // Update UI using our module
    UIManager.updateFileName(file.name);
});

// Save File
saveBtn.addEventListener('click', async () => {
    if (!fileHandle) {
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

// --- New Integration: Syntax Highlighting ---
// This listens for typing and updates the logic (example implementation)
editor.addEventListener('input', () => {
    const rawCode = editor.value;
    const highlightedCode = SyntaxHighlighter.highlight(rawCode);
    console.log("Current Syntax:", highlightedCode); 
    // Note: To display this visually, you would swap the <textarea> 
    // for a contenteditable <div> to show colors.
});
