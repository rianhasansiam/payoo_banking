
document.getElementById("cashoutButton").addEventListener("click", function () {
    document.getElementById("cashoutSection").classList.remove("hidden");
    document.getElementById("addMoney").classList.add("hidden");
  });
  
  document
    .getElementById("addMoneyButton")
    .addEventListener("click", function () {
      document.getElementById("cashoutSection").classList.add("hidden");
      document.getElementById("addMoney").classList.remove("hidden");
    });
  
  document.getElementById("logoutButton").addEventListener("click", function () {
    window.location.href = "./index.html";
  });
  
  document
    .getElementById("finalAddMoneyButton")
    .addEventListener("click", function () {
      const inputvalue = document.getElementById("moneyAmount").value;
      const pinaddMoney = document.getElementById("pinaddMoney").value;
      document.getElementById("pinaddMoney").value = "";
  
      if (pinaddMoney == "0193") {
        const money = document.getElementById("money").innerText;
        const valueMoney = parseFloat(money);
  
        const inputNewValue = parseFloat(inputvalue);
        const newValue = valueMoney + inputNewValue;
        document.getElementById("money").innerText = newValue;
        document.getElementById("moneyAmount").value = "";
      } else {
        alert("Your pin is wrong");
      }
    });
  
  
  
  document
    .getElementById("finalCashoutButton")
    .addEventListener("click", function () {
      const cashoutmoneyAmount =
        document.getElementById("cashoutmoneyAmount").value;
      const newcashoutmoneyAmount = parseFloat(cashoutmoneyAmount);
      const money = document.getElementById("money").innerText;
        const moneyvalue = parseFloat(money);
      const cashoutPIn = document.getElementById("cashoutPIn").value;
      document.getElementById("cashoutPIn").value = "";
  
  
  
  if(newcashoutmoneyAmount<=moneyvalue){
      if (cashoutPIn == "0193") {
          document.getElementById("cashoutmoneyAmount").value = "";
          
    
          const newBalance = moneyvalue - newcashoutmoneyAmount;
          document.getElementById("money").innerText = newBalance;
        } else {
          alert("Your pin is wrong");
        }
  
  }
  else{
      alert("Insufficient Balance..!!")
  }
      
    });
  