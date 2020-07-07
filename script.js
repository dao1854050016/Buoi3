//loại bỏ phần tử trùng
a=[5,7,5,8,7]
consol.info(a.filter(value => a.indexOf(value)== indexOf(value))) //ket quả là: 8
//let a = newObject() {
    //a.name=""
    //a.old =""
//}

//kiểm tra số lần xuất hiện mỗi kí tự trong chuỗi
let s = "hello";
let d = {};
for  (let i = 0 ; i<s.length ; i++)
    if(d.hasOwnProperty(s[i]))
    d++; 
    else d[s[i]=1];
    console.info(d);
//
Date.prototype.isLead = functon() {
    let y = this.getFullYear();
    return (y% 400 == 0 || (y%4 ==0 & y%100!=0));
}
let d= new Date.prototype.function();
console.info(d.isLead());

//số nguyên tố
Number.prototype.isPrime = function(){
    let n =this.valueOf();
    if(n<2)
        return false;
    for(let i=0;i<= Math.sqrt(n);i++ )
    if(n % i==0)
        return false;

    return true;
}

//đếm từ
String.prototype.wordCount = function() {
let k= this.value() ;
return s.trim().s.split(/ \s+ /).length;
for(let i=0;i<s.length;i++)
    let seach=" ";
    if(s[i]==seach )
    let d = d++;
}
let s="This is a first js class   ";
console.info(s.countWord());

/*Tìm hiểu một số kí hiệu đặc biệt 
 regex là gì? */