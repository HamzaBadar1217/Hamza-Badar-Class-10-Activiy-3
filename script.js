const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNumber");
const cvv = document.querySelector("#cvv");
const expirationDate = document.querySelector("#expirationDate");

const sumbitForm = () => {
    debugger;
    const nameArr = cardName.value.split(" ");

    const numberArr = cardNumber.value.split("-");

    let numberflag = '';
    let nameflag = false;

    numberArr.forEach(element => {
      if(element.length !== 4) {
        numberflag = 'Kindly add 4 digits before and after -';
      } else if(element === '0000') {
        numberflag = 'Card Number doesnot contain consecutive 4 zeros'
    }
    });

    nameArr.forEach(element => {
        if (element.toUpperCase() !== element) {
            nameflag = true;
        }
    });

    let currentYear = new Date().getFullYear();
    currentYear = currentYear.toString();

    let dateTest = expirationDate.value.match(/^(\d{1,2})(\/|-)(\d{1,2})$/);

    if(nameArr.length !== 2 || nameflag === true) {
      alert('Kindly add correct name of your card with capital letters')
    }
     else if (cvv.value.length !== 3) {
      alert('Kindly add correct cvv')
    } else if(numberArr.length !== 4) {
      alert('Kindly add 16 digit card number')
    } else if(numberflag !== '') {
      alert(numberflag);
    } else if(dateTest === null) {
        alert('Kindly add date in MM/YY format');
    } else if (parseInt(expirationDate.value.slice(-2)) < parseInt(currentYear.slice(-2))) {
        alert('Your Card is expired');
    } else {
        alert ("Kindly remove my samosas." + "\n"  + " " + "\n" + 'Mere choty choty bachy hyn!!!')
    }    
};
