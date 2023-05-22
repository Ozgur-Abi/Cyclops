import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import { withRouter } from "react-router";
import { useState } from "react";

export default function Restaurant() {

    const [res, setRes] = useState({});

    let params = useParams();
    fetch('/api/res/' + params.resId, {
        method: 'GET',
    }).then(res => res.json()).then(data => {
        //this.setState(data);
        if (data.open == true)
            data.openText = "Restaurant is currently open"
        else
            data.openText = "Restaurant is closed"
        setRes(data);
        console.log(data);
    });


    return (
        <div class="container">
            <div class="row">
                <div class="col-12 mr-100 my-5">
                    <h2 style={{textAlign: 'center'}}>{res.restaurantName}</h2>
                    <h5 style={{textAlign: 'center'}}>There are {res.currentCustomerCount} customers in the restaurant right now.
                    </h5>
                    <p style={{textAlign: 'center'}}>{res.openText}</p>
                    <p style={{textAlign: 'center'}}>Address: {res.address}</p>
                    <p style={{textAlign: 'center'}}>Contact: {res.telephone}</p>
                </div>

            </div>
        </div>
    );
}
