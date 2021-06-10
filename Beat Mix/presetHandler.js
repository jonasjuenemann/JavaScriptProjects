// Use this presets array inside your presetHandler
const presets = require('./presets');

function valid(index) {
    if (index > presets.length || index < 0) return false
    return true
}

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
    if (!valid(index)) {
        return [404, "Index not found"]
    }
    if (!["GET", "PUT"].includes(method)) {
        return [400, "Index not found"]
    }
    if (method === "GET") {
        return [200, presets[index]]
    }
    if (method === "PUT") {
        presets[index] = newPresetArray
        return [200, presets[index]]
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
