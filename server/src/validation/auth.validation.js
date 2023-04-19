import joi from "joi";
export const Validatesignup=(userData)=>{
    const schema = joi.object({
    fullname : joi.string().required.min(5),
    email: joi.string().email().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    address:joi.array().items(joi.object({details:joi.string(),for:joi.string()})),
    phonenumber:joi.array().items(joi.number().min(10).max(10))
})
return schema.validateAsync(userData)}

export const Validatesignin=(userData)=>{
    const schema = joi.object({
    
    email: joi.string().email().required(),
    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    
})
return schema.validateAsync(userData)}