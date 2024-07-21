document.querySelector(".aa").addEventListener("click",function(){
    var x = document.getElementById("myText").value;
   weather(x);
})
//const link=`https://api.weatherapi.com/v1/current.json?key=2db81a7bd4af400aaf465333242107&q=${x}`;
  
async function weather(haha){
    try {
        const link=await fetch(`https://api.weatherapi.com/v1/current.json?key=2db81a7bd4af400aaf465333242107&q=${haha}`);
      if(!link.ok){
        throw new error("network response not ok");
      }
      const data =await link.json();
      const region=  data.location.name;
      const country= data.location.country;
      const temp=Math.round(data.current.temp_c);
      const cond=data.current.condition.text;
      const img=data.current.condition.icon;
      const humidity=data.current.humidity;
      const heat=data.current.heatindex_c;
      const wind=data.current.wind_kph;
      document.getElementById("myText").value="";
      document.querySelector("#temp").innerHTML=`${temp}°C`;
      document.querySelector("#loc").innerHTML=`${region},${country}`;
      document.querySelector("img").setAttribute("src",`${img}`);
      document.querySelector("#cond").innerHTML=`condition:${cond}`;
      document.querySelector("#h").innerHTML=`Humidity:${humidity}`;
      document.querySelector("#w").innerHTML=`Wind speed:${wind}`;
      document.querySelector("#i").innerHTML=`Heat index: ${heat}`;
    } catch (error) {
        alert("no location found");
    }
   
}