    // button
    let CoinBalance = 100;
    let btn = document.getElementById('btn');
    let balanceText = document.getElementById('coin');
    let clearBtn = document.getElementById('clear');
    let historyDiv = document.getElementById('History');

    btn.addEventListener('click', function () {
      if (CoinBalance >= 20) {
        CoinBalance -= 20;
        balanceText.innerText = CoinBalance;

        alert('calling Fire Service 999');

        // time
        let now = new Date();
        let time = now.toLocaleTimeString(); 
        let record = document.createElement("p");
        record.innerText = ` Fire Service Number is 999 ${time}`;

        historyDiv.appendChild(record);
      } else {
        alert('আপনার পর্যাপ্ত কয়েন নেই, আপনার কয়েন ২০ এর কম আছে');
      }
    });

    // Clear Button 
    clearBtn.addEventListener('click', function () {
      historyDiv.innerHTML = "";
    })


// copy function

let fastCopy = 0;
let btnCopy =document.getElementById('btn-copy');
let countCopy =document.getElementById('total-copy');

btnCopy.addEventListener('click',function(){
    fastCopy++;
    countCopy.innerText= fastCopy;
    navigator.clipboard.writeText(text.innerText);
    alert('নাম্বারটি কপি হয়েছে 999')
    
})

