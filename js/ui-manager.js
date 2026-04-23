// UI Manager: Handles theme toggles and button interactions
export const UIManager = {
    init: function() {
        console.log("UI Manager Initialized");
    },

    toggleTheme: function(theme) {
        const body = document.body;
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    },

    updateFileName: function(name) {
        document.getElementById('fileName').textContent = name || "No file selected";
    }
};
