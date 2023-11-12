

function editProduct() {
    
    document.querySelectorAll('#productForm input, #productForm textarea').forEach((input) => {
      input.removeAttribute('readonly');
    });
  
    
    document.querySelector('#productForm button[onclick="saveProduct"]').style.display = 'block';
    document.querySelector('#productForm button[onclick="editProduct"]').style.display = 'none';
  }
  
  function saveProduct() {
    
    const productData = {
      productName: document.getElementById('productName').value,
      productDescription: document.getElementById('productDescription').value,
      productPrice: document.getElementById('productPrice').value,
      
    };
  
    
  
    
    document.querySelectorAll('#productForm input, #productForm textarea').forEach((input) => {
      input.setAttribute('readonly', 'true');
    });
  
        
    document.querySelector('#productForm button[onclick="editProduct"]').style.display = 'block';
    document.querySelector('#productForm button[onclick="saveProduct"]').style.display = 'none';
  }
  