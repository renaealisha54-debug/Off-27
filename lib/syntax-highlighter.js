// Syntax Highlighter: A basic engine to parse and color code keywords
export const SyntaxHighlighter = {
    highlight: function(text) {
        // Simple regex patterns for basic keyword highlighting
        let highlighted = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Color Keywords
        const keywords = /\b(const|let|var|function|return|if|else|import|export|class)\b/g;
        highlighted = highlighted.replace(keywords, '<span class="keyword">$1</span>');

        // Color Strings
        const strings = /(['"`])(.*?)\1/g;
        highlighted = highlighted.replace(strings, '<span class="string">$&</span>');

        return highlighted;
    }
};
