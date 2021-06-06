var data = '';

// Input data function
function input(n) {
    data += n;
    document.getElementById("res").value = data;
}

// Clear input data
function Clr() {
    data = "";
    document.getElementById("res").value = data;
}

// Calculate 
function Calculate() {
    var arr;
    if (data.indexOf('+') != -1) {
        arr = data.split('+');
        var sum = bTd(arr[0]) + bTd(arr[1]);
        document.getElementById("res").value = dTb(sum);
    } else if (data.indexOf('-') != -1) {
        arr = data.split('-');
        var sub = bTd(arr[0]) - bTd(arr[1]);
        document.getElementById("res").value = dTb(sub);
    } else if (data.indexOf('*') != -1) {
        arr = data.split('*');
        var mul = bTd(arr[0]) * bTd(arr[1]);
        document.getElementById("res").value = dTb(mul);
    } else if (data.indexOf('/') != -1) {
        arr = data.split('/');
        var div = parseInt(bTd(arr[0]) / bTd(arr[1]));
        document.getElementById("res").value = dTb(div);
    }

}
// Convert binary to decimal number
function bTd(b) {
    var bd = b.split('');
    var res = 0;
    for (let i = 0; i < bd.length; i++) {
        res += bd[i] * Math.pow(2, bd.length - 1 - i);
    }
    return res;
}
// Convert decimal to binary
function dTb(d) {
    var dd = new Array();
    let i = 0;
    for (i = d; i > 0; i = parseInt(i / 2)) {
        dd.push(i % 2);
    }
    return dd.reverse().join('');
}