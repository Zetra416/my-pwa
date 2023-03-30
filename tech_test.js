// Soal pertama
function CountNum (num) {
    let count = 0;
    let lastWord;
    let numStr = num.toString();
    for (let i = 0; i < 10; i++) {
        for(let j = 0; j < numStr.length; j++ ) {
            if(i == numStr[j]) {
                count++;
            }
        }
        count > 1 ? lastWord = 'times' : lastWord = 'time'
        console.log('The number ', i, ' appears ', count, lastWord);
        count = 0;
    }
}
// CountNum(776265327);


// Soal kedua
class OrderItem {
    constructor(orderId, productId, quantity, price) {
      this.orderId = orderId;
      this.productId = productId;
      this.quantity = quantity;
      this.price = price;
    }
  
    get total() {
      return this.quantity * this.price;
    }
  }
  
   orderItem = new OrderItem(1, 1, 5, 5000);
