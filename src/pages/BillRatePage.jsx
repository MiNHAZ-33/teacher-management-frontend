import React, { useState } from 'react';
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';

const BillRatePage = () => {
    const [items, setItems] = useState([
        {
            title: 'Class test',
            subItems: [
                {
                    name: 'CT 1',
                    price: 10
                },
                {
                    name: 'CT 2',
                    price: 15
                }
            ]
        },
        {
            title: 'Midterm',
            subItems: [
                {
                    name: 'Midterm 1',
                    price: 20
                },
                {
                    name: 'Midterm 2',
                    price: 25
                }
            ]
        }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newItem, setNewItem] = useState({
        title: '',
        subItemName: '',
        subItemPrice: ''
    });

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSave = () => {
        const { title, subItemName, subItemPrice } = newItem;
        const newSubItem = {
            name: subItemName,
            price: subItemPrice
        };
        const updatedItems = [...items];
        const itemIndex = updatedItems.findIndex((item) => item.title === title);
        if (itemIndex > -1) {
            updatedItems[itemIndex].subItems.push(newSubItem);
        } else {
            updatedItems.push({
                title,
                subItems: [newSubItem]
            });
        }
        setItems(updatedItems);
        handleCloseModal();
        setNewItem({
            title: '',
            subItemName: '',
            subItemPrice: ''
        });
    };

    return (
        <div className='bg-dark text-white'>
            <Container>
                <h1 className='text-center pt-4 pb-4'>Bill Rate</h1>
                <Table striped bordered hover responsive variant='dark'>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Sub-Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>
                                        <Table striped bordered hover variant='dark'>
                                            <tbody>
                                                {item.subItems.map((subItem, subIndex) => {
                                                    return (
                                                        <tr key={subIndex}>
                                                            <td>{subItem.name}</td>
                                                            <td>{subItem.price} taka</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className='text-center'>
                    <Button variant='secondary' className='mt-4' onClick={handleShowModal}>
                        Add new items
                    </Button>
                </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='title'
                                    value={newItem.title}
                                    onChange={handleInputChange}
                                    placeholder='Enter title'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sub-Item Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='subItemName'
                                    value={newItem.subItemName}
                                    onChange={handleInputChange}
                                    placeholder='Enter sub-item name'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sub-Item Price</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='subItemPrice'
                                    value={newItem.subItemPrice}
                                    onChange={handleInputChange}
                                    placeholder='Enter sub-item price'
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant='primary' onClick={handleSave}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
};

export default BillRatePage;
