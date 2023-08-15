document.getElementById('btn-withdraw').addEventListener('click',function(){

const withdrawField=document.getElementById('withdraw-field');
const newWithdawAmountString=withdrawField.value;
const newWithdrawAmount=parseFloat(newWithdawAmountString);

const withdrawTotalELement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalELement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
withdrawField.value='';
withdrawField.value='';
if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid number');
    return;
}
if(newWithdrawAmount>previousBalanceTotal){
    alert('Bank e Eto taka nai ');
    return;
}
const currentWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;

withdrawTotalELement.innerText=currentWithdrawTotal;
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;



})