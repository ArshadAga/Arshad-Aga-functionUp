const axios = require('axios')

const getWeatherInLondon = async function(req, res){
    try {
        let options = {
            method:'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=0104a02b45527b27c20cf5a958f1fb63`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg:data})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: error.message})
        
    }
}

const getTemperatureInLondon = async function(req,res){
    try {
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=0104a02b45527b27c20cf5a958f1fb63`
        }
        let result = await axios(options)
        let temperatureData = result.data.main.temp
        res.status(200).send({msg:'Current Temperature in London is ' + temperatureData +' Kelvin'})
    } catch (error) {
        res.status(500).send({msg:error.message})
        
    }
}

const getTemperatureInCities = async function(req,res){
    try {
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let result = [];
        for(let i = 0;i<cities.length;i++){
            let options = {
                method:"get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0104a02b45527b27c20cf5a958f1fb63`
            }
            let tmp = await axios(options);
            let cityName = tmp.data.name
            let cityTemp = tmp.data.main.temp
            let obj ={city:cityName, temp:cityTemp}
            result[i]=obj
        }
        for(let j=0;j<result.length;j++){
            for(let k=j;k<result.length;++k){
                if(result[j].temp>result[k].temp){
                    let tmp = result[j]
                    result[j]=result[k]
                    result[k]=tmp
                }
            }
        }
        res.status(200).send({data:result})
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error.message})
        
    }
}



module.exports.getWeatherInLondon = getWeatherInLondon
module.exports.getTemperaturInLondon = getTemperatureInLondon
module.exports.getTemperatureInCities=getTemperatureInCities

