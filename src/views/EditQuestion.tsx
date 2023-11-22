import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionType from '../types/question';
import { getQuestion, editQuestion, deleteQuestion } from '../lib/apiWrapper';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import UserType from '../types/auth';
import CategoryType from '../types/category';


type EditQuestionProps = {
    currentUser: UserType|null,
    flashMessage: (message:string, category:CategoryType) => void
}

export default function EditQuestion({ currentUser, flashMessage }: EditQuestionProps) {
    const { questionId } = useParams();
    const navigate = useNavigate();

    const [questionToEdit, setQuestionToEdit] = useState<QuestionType|null>(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function getQuestionToEdit(){
            let response = await getQuestion(questionId!);
            if (response.error){
                console.warn(response.error);
            } else {
                setQuestionToEdit(response.data!);
            }
        }

        getQuestionToEdit();
    }, []);

    useEffect(() => {
        if (questionToEdit && currentUser){
            console.log(questionToEdit, currentUser);
            if (questionToEdit.userId !== currentUser.id){
                flashMessage('You do not have permission to edit this post.', 'warning');
                navigate('/questions');
            }
        }
    }, [questionToEdit, currentUser])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuestionToEdit({...questionToEdit!, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token') || ''
        const response = await editQuestion(token, questionId!, questionToEdit!);
        if (response.error){
            flashMessage(response.error, 'danger')
        } else {
            flashMessage(`${response.data?.question} has been edited`, 'success');
            navigate('/questions')
        }
    }

    const handleDeleteQuestion = async () => {
        const token = localStorage.getItem('token') || ''
        const response = await deleteQuestion(token, questionId!);
        if (response.error){
            flashMessage(response.error, 'danger');
        } else {
            flashMessage(response.data?.success!, 'primary');
            navigate('/questions');
        }
    }

    return (
        <>
            <h1 className="text-center">Edit {questionToEdit?.question}</h1>
            {questionToEdit && (
                <Card>
                    <Card.Body>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Label>Edit Question</Form.Label>
                            <Form.Control name='question' value={questionToEdit.question} onChange={handleInputChange} />
                            <Form.Label>Edit Question Answer</Form.Label>
                            <Form.Control name='answer' value={questionToEdit.answer} onChange={handleInputChange} />
                            <Button variant='success' className='mt-3 w-50' type='submit'>Edit Question</Button>
                            <Button variant='danger' className='mt-3 w-50' onClick={handleShow}>Delete Question</Button>
                        </Form>
                    </Card.Body>
                </Card>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {questionToEdit?.question}?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {questionToEdit?.question}? This action cannot be undone!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDeleteQuestion}>
                        Delete Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}