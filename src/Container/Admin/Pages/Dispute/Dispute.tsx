import React, {useEffect, useState} from 'react'
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';
import {Container, Spinner} from 'react-bootstrap'
import {getDisputedOrder, toApprovedDispute} from "../../../../api/admin/dispute";
import {toCompletedOrder} from "../../../../api/admin/order";

const Dispute = () => {
    const [disputedOrdersPage, setDisputedOrdersPage] = useState(0);
    const [disputedOrder, setDisputedOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getDisputedOrder(disputedOrdersPage)
            .then((res) => {
                setDisputedOrder(res.data)
                setIsLoading(false)
            })
    }, [disputedOrdersPage, !isFetching])


    const onAcceptDisputeHandler = async (orderId: string) => {
        setIsLoading(true);
        setIsFetching(true)
        await toApprovedDispute(orderId)
        setIsLoading(false);
        setIsFetching(false)
    }

    const onCancelledDisputeHandler = async (orderId: string) => {
        setIsLoading(true);
        setIsFetching(true)
        await toCompletedOrder(orderId)
        setIsLoading(false);
        setIsFetching(false)
    }

    let columns = [
        "Order ID",
        'Price',
        'Status',
        'Order Date',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'} onClick={() => onAcceptDisputeHandler(tableMeta.rowData[0])}>
                                Accept
                            </button>
                            <button className={'btn'} onClick={() => onCancelledDisputeHandler(tableMeta.rowData[0])}>
                                Reject
                            </button>
                        </React.Fragment>
                    )
                }
            }
        },
    ]
    return (
        <div className='page_responsive'>
            <h3>Dispute Orders</h3>
            <Container>
                {
                    !isLoading ? (
                        <MuiDataTable title="Total Orders" data={disputedOrder} columns={columns}
                                      page={disputedOrdersPage} setPage={setDisputedOrdersPage}/>
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

export default Dispute
