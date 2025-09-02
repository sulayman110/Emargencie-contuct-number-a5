let CoinBalance = 100;
let balanceText = document.getElementById("coin");
let historyDiv = document.getElementById("History");
let clearBtn = document.getElementById("clear");
// Copy Counter & Heart Counter
let fastCopy = 0;
let heartCount = 0;
let countCopy = document.getElementById("total-copy");
let heartLive = document.getElementById("live-count");

// Clear Button
clearBtn.addEventListener("click", function () {
  historyDiv.innerHTML = "";
});
// ============================Fire Service ======================
let btnFire = document.getElementById("btn-fire");
let btnCopyFire = document.getElementById("btn-copy-fire");
let numFire = document.getElementById("fire-num");
let heartFire = document.getElementById("heart-fire");

btnFire.addEventListener("click", function () {
  if (CoinBalance >= 20) {
    CoinBalance -= 20;
    balanceText.innerText = CoinBalance;

    alert("calling Fire Service 999");

    // time
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let record = document.createElement("p");
    record.innerText = ` Fire Service Number is 999 ${time}`;

    historyDiv.appendChild(record);
  } else {
    alert(
      "আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে"
    );
  }
});

btnCopyFire.addEventListener("click", function () {
  fastCopy++;
  countCopy.innerText = fastCopy;
  alert("sucses fully copy fire sarves number is '999'");
  navigator.clipboard.writeText(numFire.innerText);
});
heartFire.addEventListener("click", function () {
  heartCount++;
  heartLive.innerText = heartCount;
});

// =======================police=====================
let btnPolice = document.getElementById("btn-2");
let btnCopyPolice = document.getElementById("btn-copy-2");
let numPolice = document.getElementById("h1-2");
let heartPolice = document.getElementById("heart-2");
btnPolice.addEventListener("click", function () {
  if (CoinBalance >= 20) {
    CoinBalance -= 20;
    balanceText.innerText = CoinBalance;
    alert("calling police 999");

    // time
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let record = document.createElement("p");
    record.innerText = ` Police Station Number 999 ${time}`;

    historyDiv.appendChild(record);
  } else {
    alert(
      "আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে"
    );
  }
});
btnCopyPolice.addEventListener("click", function () {
  fastCopy++;
  countCopy.innerText = fastCopy;
  alert("sucses fully copy police officer number '999'");
  navigator.clipboard.writeText(numPolice.innerText);
});
heartPolice.addEventListener("click", function () {
  heartCount++;
  heartLive.innerText = heartCount;
});
// =======================================এ্যাম্বুলেন্স==============
let btnAmbulance = document.getElementById("btn-3");
let btnCopyAmbulance = document.getElementById("btn-copy-3");
let numAmbulance = document.getElementById("h1-3");
let heartAmbulance = document.getElementById("heart-3");
btnAmbulance.addEventListener("click", function () {
  if (CoinBalance >= 20) {
    CoinBalance -= 20;
    balanceText.innerText = CoinBalance;
    alert("জরুরি এ্যাম্বুলেন্স নাম্বার 999");

    // time
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let record = document.createElement("p");
    record.innerText = ` এ্যাম্বুলেন্স 999 ${time}`;

    historyDiv.appendChild(record);
  } else {
    alert(
      "আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে"
    );
  }
});
btnCopyAmbulance.addEventListener("click", function () {
  fastCopy++;
  countCopy.innerText = fastCopy;
  alert("sucses fully copy Ambulance number '999'");
  navigator.clipboard.writeText(numAmbulance.innerText);
});
heartAmbulance.addEventListener("click", function () {
  heartCount++;
  heartLive.innerText = heartCount;
});
// ===============================জাতীয় জরুরি সেবা==============
let btnNational = document.getElementById("btn-4");
let btnCopyNational = document.getElementById("btn-copy-4");
let numNational = document.getElementById("h1-4");
let heartNational = document.getElementById("heart-4");
btnNational.addEventListener("click", function () {
  if (CoinBalance >= 20) {
    CoinBalance -= 20;
    balanceText.innerText = CoinBalance;
    alert("জাতীয় জরুরি সেবা 1600");

    // time
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let record = document.createElement("p");
    record.innerText = ` জাতীয় জরুরি সেবা 1600 ${time}`;

    historyDiv.appendChild(record);
  } else {
    alert(
      "আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে"
    );
  }
});
btnCopyNational.addEventListener("click", function () {
  fastCopy++;
  countCopy.innerText = fastCopy;
  alert("Sucses Fully copy National sarvice Number'1600'");
  navigator.clipboard.writeText(numNational.innerText);
});
heartNational.addEventListener("click", function () {
  heartCount++;
  heartLive.innerText = heartCount;
});
// ===============================জাতীয় নারী ও শিশু সহায়তা==============
let btnWomen = document.getElementById("btn-5");
let btnCopyWomen = document.getElementById("btn-copy-5");
let numWomen = document.getElementById("h1-5");
let heartWomen = document.getElementById("heart-5");
btnWomen.addEventListener("click", function () {
  if (CoinBalance >= 20) {
    CoinBalance -= 20;
    balanceText.innerText = CoinBalance;
    alert("জাতীয় নারী ও শিশু সহায়তা '109'");

    // time
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let record = document.createElement("p");
    record.innerText = ` জাতীয় নারী ও শিশু সহায়তা 109 ${time}`;

    historyDiv.appendChild(record);
  } else {
    alert(
      "আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে"
    );
  }
});
btnCopyWomen.addEventListener("click", function () {
  fastCopy++;
  countCopy.innerText = fastCopy;
  alert("Sucses Fully copy Women and Child Support Number'109'");
  navigator.clipboard.writeText(numWomen.innerText);
});
heartWomen.addEventListener("click", function () {
  heartCount++;
  heartLive.innerText = heartCount;
});
// ===============================দুদক==============
let btnAnti = document.getElementById("btn-6");
let btnCopyAnti = document.getElementById("btn-copy-6");
let numAnti = document.getElementById("h1-6");
let heartAnti = document.getElementById("heart-6");
btnAnti.addEventListener("click", function () {
  if (CoinBalance >= 20) {
    CoinBalance -= 20;
    balanceText.innerText = CoinBalance;
    alert("দুদক '106'");

    // time
    let now = new Date();
    let time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    let record = document.createElement("p");
    record.innerText = ` দুদক 106 ${time}`;

    historyDiv.appendChild(record);
  } else {
    alert(
      "আপনার কল করার জন্য পর্যাপ্ত কয়েন নেই, কল করতে কম পক্ষে ২০ কয়েন লাগবে"
    );
  }
});
btnCopyAnti.addEventListener("click", function () {
  fastCopy++;
  countCopy.innerText = fastCopy;
  alert("Sucses Fully copy Anti-Corruption Commission '106'");
  navigator.clipboard.writeText(numAnti.innerText);
});
heartAnti.addEventListener("click", function () {
  heartCount++;
  heartLive.innerText = heartCount;
});
