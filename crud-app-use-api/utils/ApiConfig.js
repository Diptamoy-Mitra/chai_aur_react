import axios from "axios";

 //post api
export const doPostApi = async (data) => {

    try {

       const res=await axios.post("https://663e5399e1913c4767974f27.mockapi.io/crud-todo",{
        title: data.title,
        description: data.description,
        header:{
            "Access-Control-Allow-Origin":"*"
        }
       })
        
       //console.log(res)
       return res;

    } catch (error) {
        console.log("Error in doPostApi :",error);
    }
}

//get api
export const doGetApi=async ()=>{
    try {

        const res=await axios.get("https://663e5399e1913c4767974f27.mockapi.io/crud-todo");

        return res;
        
    } catch (error) {
        console.log("Error in doGetApi :",error);
    }
}

//delete api
export const doDeleteApi=async (id)=>{
    try {

        const res=await axios.delete(`https://663e5399e1913c4767974f27.mockapi.io/crud-todo/${id}`);
        return res;
        
    } catch (error) {
        console.log("Error in doDeleteApi :",error);
    }
}

//put api
export const doEditApi= async (id,data)=>{
    console.log(data)
    try {
        const res=await axios.put(`https://663e5399e1913c4767974f27.mockapi.io/crud-todo/${id}`,{
            id:data.id,
            title:data.title,
            description:data.description
        });
        return res;
    } catch (error) {
        console.log("Error in doEditApi :",error);
    }
}

