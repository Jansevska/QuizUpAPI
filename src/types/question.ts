import UserType from "./auth"


type QuestionType = {
    answer:string,
    author:number,
    created_on:string,
    id:number,
    question: string,
    userId: UserType,
}

export default QuestionType