document.querySelector('.book-now').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    const dates = document.getElementById('dates').value;
    const guests = document.getElementById('guests').value;

    if (location && dates && guests) {
        alert(`Booking confirmed for ${location} on ${dates} for ${guests} guests.`);
    } else {
        alert('Please fill in all fields before booking.');
    }
});
const email = document.querySelector('#email');
const button = document.querySelector('#emailb');


button.addEventListener('click',function(){
    console.log(email.value);
});

