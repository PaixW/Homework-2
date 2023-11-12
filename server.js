// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.route('/api/products/:product_id')
    .get((req, res) => {
        
        const product_id = req.params.product_id;
        
        res.json({ product_id, name: 'Product 1', description: 'Description', images: ['image1.jpg', 'image2.jpg'] });
    })
    .put((req, res) => {
       
        const product_id = req.params.product_id;
        const updatedProductData = req.body; 

        
        fs.readFile('data/products.csv', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            
            data += `${updatedProductData.productName},${updatedProductData.productDescription},${updatedProductData.productPrice}\n`;

            
            fs.writeFile('data/products.csv', data, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    
                    res.json(updatedProductData);
                }
            });
        });
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.post('/api/user', (req, res) => {
    const userData = req.body;

   
    fs.appendFile('data/users.csv', `${userData.first_name},${userData.last_name},${userData.email},${userData.phone},${userData.description},${userData.address},${userData.billing}\n`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'User data saved successfully' });
        }
    });
});

