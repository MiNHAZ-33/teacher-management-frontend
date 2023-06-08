import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Form, Dropdown } from 'react-bootstrap';

const BillingPage = () => {

    const itemReducer = useSelector(state => state.billRate);

    const { items } = itemReducer;

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
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => {
                            return (
                                item.subItems.map(
                                    (subItem, subIndex) => {
                                        return (
                                            <tr key={subIndex}>
                                                <td>{subItem.name}</td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                            Choose Exam Name
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>B.Sc Engineering</Dropdown.Item>
                                                            <Dropdown.Item>Bachelor of Science</Dropdown.Item>
                                                            <Dropdown.Item>Bachelor of Arts</Dropdown.Item>
                                                            <Dropdown.Item>BBA</Dropdown.Item>
                                                            <Dropdown.Item>MBA</Dropdown.Item>
                                                            <Dropdown.Item>MA</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                            Choose Year
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>2023</Dropdown.Item>
                                                            <Dropdown.Item>2022</Dropdown.Item>
                                                            <Dropdown.Item>2021</Dropdown.Item>
                                                            <Dropdown.Item>2020</Dropdown.Item>
                                                            <Dropdown.Item>2019</Dropdown.Item>
                                                            <Dropdown.Item>2018</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                                <td>
                                                    <Form.Control type="text" placeholder='Subject' />
                                                </td>
                                                <td>
                                                    <Form.Control type="number" placeholder='Paper' />
                                                </td>
                                                <td>
                                                    <Form.Control type="number" placeholder='No. of std' />
                                                </td>
                                                <td>
                                                    <Form.Control type="number" placeholder='Total Days' />
                                                </td>
                                                <td>
                                                    <Form.Control type="number" placeholder='Paper Type' />
                                                </td>
                                                <td>
                                                    <h6 className='text-white text-center'>{ subItem.price  }</h6>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            )
                        }
                        )
                    }
                    <tr>
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
                            <h6 className='text-white text-center'>50000</h6>
                        </td>
                        
                    </tr>

                </tbody>
            </Table>
            <h2>Hi</h2>


            <footer className='bg-dark text-white text-center p-4 mt-auto'>
                <p>© 2023 - Teacher Management System</p>
            </footer>
        </div>
    )
}

export default BillingPage;