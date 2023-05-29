import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Col, Row, Container, Form } from "react-bootstrap";

function Home() {
  const [countData, setCountData] = useState([]);
  const [currentCount, setCurrentCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const data = new FormData();
      data.set("year", date.getFullYear());
      data.set("month", date.getMonth() + 1);
      data.set("day", date.getDate());
      const response = await fetch("/api/tabledata/getcount", {
        method: "POST",
        body: data,
      });
      const response2 = await fetch("/api/tabledata/totalnow");
      const countArray = await response.json();
      const curData = await response2.json();
      let cData = [];
      for (let i = 0; i < 24; i++) {
        cData.push({
          name: i + "-" + (i + 1),
          Average: countArray[i],
        });
      }
      setCountData(cData);
      setCurrentCount(curData.customerCount);
      setMaxCount(curData.tableId * -1);
    };

    fetchData();
  }, [date]);

  const sendDate = async (chosenDate) => {
    console.log(chosenDate);
    const data = new FormData();
    data.set("year", parseInt(chosenDate.substring(0, 4)));
    data.set("month", parseInt(chosenDate.substring(5, 7)));
    data.set("day", parseInt(chosenDate.substring(8, 10)));
    const response = await fetch("/api/tabledata/getcount", {
      method: "POST",
      body: data,
    });
    const response2 = await fetch("/api/tabledata/totalnow");
    const countArray = await response.json();
    const curData = await response2.json();
    let cData = [];
    for (let i = 0; i < 24; i++) {
      cData.push({
        name: i + "-" + (i + 1),
        Average: countArray[i],
      });
    }
    setCountData(cData);
    setCurrentCount(curData.customerCount);
    setMaxCount(curData.tableId * -1);
    console.log(cData);
  };

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <Row>
        <Col>
          <div>
            <h2
              className="d-flex justify-content-center text-decoration-underline"
              style={{ fontSize: 30, textAlign: "center" }}
            >
              Customer Count
            </h2>
            <h5 style={{ textAlign: "center" }}>
              There are {currentCount} customers in the restaurant right now.
            </h5>
            <p style={{ textAlign: "center" }}>
              The restaurants maximum capacity is: {maxCount} customers.
            </p>
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
              <YAxis domain={[0, maxCount]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Average" fill="#82ca9d" />
            </BarChart>
          </div>
        </Col>
      </Row>
      <Row>
        <Form>
          <Form.Group className="md-12" controlId="chosenDate">
            <Form.Control
              type="date"
              size="sm"
              onChange={(e) => sendDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export { Home };
