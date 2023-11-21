import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import UserType from '../types/auth'


type QuestionType = {
    answer:string,
    author:UserType,
    created_on:string,
    id:number,
    question: string
}

type Props = {
    question:QuestionType
}

export default function QuestionCard({ question }: Props) {

    // const [showAnswer, setShowAnswer] = useState(false);
    const [guess, setGuess] = useState('');
    const [correct, setCorrect] = useState(false);
    const [formSubitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value);
    }

    const handleFormSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true)
        if (guess.toLowerCase() === question.answer.toLowerCase()) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }

    return (
        <Card className='my-3'>
            <Card.Body>
                <Card.Title>{ question.question }</Card.Title>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Control name='guess' placeholder='Enter Your Guess' value={guess} onChange={handleInputChange} />
                    <Button type='submit'>Check Guess</Button>
                </Form>
                { formSubitted ? correct ? (
                    <h4>Congratulations you have the correct answer!</h4>
                ) : (
                    <h4>You are incorrect. The correct answer is {question.answer}</h4>
                ) : null}
            </Card.Body>
        </Card>
    )
}