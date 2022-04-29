import React, {useEffect, useState} from 'react';
import {Spinner, Tab, Tabs} from "react-bootstrap";
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';
import {ORDER_KEY} from '../../../../Interfaces/index'
import {useNavigate} from 'react-router-dom'
import {
    getCancelledOrder,
    getCompletedOrder,
    getInProgressOrder,
    getOrder,
    getPendingOrder, toCancelledOrder, toCompletedOrder,
    toInProgressOrder
} from "../../../../api/admin/order";
import {errorNotify} from "../../../../utils/toast";

const Order = () => {
    const navigate = useNavigate()
    const [key, setKey] = useState<string>(ORDER_KEY.totalOrder)
    const [allOrderPage, setAllOrderPage] = useState(0);
    const [pendingOrderPage, setPendingOrderPage] = useState(0);
    const [inProgressOrderPage, setInProgressOrderPage] = useState(0);
    const [cancelledOrderPage, setCancelledOrderPage] = useState(0);
    const [completedOrdersPage, setCompletedOrdersPage] = useState(0);
    const [allOrder, setAllOrder] = useState([]);
    const [pendingOrder, setPendingOrder] = useState([]);
    const [cancelledOrder, setCancelledOrder] = useState([]);
    const [inProgressOrder, setInProgressOrder] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getOrder(allOrderPage)
            .then((res) => {
                setAllOrder(res.data)
                setIsLoading(false)
            })
    }, [allOrderPage, !isFetching])

    useEffect(() => {
        setIsLoading(true)
        getPendingOrder(pendingOrderPage)
            .then((res) => {
                setPendingOrder(res.data)
                setIsLoading(false)
            })
    }, [pendingOrderPage, !isFetching])

    useEffect(() => {
        setIsLoading(true)
        getInProgressOrder(inProgressOrderPage)
            .then((res) => {
                setInProgressOrder(res.data)
                setIsLoading(false)
            })
    }, [inProgressOrderPage, !isFetching])

    useEffect(() => {
        setIsLoading(true)
        getCompletedOrder(completedOrdersPage)
            .then((res) => {
                setCompletedOrders(res.data)
                setIsLoading(false)
            })
    }, [completedOrdersPage, !isFetching])

    useEffect(() => {
        setIsLoading(true)
        getCancelledOrder(cancelledOrderPage)
            .then((res) => {
                setCancelledOrder(res.data)
                setIsLoading(false)
            })
    },[cancelledOrderPage, !isFetching])

    const onAcceptOrderHandler = async (orderId: string) => {
        try {
            setIsLoading(true);
            setIsFetching(true)
            await toInProgressOrder(orderId)
            setIsLoading(false)
            setIsFetching(false)
        } catch (e: any) {
            errorNotify(e.response.data.message)
        }
    }

    const onCompleteOrderHandler = async (orderId: string) => {
        try {
            setIsLoading(true);
            setIsFetching(true)
            await toCompletedOrder(orderId)
            setIsLoading(false)
            setIsFetching(false)
        } catch (e: any) {
            errorNotify(e.response.data.message)
        }
    }

    const onCancelledOrderHandler = async (orderId: string) => {
        try {
            setIsLoading(true);
            setIsFetching(true)
            await toCancelledOrder(orderId)
            setIsLoading(false)
            setIsFetching(false)
        } catch (e: any) {
            errorNotify(e.response.data.message)
        }
    }

    let columns = [
        "Order ID",
        'Price',
        'Status',
        'Order Date',

        {
            name: "Action",
            options: {
                display: key === ORDER_KEY.totalOrder,
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'}
                                    onClick={() => navigate(`/admin/order-details/${tableMeta.rowData[0]}`)}>
                                View
                            </button>
                        </React.Fragment>
                    )
                }
            }
        },

        {
            name: "Actions",
            options: {
                display: key === ORDER_KEY.pendingOrders,
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'} onClick={() => onAcceptOrderHandler(tableMeta.rowData[0])}>
                                Accept
                            </button>
                            <button className={'btn'} onClick={() => onCancelledOrderHandler(tableMeta.rowData[0])}>
                                Reject
                            </button>
                        </React.Fragment>
                    )
                }
            }
        },
        {
            name: "Actions",
            options: {
                display: key === ORDER_KEY.inProgressOrders,
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <button className={'btn mx-2'} onClick={() => onCompleteOrderHandler(tableMeta.rowData[0])}>
                            Completed
                        </button>
                    )
                }
            }
        },

    ]

    return (
        <div className={'page_responsive'}>
            <h3> Manage Orders </h3>

            {
                !isLoading ? (
                        <Tabs
                            activeKey={key}
                            onSelect={(k) => {
                                console.log(k)
                                setKey(k!)
                            }}
                            className="mb-3 tabs"
                        >
                            <Tab eventKey={ORDER_KEY.totalOrder} title="Total" className={'w-100'}>
                                <MuiDataTable title="Total Orders" data={allOrder} columns={columns} page={allOrderPage}
                                              setPage={setAllOrderPage}/>
                            </Tab>
                            <Tab eventKey={ORDER_KEY.pendingOrders} title='Pending' className={'w-100'}>
                                <MuiDataTable title="Pending Orders" data={pendingOrder} columns={columns}
                                              page={pendingOrderPage} setPage={setPendingOrderPage}/>
                            </Tab>
                            <Tab eventKey={ORDER_KEY.inProgressOrders} title='In-Progress' className={'w-100'}>
                                <MuiDataTable title="InProgress Orders" data={inProgressOrder} columns={columns}
                                              page={inProgressOrderPage} setPage={setInProgressOrderPage}/>
                            </Tab>
                            <Tab eventKey={ORDER_KEY.completedOrders} title='Completed' className={'w-100'}>
                                <MuiDataTable title="Total Orders" data={completedOrders} columns={columns}
                                              page={completedOrdersPage} setPage={setCompletedOrdersPage}/>
                            </Tab>

                            <Tab eventKey={ORDER_KEY.cancelledOrders} title='Cancelled' className={'w-100'}>
                                <MuiDataTable title="Total Orders" data={cancelledOrder} columns={columns}
                                              page={cancelledOrderPage} setPage={setCancelledOrderPage}/>
                            </Tab>

                        </Tabs>
                    ) :
                    (
                        <div className="text-center">
                            <Spinner animation={"border"}/>
                        </div>
                    )
            }


        </div>
    );
};

export default Order;
