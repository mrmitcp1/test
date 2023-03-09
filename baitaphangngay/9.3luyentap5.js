function ChangeMoney() {
    let Amount = document.getElementById('Amount').value;
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let Result;
    if (From === 'USD' && To === 'VNĐ') {
        Result = 'Result' + " "  + (Amount * 23000) + ' VNĐ';
        // document.getElementById('Result').innerHTML = Result
    } else if (From === 'VNĐ' && To === 'USD') {
        Result = 'Result' + " " + (Amount / 23000) + ' $';
        // document.getElementById('Result').innerHTML = Result
    } else if (From === 'VNĐ') {
        Result = 'Result : ' + Amount + ' VNĐ';
        // document.getElementById('Result').innerHTML = Result
    } else {
        Result = 'Result : ' + Amount + '$';
        // document.getElementById('Result').innerHTML = Result
    }
    document.getElementById('Result').innerHTML=Result

}