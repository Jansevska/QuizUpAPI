import Card from 'react-bootstrap/Card'

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
    return (
        <Card className='my-3'>
            <Card.Body>
                <Card.Title>{ question.question }</Card.Title>
            </Card.Body>
        </Card>
    )
}