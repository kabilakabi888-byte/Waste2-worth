const mongoose = require("mongoose");

const wasteProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
        },

        unit: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        contactNumber: {
            type: String,
            required: true,
        },

        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("WasteProduct", wasteProductSchema);