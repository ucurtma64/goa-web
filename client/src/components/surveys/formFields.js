import * as Yup from 'yup';

export default [
    { label: 'Survey Title', name: 'title', yupValidation: Yup.string().required('Title is required')},
    { label: 'Subject Line', name: 'subject', yupValidation: Yup.string().required('Subject is required')},
    { label: 'Email Body', name: 'body', yupValidation: Yup.string().min(6, 'Body must be at least 6 characters').required('Body is required')},
    { label: 'Recipient List', name: 'recipients', yupValidation: Yup.string().email('Email is invalid').required('Email is required')}
]