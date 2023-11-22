import { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import QuestionType from '../types/question';
import { getAllQuestions } from '../lib/apiWrapper';



type AllQuestionsProps = {

}

export default function AllQuestions({ }: AllQuestionsProps) {

    const [questions, setQuestions] = useState<QuestionType[]>([])

    useEffect( () => {
        // getAllQuestions().then(x => console.log(x))
        async function fetchData(){
            const response = await getAllQuestions();
            if (response.data){
                setQuestions(response.data);
            }
        };

        fetchData()
    }, [])

    return (
        <>
            <h1 className='text-center'>Quiz Up Questions</h1>
            {questions.map( question => <QuestionCard question = {question} key={question.id}/>)}
        </>
    )
}