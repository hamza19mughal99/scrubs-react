import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Graph.scss'
import { GraphInterface } from '../../../../Interfaces/index'
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select';


const Graph = () => {
    const [values, setValues] = useState<any>([])
    const { handleSubmit, formState: { errors }, reset, control } = useForm<GraphInterface>();
    useEffect(() => {
        setValues([
            { value: 'Monthly', label: 'Monthly' },
            { value: 'Yearly', label: 'Yearly' },
            { value: 'Weekly', label: 'Weekly' }
        ])
    }, [])

    return (
        <div className='page_responsive'>
            <h3>Product Graph</h3>
            <div className='dropdown_container'>
                <Controller
                    name="values"
                    control={control}
                    render={({ field }) => {
                        return (
                            <Select
                                {...field}
                                options={values}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder="Select Time Period"
                            />
                        );
                    }}
                />
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='graph_container'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGbcGDc4d9yBpafEyLxK5kYnsZF1NNkyj0g&usqp=CAU"/>
                        </div>
                        <div className='time_period_container'>
                            <div>
                                <span>Yearly</span>
                            </div>

                            <div>
                                <span>Monthly</span>
                            </div>

                            <div>
                                <span>Weekly</span>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Graph