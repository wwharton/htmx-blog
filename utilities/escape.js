function escapeHtmlAndPrepareForCopy() {
    const inputHtml = document.getElementById('inputHtml').value;
    const escapedHtml = escapeHtml(inputHtml);
    const wrappedInTags = wrapInPreAndCodeTags(escapedHtml);
    document.getElementById('outputHtml').value = wrappedInTags;
}

function escapeHtml(html) {
    return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function wrapInPreAndCodeTags(escapedHtml) {
    // Escaping the pre and code tags themselves
    const preTagStart = "<pre>\n<code class=\"language-html\">\n";
    const preTagEnd = "</code>\n</pre>\n";
    return `${preTagStart}${escapedHtml}${preTagEnd}`;
}
