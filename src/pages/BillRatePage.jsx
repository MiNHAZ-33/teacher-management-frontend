import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Table, Modal, Form, Col, Row } from 'react-bootstrap';
import {
    addItem,
    showModalToUi,
    hideModalToUi,
    updateNewItem,
    resetNewItem
} from '../action/biilRateAction';

const BillRatePage = () => {

    const dispatch = useDispatch();

    const itemRed = useSelector(state => state.billRate);

    const { items, showModal, newItem } = itemRed;


    const handleCloseModal = () => {
        dispatch(hideModalToUi());
    };

    const handleShowModal = () => {

        dispatch(showModalToUi());
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch(updateNewItem(name, value));
    };

    const handleSave = () => {
        const { title, subItemName, subItemPrice } = newItem;
        dispatch(addItem(title, subItemName, subItemPrice));
        dispatch(resetNewItem());
        dispatch(handleCloseModal());
    };

    return (
        <div className='bg-dark text-white'>
            <Container>
                <h1 className='text-center pt-4 pb-4'>Bill Rate</h1>
                <Table striped bordered hover responsive variant='dark'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Name</th>
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
                                                        <Row   key={subIndex}>
                                                            <Col>{subItem.name}</Col>
                                                            <Col>{subItem.price} taka</Col>
                                                        </Row>
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

// const mapStateToProps = (state) => {
//     return {
//         items: state.items,
//         showModal: state.showModal,
//         newItem: state.newItem
//     };
// };

// const mapDispatchToProps = {
//     addItem,
//     showModalToUi,
//     hideModalToUi,
//     updateNewItem,
//     resetNewItem
// };
// export default connect(mapStateToProps, mapDispatchToProps)(BillRatePage);

export default BillRatePage;
