import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const Init_URL="https://images.unsplash.com/photo-1523556329929-93033da89632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcmNhc3QlMjBjbG91ZGVzfGVufDB8fDB8fHww"
     let cold_url="https://images.unsplash.com/photo-1542267207-f8127b454605?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdldGhlciUyMGNvbGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
     let hot_url="https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=612x612&w=is&k=20&c=4U6WX75rikqiM6HdYZNyUhKsXiPOu0QH_x6jy8mvdEs="
     let rain_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo="


    //    let info={ 
//      city:"kolhapur",
//      feelsLike: 23.84,
//      humidity: 91,
//      temp: 23.1,
//      tempMax: 23.1,
//      tempMin: 23.1,
//      weather: "overcast clouds"
//    }
     
    return(
      <div className="InfoBox">
          {/* <h1>WeatherInfo--{info.weather}</h1>   */}
          <div className='cardContainer'>
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
             sx={{ height: 140 }}
              image={
                info.humidity > 80 
                ? rain_url
                : info.temp >15 
                ? hot_url
                :cold_url}
              title="green iguana"
           />
           <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  {info.city} {
                info.humidity > 80 
                ? <ThunderstormIcon/>
                : info.temp >15 
                ? <WbSunnyIcon/>
                 :<AcUnitIcon/>}
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>
                 <p>Temprature={info.temp}&deg;C</p>
                 <p>Humidity={info.humidity}</p>
                 <p>Min Temp={info.tempMin}&deg;C</p>
                 <p>Min Max={info.tempMax}&deg;C</p>
                 <p>The weather can be described as  <i>{info.weather}</i> and  feels like {info.feelsLike}&deg;C</p>
               </Typography>
           </CardContent>
         </Card>
         </div>
        </div>
    )
}