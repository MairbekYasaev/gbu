const FullYear = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();
const dataDispalay = document.querySelector('.main-content__data'),
      dataOnScreen = document.querySelector('.data'),
      monthOnScreen = document.querySelector('.month'),
      YearOnScreen = document.querySelector('.fullYear');

      dataOnScreen.innerHTML = date;
      
      YearOnScreen.innerHTML = FullYear;

function ShowMonth() {
    if(month == 0) {
        monthOnScreen.innerHTML = 'Января';
    }
    if(month == 1) {
        monthOnScreen.innerHTML = 'Февраля';
    }
    if(month == 2) {
        monthOnScreen.innerHTML = 'Марта';
    }
    if(month == 3) {
        monthOnScreen.innerHTML = 'Апреля';
    }
    if(month == 4) {
        monthOnScreen.innerHTML = 'Мая';
    }
    if(month == 5) {
        monthOnScreen.innerHTML = 'Июня';
    }
    if(month == 6) {
        monthOnScreen.innerHTML = 'Июля';
    }
    if(month == 7) {
        monthOnScreen.innerHTML = 'Августа';
    }
    if(month == 8) {
        monthOnScreen.innerHTML = 'Сентября';
    }
    if(month == 9) {
        monthOnScreen.innerHTML = 'Октября';
    }
    if(month == 10) {
        monthOnScreen.innerHTML = 'Ноября';
    }
    if(month == 11) {
        monthOnScreen.innerHTML = 'Декабря';
    }
}

ShowMonth()



