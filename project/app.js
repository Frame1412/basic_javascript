let foodItems = [];

// เพิ่มรายการอาหาร
function addItem() {
    let itemName = document.getElementById('itemName').value;
    let itemPrice = parseFloat(document.getElementById('itemPrice').value);

    // เพิ่มรายการอาหารใน array
    foodItems.push({ name: itemName, price: itemPrice });

    // แสดงรายการอาหาร
    displayItems();

    // ล้างข้อมูลใน input field
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
}

// แสดงรายการอาหาร
function displayItems() {
    let foodList = document.getElementById('foodList');
    foodList.innerHTML = '';  // ล้างรายการเก่า

    // ใช้ for...of แทน forEach
    for (let item of foodItems) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<span>${item.name}</span> <span>${item.price.toFixed(2)} บาท</span>`;
        foodList.appendChild(listItem);
    }

    // คำนวณราคารวมทั้งหมด
    let totalAmount = 0;
    for (let item of foodItems) {
        totalAmount += item.price;
    }
    
    document.getElementById('totalAmount').textContent = `ราคารวมทั้งหมด: ${totalAmount.toFixed(2)} บาท`;
}

// คำนวณการแบ่งจ่ายค่าอาหาร
function calculateSplit() {
    let peopleCount = parseInt(document.getElementById('peopleCount').value);

    // คำนวณยอดรวมของอาหารทั้งหมด
    let totalAmount = 0;
    for (let item of foodItems) {
        totalAmount += item.price;
    }

    if (totalAmount === 0) {
        alert('กรุณาเพิ่มรายการอาหารก่อนคำนวณ');
        return;
    }

    // คำนวณค่าใช้จ่ายต่อคน
    let amountPerPerson = totalAmount / peopleCount;

    // แสดงผลลัพธ์
    document.getElementById('result').textContent = `แต่ละคนต้องจ่าย: ${amountPerPerson.toFixed(2)} บาท`;
}
