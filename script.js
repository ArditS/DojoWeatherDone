document.getElementById('temperature').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex].value;
    const span1 = document.getElementById('span-1');
    const span2 = document.getElementById('span-2');

    if (selectedOption === 'celsius') {
    span1.innerHTML = '24 &#176;';
    span2.innerHTML = '18 &#176;';
    } else if (selectedOption === 'farenheit') {
      span1.innerHTML = Math.round((24 * 9/5) + 32) + ' &#176;';
      span2.innerHTML = Math.round((18 * 9/5) + 32) + ' &#176;';
    }
});

document.getElementById('temperature').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex].value;
    const span1 = document.getElementById('span-3');
    const span2 = document.getElementById('span-4');

    if (selectedOption === 'celsius') {
    span1.innerHTML = '27 &#176;';
    span2.innerHTML = '19 &#176;';
    } else if (selectedOption === 'farenheit') {
      span1.innerHTML = Math.round((27 * 9/5) + 32) + ' &#176;';
      span2.innerHTML = Math.round((19 * 9/5) + 32) + ' &#176;';
    }
});

document.getElementById('temperature').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex].value;
    const span1 = document.getElementById('span-5');
    const span2 = document.getElementById('span-6');

    if (selectedOption === 'celsius') {
    span1.innerHTML = '21 &#176;';
    span2.innerHTML = '16 &#176;';
    } else if (selectedOption === 'farenheit') {
      span1.innerHTML = Math.round((21 * 9/5) + 32) + ' &#176;';
      span2.innerHTML = Math.round((16 * 9/5) + 32) + ' &#176;';
    }
});

document.getElementById('temperature').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex].value;
    const span1 = document.getElementById('span-7');
    const span2 = document.getElementById('span-8');

    if (selectedOption === 'celsius') {
    span1.innerHTML = '26 &#176;';
    span2.innerHTML = '21 &#176;';
    } else if (selectedOption === 'farenheit') {
      span1.innerHTML = Math.round((26 * 9/5) + 32) + ' &#176;';
      span2.innerHTML = Math.round((21 * 9/5) + 32) + ' &#176;';
    }
});



document.getElementById('accept-button').addEventListener('click', function() {
    const cookieDiv = document.getElementById('cookie');
    if (cookieDiv) {
    cookieDiv.parentNode.removeChild(cookieDiv);
    }
});
