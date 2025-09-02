   
    let CoinBalance = 100;
    let balanceText = document.getElementById('coin');
    let historyDiv = document.getElementById('History');
    let clearBtn = document.getElementById('clear');
// Copy Counter & Heart Counter
let fastCopy = 0;
let heartCount = 0;
let countCopy = document.getElementById('total-copy');
let heartLive = document.getElementById('live-count');



 // Clear Button 
    clearBtn.addEventListener('click', function () {
      historyDiv.innerHTML = "";
    })
 // ============================Fire Service ======================
    let btnFire = document.getElementById('btn-fire');
    let btnCopyFire =document.getElementById('btn-copy-fire');
    let numFire = document.getElementById('fire-num');
    let heartFire =document.getElementById('heart-fire');

     btnFire.addEventListener('click', function () {
      if (CoinBalance >= 20) {
        CoinBalance -= 20;
        balanceText.innerText = CoinBalance;

        alert('calling Fire Service 999');

        // time
        let now = new Date();
        let time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }); 
        let record = document.createElement("p");
        record.innerText = ` Fire Service Number is 999 ${time}`;

        historyDiv.appendChild(record);
      } else {
        alert('আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে');
      }
    });

    btnCopyFire.addEventListener('click',function(){
      fastCopy++ ;
      countCopy.innerText = fastCopy ;
      alert("sucses fully copy fire sarves number is '999'");
      navigator.clipboard.writeText(numFire.innerText)
      
      
    });
    heartFire.addEventListener('click',function(){
      heartCount++
      heartLive.innerText = heartCount ;
    })

    // =======================police=====================
    let btnPolice = document.getElementById('btn-2');
    let btnCopyPolice =document.getElementById('btn-copy-2');
    let numPolice = document.getElementById('h1-2');
    let heartPolice =document.getElementById('heart-2');
btnPolice.addEventListener('click',function(){
  if(CoinBalance >= 20){
    CoinBalance -=20;
    balanceText.innerText=CoinBalance ;
    alert('calling police 999')

    
        // time
        let now = new Date();
        let time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }); 
        let record = document.createElement("p");
        record.innerText = ` Police Station Number 999 ${time}`;

        historyDiv.appendChild(record);
  }

  else{alert('আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে')}
})
   btnCopyPolice.addEventListener('click',function(){
      fastCopy++ ;
      countCopy.innerText = fastCopy ;
      alert("sucses fully copy police officer number '999'");
      navigator.clipboard.writeText(numPolice.innerText)
      
      
    });
    heartPolice.addEventListener('click',function(){
      heartCount++
      heartLive.innerText = heartCount ;
    })