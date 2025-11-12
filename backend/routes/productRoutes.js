// backend/routes/productRoutes.js
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET /api/products/:bodyType - Get recommendations
router.get("/:bodyType", async (req, res) => {
  try {
    const { bodyType } = req.params;
    const products = await Product.find({ 
      bodyType: bodyType 
    }).limit(10);
    
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/products - Add product (for seeding)
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;