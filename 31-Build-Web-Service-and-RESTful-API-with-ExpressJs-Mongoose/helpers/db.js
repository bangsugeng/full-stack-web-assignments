const mongoose = require("mongoose");

const openDBConnection = async (uri, opt) => {
    return mongoose.connect(uri, opt);
};

module.exports = {
    openDBConnection
};