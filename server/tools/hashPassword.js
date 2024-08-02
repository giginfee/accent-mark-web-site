const bcrypt = require('bcrypt');

module.exports.hash= async (pass)=>{
    const salt = await bcrypt.genSalt();

    return  await bcrypt.hash(pass, salt);

}
module.exports.compare= async(pass, hashedPass)=>{
    return await bcrypt.compare(pass, hashedPass);

}