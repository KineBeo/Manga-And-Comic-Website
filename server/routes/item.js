const router = require("express").Router();
const ItemModel = require("../models/item");

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new ItemModel({
      item: req.body.item,
    });

    const saveItem = await newItem.save();
    res.status(200).json("Item saved successfully");
  } catch (err) {
    console.error(err);
  }
});

// create second route to get data from database
router.get("/api/items", async (req, res) => {
  try {
    const allItems = await ItemModel.find({});
    res.json(allItems);
    res.status(200).json(allItems);
  } catch (err) {
    console.error(err);
  }
});

// Update items
router.put("/api/item/:id", async (req, res) => {
  try {
    // find the item with it's id and update that item
    const updateItem = await ItemModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    res.status(200).json("Item updated successfully");
  } catch (err) {
    console.error(err);
  }
});

// Delete items
router.delete("/api/item/:id", async (req, res) => {
  try {
    // find the item with it's id and delete that item
    const deleteItem = await ItemModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item deleted successfully");
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
