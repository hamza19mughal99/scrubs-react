import React, {useEffect, useState} from 'react'
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';
import {Container, Spinner} from 'react-bootstrap'
import {getApprovedOrder, getDisputedOrder} from "../../../../api/admin/dispute";

const ReturnOrder = () => {
    const [returnOrdersPage, setReturnOrdersPage] = useState(0);
    const [returnOrder, setReturnOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getApprovedOrder(returnOrdersPage)
            .then((res) => {
                setReturnOrder(res.data)
                setIsLoading(false)
            })
    }, [returnOrdersPage, !isFetching])



    let columns = [
        "Order ID",
        'Price',
        'Status',
        'Order Date',
    ]
    return (
        <div className='page_responsive'>
            <h3>Return Orders</h3>
            <Container>
                {
                    !isLoading ? (
                        <MuiDataTable title="Total Orders" data={returnOrder} columns={columns}
                                      page={returnOrdersPage} setPage={setReturnOrdersPage}/>
                    ) : (
                        <div className={"text-center"}>
                            <Spinner animation={"border"}/>
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

export default ReturnOrder
