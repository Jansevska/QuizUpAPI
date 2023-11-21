// import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import QuestionType from '../types/question';
// import UserType from '../types/auth';


// type Props = {
//     question: QuestionType,
//     currentUser: UserType|null
// }

// export default function Question({question }: Props) {
//     return (
//         <Card className='my-3'>
//         {/* <Card.Img variant='top' src={post.imageUrl} /> */}
//         <Card.Body>
//             <Card.Title>{ question.question }</Card.Title>
//             <Card.Text>{ question.answer }</Card.Text>
//             <Card.Subtitle>Posted at {question.created_on} by {question.author}</Card.Subtitle>
//             {question.userId === currentUser?.id && (
//                 <Link to={`/questions/${question.id}`}>
//                     <Button variant='light' className='mt-3'>Edit Question</Button>
//                 </Link>
//             )}
//         </Card.Body>
//     </Card>
//     )
// }