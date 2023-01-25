const tipPercents = document.querySelector('.tipsSelection');
let cPercent = document.getElementById('customPercent');

let billInput = document.getElementById('billInput');
let people  = document.getElementById('peopleInput');
let tipAmount = document.getElementById('personTipAmount');
let totalAmount = document.getElementById('personTotalAmount');
let condition = document.getElementById('pNo');
let cBtn = document.getElementById('customBtn');

window.onload = function(){
    tipPercents.onclick = (selectedTip) =>{
        if(selectedTip.target.classList.contains("tipsPercent")){
            tipPercents.querySelector('.active').classList.remove('active');
            selectedTip.target.classList.add('active');

            let percent = selectedTip.target.getAttribute("percent");
            let total = 0;
            let tax = 0;

            if(percent == 'five'){      
                if(people.value == 0 || people.value == ""){
                    condition.classList.add("active");
                    tipAmount.textContent = "$0.00";
                    totalAmount.textContent = "$0.00";
                }
                else{
                    condition.classList.remove('active');
                    total = billInput.value/people.value;
                    tax = total * 0.05;
            
                    tipAmount.textContent = "$" + tax.toFixed(2);
                    totalAmount.textContent = "$" + total.toFixed(2);
            
                }

            }

            else if(percent == 'ten'){      
                if(people.value == 0 || people.value == ""){
                    condition.classList.add("active");
                    tipAmount.textContent = "$0.00";
                    totalAmount.textContent = "$0.00";
                }
                else{
                    condition.classList.remove('active');
                    total = billInput.value/people.value;
                    tax = total * 0.10;
            
                    tipAmount.textContent = "$" + tax.toFixed(2);
                    totalAmount.textContent = "$" + total.toFixed(2);
            
                }

            }

            else if(percent == 'fifteen'){      
                if(people.value == 0 || people.value == ""){
                    condition.classList.add("active");
                    tipAmount.textContent = "$0.00";
                    totalAmount.textContent = "$0.00";
                }
                else{
                    condition.classList.remove('active');
                    total = billInput.value/people.value;
                    tax = total * 0.15;
            
                    tipAmount.textContent = "$" + tax.toFixed(2);
                    totalAmount.textContent = "$" + total.toFixed(2);
            
                }

            }

            else if(percent == 'twentyfive'){      
                if(people.value == 0 || people.value == ""){
                    condition.classList.add("active");
                    tipAmount.textContent = "$0.00";
                    totalAmount.textContent = "$0.00";
                }
                else{
                    condition.classList.remove('active');
                    total = billInput.value/people.value;
                    tax = total * 0.25;
            
                    tipAmount.textContent = "$" + tax.toFixed(2);
                    totalAmount.textContent = "$" + total.toFixed(2);
            
                }

            }

            else if(percent == 'fifty'){      
                if(people.value == 0 || people.value == ""){
                    condition.classList.add("active");
                    tipAmount.textContent = "$0.00";
                    totalAmount.textContent = "$0.00";
                }
                else{
                    condition.classList.remove('active');
                    total = billInput.value/people.value;
                    tax = total * 0.50;
            
                    tipAmount.textContent = "$" + tax.toFixed(2);
                    totalAmount.textContent = "$" + total.toFixed(2);
            
                }

            }
            
            else{
                // cBtn.classList.add('active');
                // cBtn.onclick = function(){
                //     if(people.value == 0 || people.value == ""){
                //         condition.classList.add("active");
                //         tipAmount.textContent = "$0.00";
                //         totalAmount.textContent = "$0.00";
                //     }
                //     else{
                //         condition.classList.remove('active');
                //         total = billInput.value/people.value;
                //         tax = total * (cPercent.value / 100);
                
                //         tipAmount.textContent = "$" + tax.toFixed(2);
                //         totalAmount.textContent = "$" + total.toFixed(2);
                
                //     }
                // }


                // with IIFE
                (function(){
                    if(people.value == 0 || people.value == ""){
                                condition.classList.add("active");
                                tipAmount.textContent = "$0.00";
                                totalAmount.textContent = "$0.00";
                            }
                    else{
                        condition.classList.remove('active');
                        total = billInput.value/people.value;
                        tax = total * (cPercent.value / 100);
                
                        tipAmount.textContent = "$" + tax.toFixed(2);
                        totalAmount.textContent = "$" + total.toFixed(2);
                
                    }
                })();
            }


        }
    }

    if(billInput.value == "" || people.value == "" || tipAmount.textContent == "$0.00" || totalAmount.textContent == "$0.00"){
        resetBtn.classList.remove('active');
    }
    else{
        resetBtn.classList.add('active');
    }
}


let resetBtn = document.getElementById('resetBtn');
resetBtn.onclick = function(){
    billInput.value = "";
    people.value = "" ;
    cPercent.value = "";
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    condition.classList.remove('active');
}
