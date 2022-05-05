var stolenwages = document.getElementById('bezos');
var stolenwages_counter = document.getElementById('bezos-counter');
var stolenwagesCounterStart = document.getElementById('bezos-counter-start');

var thousand = new Intl.NumberFormat('en-US')
var money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

window.addEventListener('scroll', function(){
  update_wealth_counter();
});

function update_wealth_counter() {
  if (stolenwages_viewable()) {
    if (stolenwages_counter_viewable()) {
      let wealth = (window.scrollX - stolenwages.offsetLeft + 175) * 500000;
      stolenwages_counter.innerHTML = (wealth < 185000000000) ? money.format(wealth) : "$185,000,000,000";
    }
    else {
      stolenwages_counter.innerHTML = '';
    }
  }
}
  function stolenwages_viewable() {
    return window.scrollX < bezos.offsetLeft + bezos.offsetWidth + 100;
  }
  function stolenwages_counter_viewable() {
    return stolenwagesCounterStart.offsetLeft - window.scrollX < (window.innerWidth);
  }
