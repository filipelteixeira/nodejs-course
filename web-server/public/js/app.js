
const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const search = document.querySelector('input');

    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if (data.error){
                alert(data.error);
            }
            else {
                const forecast = document.querySelector('#forecast');
                const location = document.querySelector('#location');

                forecast.innerHTML = data.forecast;
                location.innerHTML = data.location;
            }
        })
    })
})