import axios from '../plugins/axios'
const update = ({api,limit=10,offset=null,id=null,type})=>dispatch=>{
    return (
        axios({
            // url:id ? `${axios.baseUrl}${api}/${id}` : `${axios.baseUrl}${api}`,
            url:`${axios.baseUrl}${api}`,
            params:offset ? {limit,offset} : null
        })
            .then(res=>{
                    // console.log(res.data)
                    dispatch({type,payload:res.data})
                }
            )
            .catch(
                err=>new Error(err)
            )
    )
}

export {update}
