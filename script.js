let key = '8a4459ad8b0ee1a02b8203a818310024';
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.87&lon=74.59&exclude=minutely&lang=ru&units=metric&appid=${key}`;
let $city = document.querySelector('#city');
let $tempDegree = document.querySelector('#tempDegree');
let $description = document.querySelector('.description');
let $tempImage = document.querySelector('#tempImage');
let $feel = document.querySelector('#feel');
let $pressure = document.querySelector('#pressure');
let $wind = document.querySelector('#wind');
let $humidity = document.querySelector('#humidity');
let $visibility = document.querySelector('#visibility');
let $sunrise = document.querySelector('#sunrise');
let $container1 = document.querySelector('.container1');

fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        $city.textContent = data.timezone;
        $tempDegree.textContent = `${data.current.temp}°С`;
        $feel.textContent = `По ощущениям ${data.current.feels_like}`;
        $pressure.textContent = `Давление ${data.current.pressure}`;
        $wind.textContent = `Ветер ${data.current.wind_speed} м/c`;
        $humidity.textContent = `Влажность ${data.current.humidity} %`;
        $visibility.textContent = `Дата ${data.current.visibility}`;
        $sunrise.textContent = `${data.current.sunrise}`;
        $description.textContent = `${data.current.weather[0].description}`;
        let iconUrl = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
        $tempImage.setAttribute('src', iconUrl);

        let i = 0
        data.daily.forEach(function (element) {

            let days = [
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота'
            ];
            let d = new Date();
            let n = d.getDay();
            $container1.insertAdjacentHTML('beforeend', `
        <div>
        <p id="day">${days[n+i]}</p>
            <p>днем ${element.temp.day}С°</p>
            <p>вечером ${element.temp.eve}С°</p>
            <img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
            <p id="description">${element.weather[0].description}</p>\
            </div>
        `)
            i++
        })
    })
    // let key = '8a4459ad8b0ee1a02b8203a818310024';
    // let url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.87&lon=74.59&exclude=minutely&lang=ru&units=metric&appid=${key}`;
    
    // fetch(url)
    // .then(res=> res.json())
    // .then(data=> console.log(data))