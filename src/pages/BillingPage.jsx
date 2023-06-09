import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Table, Form, Dropdown } from 'react-bootstrap';

const BillingPage = () => {
    const itemReducer = useSelector((state) => state.billRate);
    const items = itemReducer.items;
    const [newItems, setNewItems] = useState([]);
    const [selectedExamNames, setSelectedExamNames] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedPapers, setSelectedPapers] = useState([]);
    const [selectedStudentCounts, setSelectedStudentCounts] = useState([]);
    const [selectedTotalDays, setSelectedTotalDays] = useState([]);
    const [selectedPaperTypes, setSelectedPaperTypes] = useState([]);
    const [amounts, setAmounts] = useState([]);

    const addingAllElementsInList = () => {
        const allItems = items.flatMap((item) => item.subItems);
        setNewItems(allItems);
        setSelectedExamNames(new Array(allItems.length).fill(''));
        setSelectedYears(new Array(allItems.length).fill(''));
        setSelectedSubjects(new Array(allItems.length).fill(''));
        setSelectedPapers(new Array(allItems.length).fill(''));
        setSelectedStudentCounts(new Array(allItems.length).fill(''));
        setSelectedTotalDays(new Array(allItems.length).fill(''));
        setSelectedPaperTypes(new Array(allItems.length).fill(''));
    };

    useEffect(() => {
        addingAllElementsInList();
    }, []);

    const calculateAmount = (index) => {
        const paper = selectedPapers[index] || 0;
        const studentCount = selectedStudentCounts[index] || 0;
        const totalDays = selectedTotalDays[index] || 0;
        const paperType = selectedPaperTypes[index] || 0;
        const price = newItems[index].price || 0;

        return paper * studentCount * totalDays * paperType * price;
    };

    const calculateTotalAmount = () => {
        return amounts.reduce((total, amount) => total + amount, 0);
    };

    useEffect(() => {
        const updatedAmounts = newItems.map((item, index) => calculateAmount(index));
        setAmounts(updatedAmounts);
    }, [selectedPapers, selectedStudentCounts, selectedTotalDays, selectedPaperTypes]);


    const renderAmounts = () => {
        return newItems.map((item, index) => {
            const amount = calculateAmount(index);
            return (
                <h6 className='text-white text-center' key={index}>
                    {amount}
                </h6>
            );
        });
    };




    const handleExamNameChange = (index, value) => {
        const updatedExamNames = [...selectedExamNames];
        updatedExamNames[index] = value;
        setSelectedExamNames(updatedExamNames);
    };

    const handleYearChange = (index, value) => {
        const updatedYears = [...selectedYears];
        updatedYears[index] = value;
        setSelectedYears(updatedYears);
    };

    const handleSubjectChange = (index, value) => {
        const updatedSubjects = [...selectedSubjects];
        updatedSubjects[index] = value;
        setSelectedSubjects(updatedSubjects);
    };

    const handlePaperChange = (index, value) => {
        const updatedPapers = [...selectedPapers];
        updatedPapers[index] = value;
        setSelectedPapers(updatedPapers);
    };

    const handleStudentCountChange = (index, value) => {
        const updatedStudentCounts = [...selectedStudentCounts];
        updatedStudentCounts[index] = value;
        setSelectedStudentCounts(updatedStudentCounts);
    };

    const handleTotalDaysChange = (index, value) => {
        const updatedTotalDays = [...selectedTotalDays];
        updatedTotalDays[index] = value;
        setSelectedTotalDays(updatedTotalDays);
    };

    const handlePaperTypeChange = (index, value) => {
        const updatedPaperTypes = [...selectedPaperTypes];
        updatedPaperTypes[index] = value;
        setSelectedPaperTypes(updatedPaperTypes);
    };


    return (
        <div className='bg-dark d-flex flex-column min-vh-100'>
            <h1 className='text-center text-white pt-4 pb-4'>Bill Maker</h1>
            <Table striped bordered hover responsive variant='dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Exam name</th>
                        <th>Year</th>
                        <th>Subject</th>
                        <th>Paper</th>
                        <th>No. of student/paper</th>
                        <th>Total days</th>
                        <th>Paper Type</th>
                        <th>Amount</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {newItems.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                                            {selectedExamNames[index] ? selectedExamNames[index] : 'Choose Exam Name'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleExamNameChange(index, 'B.Sc Engineering')}>
                                                B.Sc Engineering
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleExamNameChange(index, 'Bachelor of Science')}>
                                                Bachelor of Science
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleExamNameChange(index, 'Bachelor of Arts')}>
                                                Bachelor of Arts
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleExamNameChange(index, 'BBA')}>BBA</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleExamNameChange(index, 'MBA')}>MBA</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleExamNameChange(index, 'MA')}>MA</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                                            {selectedYears[index] ? selectedYears[index] : 'Choose year'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleYearChange(index, '2023')}>2023</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleYearChange(index, '2022')}>2022</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleYearChange(index, '2021')}>2021</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleYearChange(index, '2020')}>2020</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleYearChange(index, '2019')}>2019</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleYearChange(index, '2018')}>2018</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Form.Control
                                        type='text'
                                        placeholder='Subject'
                                        value={selectedSubjects[index]}
                                        onChange={(e) => handleSubjectChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type='number'
                                        placeholder='Paper'
                                        value={selectedPapers[index]}
                                        onChange={(e) => handlePaperChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type='number'
                                        placeholder='No. of std'
                                        value={selectedStudentCounts[index]}
                                        onChange={(e) => handleStudentCountChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type='number'
                                        placeholder='Total Days'
                                        value={selectedTotalDays[index]}
                                        onChange={(e) => handleTotalDaysChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type='number'
                                        placeholder='Paper Type'
                                        value={selectedPaperTypes[index]}
                                        onChange={(e) => handlePaperTypeChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <h6 className='text-white text-center'>{item.price}</h6>
                                </td>
                                <td>
                                    <h6 className='text-white text-center'>{renderAmounts()[index]}</h6>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <h6 className='text-white text-center'>Total</h6>
                        </td>
                        <td>
                            <h6 className='text-white text-center'>{amounts.reduce((a, b) => a + b, 0)}</h6>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <h2>Hi</h2>
            <footer className='bg-dark text-white text-center p-4 mt-auto'>
                <p>© 2023 - Teacher Management System</p>
            </footer>
        </div>
    );
};

export default BillingPage;
