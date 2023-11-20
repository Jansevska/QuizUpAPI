import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


type QuestionType = {
    answer:string,
    author:string,
    created_on:string,
    id:number,
    question: string
}

type Props = {
    question:QuestionType
}

export default function QuestionCard({ question }: Props) {

    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <Card className='my-3'>
            <Card.Body>
                <Card.Title>{ question.question }</Card.Title>
                {showAnswer && <Card.Text>{question.answer}</Card.Text>}
                <Button variant={showAnswer ? 'danger':'success'}onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
                </Button>
            </Card.Body>
        </Card>
    )
}