import joi from "joi";
export const ValidateID=(id)=>{
    const schema=joi.object({
    _id:jpi.string().required()
    })
return schema.validateAsync(id)};
export const ValidateCatergory=(id)=>{
    const schema=joi.object({
    catergory:joi.string().required()
    });return schema.validateAsync(catergory)}
    export const ValidateSearchString=(searchString)=>{
        const schema=joi.object({
            searchString:joi.string().required(),
        })
    
return schema.validateAsync(catergory)}
