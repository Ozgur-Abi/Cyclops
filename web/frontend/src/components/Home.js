import React, { Component, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Col, Row, Container} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, getDefaultLocale } from  "react-datepicker";
import en from 'date-fns/locale/es';
registerLocale('en', en)

const DateSelector = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Container className="d-flex justify-content-center">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        </Container>
    );
};

const data = [
    {
        name: "9AM - 12AM",
        Capacity: 21,
    },
    {
        name: "12AM - 3PM",
        Capacity: 19,
    },
    {
        name: "3PM - 6PM",
        Capacity: 45,
    },
    {
        name: "6PM - 9PM",
        Capacity: 37,
    },
    {
        name: "9PM - 12PM",
        Capacity: 16,
    }
];

export class Home extends Component {
    static displayName = Home.name;

    state = {
        countData: []
    };

    async componentDidMount() {
        const response = await fetch('/tabledata/gettodaycount');
        const countArray = await response.json();
        let cData = [];
        for(let i = 0; i < 24; i++){
            cData.push(
                {
                    name: i + "-" + (i+1),
                    Capacity: countArray[i]
                }
            )
        }
        this.setState({countData: cData});
    }
    render() {
        const {countData} = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2 style={{textAlign:'center'}}>Customer Count</h2>
                            <h5 style={{textAlign:'center'}}>There are 37
                                customers in the restaurant right now.
                            </h5>
                            <p style={{textAlign:'center'}}>The restaurants maximum capacity is: 52 customers.</p>
                        </div>
                        <div className="d-flex justify-content-center <- doesn't work">
                            <DatePicker locale="en"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <BarChart
                                width={700}
                                height={500}
                                data={countData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Capacity" fill="#82ca9d" />
                            </BarChart>
                        </div>

                    </Col>
                </Row>

            </Container>

        );
    }
}
