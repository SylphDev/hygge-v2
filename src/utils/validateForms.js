const validateAlpha = (string) => {
    const regMatch = /^[a-zA-Z]*$/.test(string);
    if (regMatch) {
        return true;
    };
    return false;
}

export { validateAlpha }