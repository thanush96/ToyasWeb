import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input, Select, Checkbox, Button, Radio } from 'antd';
import '@fortawesome/fontawesome-free/css/all.css';

const { Option } = Select;

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentMethod: 'cashOnDelivery', // Default payment method
        };
    }

    handlePaymentMethodChange = (e) => {
        this.setState({ paymentMethod: e.target.value });
    };

    handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };

    render() {
        const { paymentMethod } = this.state;

        return (
            <Form
                className="ps-form__billing-info"
                onFinish={this.handleLoginSubmit}>
                <h3 className="ps-form__heading">Billing Information</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <h5>User name</h5>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Form.Item
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Enter your first name!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="First name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="col-sm-6">
                                    <Form.Item
                                        name="lastName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Enter your last name!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Last name"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <h5>Company Name (Optional)</h5>
                            <Form.Item
                                name="companyName"
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Company Name (Optional)"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <h5>Address</h5>
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Item
                                name="flatVilla"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your flat/villa number!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Flat/Villa Number"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item
                                name="buildingName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your building name/number!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Building Name/Number"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item
                                name="streetName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your street name!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Street Name"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item
                                name="cityName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your city name!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="City"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <h5>Country</h5>
                            <Form.Item
                                name="country"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Select your country!',
                                    },
                                ]}>
                                <Select
                                    className="form-control"
                                    placeholder="Select Country">
                                    <Option value="usa">USA</Option>
                                    <Option value="canada">Canada</Option>
                                    <Option value="uk">UK</Option>
                                    {/* Add more countries as needed */}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group">
                            <h5>Region/State</h5>
                            <Form.Item
                                name="regionState"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Select your region/state!',
                                    },
                                ]}>
                                <Select
                                    className="form-control"
                                    placeholder="Select Region/State">
                                    <Option value="california">California</Option>
                                    <Option value="texas">Texas</Option>
                                    <Option value="newYork">New York</Option>
                                    {/* Add more regions/states as needed */}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <h5>City</h5>
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Select your city!',
                                    },
                                ]}>
                                <Select
                                    className="form-control"
                                    placeholder="Select City">
                                    <Option value="losAngeles">Los Angeles</Option>
                                    <Option value="houston">Houston</Option>
                                    <Option value="newYorkCity">New York City</Option>
                                    {/* Add more cities as needed */}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group">
                            <h5>Zip Code</h5>
                            <Form.Item
                                name="zipCode"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your zip code!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Zip Code"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <h5>Email</h5>
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Item
                                name="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your Email!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Email"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item
                                name="PhoneNumber"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your Phone number!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Phone Number"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group text-left">
                    <Checkbox id="shipDifferentAddress">
                        Ship into different address
                    </Checkbox>
                </div>

                <h3 className="ps-form__heading">Payment Option</h3>
                <Radio.Group onChange={this.handlePaymentMethodChange} value={paymentMethod}>
                    <div className="payment-option">
                        <Radio value="cashOnDelivery">
                            <img src="/static/img/categories/images/icon png/c1.png" alt="Cash on Delivery" />
                            <span>Cash on Delivery</span>
                        </Radio>
                    </div>
                    <div className="payment-option">
                        <Radio value="debitCreditCard">
                            <img src="/static/img/categories/images/icon png/c2.png" alt="Debit/Credit Card" />
                            <span>Debit/Credit Card</span>
                        </Radio>
                    </div>
                </Radio.Group>
                {paymentMethod === 'debitCreditCard' && (
                    <>
                        <h5>Name on Card</h5>
                        <Form.Item name="nameOnCard">
                            <Input placeholder="Name on Card" />
                        </Form.Item>
                        <h5>Card Number</h5>
                        <Form.Item name="cardNumber">
                            <Input placeholder="Card Number" />
                        </Form.Item>
                        <div className="row">
                            <div className="col-sm-6">
                                <h5>Expire Date</h5>
                                <Form.Item name="expiryDate">
                                    <Input placeholder="Expire Date (MM/YY)" />
                                </Form.Item>
                            </div>
                            <div className="col-sm-6">
                                <h5>CVC</h5>
                                <Form.Item name="cvc">
                                    <Input placeholder="CVC" />
                                </Form.Item>
                            </div>
                        </div>
                    </>
                )}

                <h3 className="ps-form__heading">Additional Information</h3>
                <h5>Order Notes (Optional)</h5>
                <Form.Item name="orderNotes">
                    <Input.TextArea placeholder="Notes about your order, e.g. special notes for delivery" />
                </Form.Item>

                <div className="ps-form__submit">
                    {/* <Link href="/account/cart">
                        <a>
                            <i className="icon-arrow-left mr-2"></i>
                            Return to shopping cart
                        </a>
                    </Link>
                    <Button type="primary" htmlType="submit">
                        Continue to Shipping
                    </Button> */}
                </div>
            </Form>
        );
    }
}

export default FormCheckoutInformation;
