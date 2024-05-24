// script.js

// Mock data
let stockItems = [
    { name: "Item 1", quantity: 10, purchasePrice: 5.99, expirationDate: "2024-02-20" },
    { name: "Item 2", quantity: 5, purchasePrice: 3.49, expirationDate: "2024-02-15" },
    // Add more mock data as needed
  ];
  
  let sales = [];
  
  // Function to insert item
  function insertItem() {
    let name = document.getElementById("name").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let purchasePrice = parseFloat(document.getElementById("purchase-price").value);
    let expirationDate = document.getElementById("expiration-date").value;
    
    stockItems.push({ name, quantity, purchasePrice, expirationDate });
  }
  
  // Function to view sales report
  function viewSalesReport() {
    console.log("Sales Report:");
    sales.forEach(sale => {
      console.log(`Item: ${sale.name}, Staff: ${sale.staffName}, Date: ${sale.transactionDate}, Total Amount: ${sale.totalAmount}`);
    });
  }
  
  // Function to view stock
  function viewStock() {
    console.log("Stock Items:");
    stockItems.forEach(item => {
      console.log(`Name: ${item.name}, Quantity: ${item.quantity}, Purchase Price: ${item.purchasePrice}, Expiration Date: ${item.expirationDate}`);
    });
  }
  
  // Function to search for items
  function searchItems() {
    let searchTerm = document.getElementById("search-input").value.toLowerCase();
    let filteredItems = stockItems.filter(item => item.name.toLowerCase().includes(searchTerm));
    
    console.log("Search Results:");
    filteredItems.forEach(item => {
      console.log(`Name: ${item.name}, Quantity: ${item.quantity}, Purchase Price: ${item.purchasePrice}, Expiration Date: ${item.expirationDate}`);
    });
  }
  
  // Function to sell item
  function sellItem() {
    let itemName = document.getElementById("item-dropdown").value;
    let quantitySold = parseInt(document.getElementById("quantity-sold").value);
    let staffName = document.getElementById("staff-name").value;
  
    // Find the item in stock
    let itemIndex = stockItems.findIndex(item => item.name === itemName);
  
    if (itemIndex !== -1 && stockItems[itemIndex].quantity >= quantitySold) {
      // Reduce the quantity of the item in stock
      stockItems[itemIndex].quantity -= quantitySold;
  
      // Calculate total price
      let totalPrice = stockItems[itemIndex].purchasePrice * quantitySold;
  
      // Add the sale to the sales array
      sales.push({ name: itemName, staffName, transactionDate: new Date().toLocaleDateString(), totalAmount: totalPrice });
      console.log("Item sold successfully!");
    } else {
      console.log("Item not found in stock or insufficient quantity!");
    }
  }
  
  // Function to generate receipt
  function generateReceipt() {
    // Generate receipt logic (you can implement this using a library like pdfmake.js or jsPDF)
    console.log("Receipt generated!");
  }
  
  // Function to view sold items by staff
  function viewSoldItems() {
    let staffName = document.getElementById("staff-name").value;
    let staffSales = sales.filter(sale => sale.staffName === staffName);
    
    console.log(`${staffName}'s Sold Items:`);
    staffSales.forEach(sale => {
      console.log(`Item: ${sale.name}, Date: ${sale.transactionDate}, Total Amount: ${sale.totalAmount}`);
    });
  }
  