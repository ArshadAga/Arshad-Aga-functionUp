const axios = require('axios')

const getMemes = async function(req,res){
    try {
        let options = {
            method:'get',
            url:`http://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg:data})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:error.message})
    }
}

const editMemes = async function(req,res){
    try {

        let options= {
            method:'get',
            url:`https://api.imgflip.com/caption_image?template_id=${req.query.template_id}&text0=${req.query.text0}&text1=${req.query.text1}&username=${req.query.username}&password=${req.query.password}`
        }
        let result = await axios(options)
        res.status(200).send({msg:result.data})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}
module.exports = {getMemes,editMemes}
