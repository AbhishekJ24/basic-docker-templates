import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({
        "products": [
            {
                "id": 1,
                "name": "Wireless Mouse",
                "category": "Electronics",
                "price": 29.99,
                "quantity": 150,
                "description": "A reliable wireless mouse with ergonomic design and long battery life."
            },
            {
                "id": 2,
                "name": "Bluetooth Speaker",
                "category": "Electronics",
                "price": 49.99,
                "quantity": 80,
                "description": "Portable Bluetooth speaker with rich sound quality and water-resistant features."
            },
            {
                "id": 3,
                "name": "Yoga Mat",
                "category": "Fitness",
                "price": 19.99,
                "quantity": 200,
                "description": "Eco-friendly yoga mat with non-slip surface, ideal for all types of yoga practice."
            },
            {
                "id": 4,
                "name": "Running Shoes",
                "category": "Footwear",
                "price": 89.99,
                "quantity": 60,
                "description": "Lightweight running shoes with excellent cushioning and support."
            },
            {
                "id": 5,
                "name": "Stainless Steel Water Bottle",
                "category": "Kitchen",
                "price": 14.99,
                "quantity": 300,
                "description": "Insulated stainless steel water bottle that keeps drinks cold or hot for hours."
            },
            {
                "id": 6,
                "name": "Electric Kettle",
                "category": "Kitchen",
                "price": 39.99,
                "quantity": 120,
                "description": "Fast-boiling electric kettle with auto shut-off and boil-dry protection."
            },
            {
                "id": 7,
                "name": "Office Chair",
                "category": "Furniture",
                "price": 129.99,
                "quantity": 40,
                "description": "Ergonomic office chair with adjustable height and lumbar support."
            },
            {
                "id": 8,
                "name": "LED Desk Lamp",
                "category": "Lighting",
                "price": 24.99,
                "quantity": 90,
                "description": "Adjustable LED desk lamp with touch control and multiple brightness levels."
            },
            {
                "id": 9,
                "name": "Wireless Earbuds",
                "category": "Electronics",
                "price": 59.99,
                "quantity": 100,
                "description": "Compact wireless earbuds with noise cancellation and long battery life."
            },
            {
                "id": 10,
                "name": "Smart Watch",
                "category": "Wearables",
                "price": 199.99,
                "quantity": 50,
                "description": "Smart watch with fitness tracking, heart rate monitor, and customizable watch faces."
            }
        ]
    }
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
