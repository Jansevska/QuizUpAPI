import axios from "axios"
import APIResponse from "../types/api"
// import UserType from "../types/auth"
import QuestionType from "../types/question"


const base: string = 'https://cae-bookstore.herokuapp.com'
const questionEndpoint: string = '/question/all'


const apiClientNoAuth = () => axios.create(
    {
        baseURL: base
    }
)

// const apiClientBasicAuth = (email:string, password:string) => axios.create(
//     {
//         baseURL: base,
//         headers: {
//             Authorization: 'Basic ' + btoa(`${email}:${password}`)
//         }
//     }
// )

// const apiClientTokenAuth = (token:string) => axios.create(
//     {
//         baseURL: base,
//         headers: {
//             Authorization: 'Bearer ' + token
//         }
//     }
// )


async function getAllQuestions(): Promise<APIResponse<QuestionType[]>> {
    let data;
    let error;
    try {
        const response = await apiClientNoAuth().get(questionEndpoint);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.message
        } else {
            error = 'Something went wrong'
        }
    }
    return {data, error}
}


export {
    getAllQuestions,
}