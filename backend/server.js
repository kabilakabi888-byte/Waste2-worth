const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const WasteProduct = require("./models/WasteProduct");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===============================
// HOME / TEST ROUTE
// ===============================
app.get("/", (req, res) => {
    res.send("Waste2Worth Backend is Running!");
});

// ===============================
// GET ALL WASTE PRODUCTS
// ===============================
app.get("/api/products", async (req, res) => {
    try {
        const products = await WasteProduct.find().sort({ createdAt: -1 });

        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error.message);

        res.status(500).json({
            message: "Failed to fetch waste products",
            error: error.message
        });
    }
});

// ===============================
// ADD A WASTE PRODUCT
// ===============================
app.post("/api/products", async (req, res) => {
    try {
        const product = new WasteProduct(req.body);

        const savedProduct = await product.save();

        res.status(201).json({
            message: "Waste product added successfully!",
            product: savedProduct
        });
    } catch (error) {
        console.error("Error adding product:", error.message);

        res.status(400).json({
            message: "Failed to add waste product",
            error: error.message
        });
    }
});

// ===============================
// DELETE A WASTE PRODUCT
// ===============================
app.delete("/api/products/:id", async (req, res) => {
    try {
        const deletedProduct = await WasteProduct.findByIdAndDelete(
            req.params.id
        );

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Waste product deleted successfully!"
        });
    } catch (error) {
        console.error("Error deleting product:", error.message);

        res.status(500).json({
            message: "Failed to delete waste product",
            error: error.message
        });
    }
});

// ===============================
// MONGODB CONNECTION
// ===============================
const PORT = 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");

        app.listen(PORT, () => {
            console.log(
                `Waste2Worth Backend running on http://localhost:${PORT}`
            );
        });
    })
    .catch((error) => {
        console.error(
            "MongoDB Connection Failed:",
            error.message
        );
    });