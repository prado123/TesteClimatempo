$(function() {

   console.log('iniciando script')
   var previsao = [];

   $.getJSON('https://api.hgbrasil.com/weather?format=json-cors&key=f28ff79d', function(data) {
       console.log('objeto retornado')
       console.log(data)
       
      var city = data.results.city;
      var city_name = data.results.city_name;
      var condition_code = data.results.condition_code;
      var condition_slug =  data.results.condition_slug;
      var currently = data.results.currently;
      var date =  data.results.date;
      var description =  data.results.description;
      var humidity =  data.results.humidity;
      var img_id =  data.results.img_id;
      var sunrise =  data.results.sunrise;
      var sunset =  data.results.sunset;
      var temp =  data.results.temp;
      var time =  data.results.time;
      var weekday = data.results.weekday;
      var wind_speedy =  data.results.wind_speedy;
      var forecast =  data.results.forecast;
      
       var tblRow = "<div class='container'>" + "<div class='row'>" + "<div class='col'>" + "<ul>" + "<li class='cidade'>" + city +  "</li>" +  "<li>" + currently +  "</li>" + "<li>" + description + "</li>" + "</ul>" + "</div>" + "</div>" + "<div class='row'>" + "<div class='col'>" + "<ul>" + "<li>" + "<div class='" + condition_slug + "'></div><span class='temperatura'>" + temp +"º</span>" + "</li>" + "</div>" + "<div class='col'>" + "<ul>" + "<li> Umidade: " + humidity +"%" + "</li>" + "<li> Vento: " + wind_speedy + "</li>" + "</ul></div></div></div></div>"
        
       $(tblRow).appendTo("#userdata");
             
       $.each(forecast, function(i, e) {
          console.log("previsão:")
          console.log(e)
          console.log('exemplo de um parametro da previsao')
          console.log(e.description)
          console.log("-----------------------SPACE-----------------------")

        var tblRow = "<div class='card'>" + "<ul><li><div class='" + e.condition + "'></div>" + "<li>" + e.weekday + "</li>" + "<li>" + e.date + "</li>" + "<li>" + "min:" + e.min+"º" + "  max:" + e.max +"º" + "</li>" + "<li>" + e.description + "</li>" + "</div>"          
        $(tblRow).appendTo("#userdata");
       });

   });
 
 });








