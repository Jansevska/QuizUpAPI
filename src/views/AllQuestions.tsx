import { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';

type QuestionType = {
    answer:string,
    author:string,
    created_on:string,
    id:number,
    question: string
}

type Props = {}

export default function AllQuestions({ }: Props) {

    const [questions, setQuestions] = useState<QuestionType[]>([])

    useEffect( () => {
        fetch('https://cae-bookstore.herokuapp.com/question/all')
        .then(res => res.json())
        .then(data => setQuestions(data.questions))
    }, [])

    return (
        <>
            <h1 className='text-center'>Quiz Up Questions</h1>
            {questions.map( question => <QuestionCard question = {question} key={question.id}/>)}
        </>
    )
}