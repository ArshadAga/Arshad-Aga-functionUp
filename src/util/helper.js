let dateobj= new Date() ;
let month = dateobj.getMonth() + 1;
let date = dateobj.getDate()

let batchInfo ={
    name: "Lithium 2k22 ",
    week: "W3D6",
    Session: "Today session was about how to create module and how to export it"
}

module.exports.helper1 = dateobj
module.exports.helper2 = month
module.exports.helper3 = date
module.exports.helper4 = batchInfo