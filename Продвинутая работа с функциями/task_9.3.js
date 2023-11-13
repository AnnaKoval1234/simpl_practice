function debounce(func, ms) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        setTimeout(() => func.apply(this, arguments), ms);
    }
}