const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.getElementById('data_hide');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal==="")
    {
        city_name.innerText = `Plz write the name before search`;
        datahide.style.opacity=0;
    }
    else
    {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5e647f2f942bebc39231612c2bfc4fa4`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            

            const tempMod = arrData[0].weather[0].main;
            console.log(tempMod);

            if(tempMod=="Clear")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMod=="Clouds")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#f1f2f6;''></i>";
            }
            else if(tempMod=="Rain")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-rain' style='color:#a4b0be;'></i>";
            }

            else
            {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
            }
            datahide.style.opacity=1;
            
 }
        catch{
            city_name.innerText = "Plz enter the city name properly";
            datahide.style.opacity=0;
        }
 }
}
submitBtn.addEventListener("click",getInfo);