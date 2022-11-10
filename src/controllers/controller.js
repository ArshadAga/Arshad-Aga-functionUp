const axios = require('axios');


let getStates = async function(req,res){
    try {
        let options = {
            method:'get',
            url:`https://cdn-api.co-vin.in/api/v2/admin/location/states`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({msg:data, status:true})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}

let getDistrict = async function(req,res){
    try {
        let id = req.params.stateId
        let options = {
            method:'get',
            url:`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg:data, status:true})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}


let getsession = async function(req,res){
    try {
        let districtId = req.query.district_id 
        let date = req.query.date 
        
        let options ={
            method:'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg:data, status:true})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}



module.exports.getStates =getStates
module.exports.getDistrict = getDistrict
module.exports.getsession =getsession