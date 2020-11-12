function getUrlParameter(name) {
    if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get(name);
        return myParam
    }
    else {
        return null;
    }
};
module.exports = getUrlParameter;
