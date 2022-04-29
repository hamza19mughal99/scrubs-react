import React, {useEffect, useState} from 'react'
import './Order.scss';
import MuiTable from '../../../../Components/MuiDataTable/MuiDataTable';
import {Button, Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {getCustomerOrder, toDisputedOrder} from "../../../../api/order";

const Order = () => {

    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        getCustomerOrder(page)
            .then((res) => {
                setIsLoading(false)
                setOrder(res.data)
            })
    }, [page, !isFetching])

    const navigate = useNavigate()

    const onDisputeHandler = async (orderId: string) => {
        setIsLoading(true)
        setIsFetching(true)
        await toDisputedOrder(orderId);
        setIsLoading(false)
        setIsFetching(false)
    }

    const columns = ["Order ID", "Price", "Status", "Order Date", {
        name: "Action",
        options: {
            customBodyRender: (value: any, tableMeta: any) => {
                return (
                    <React.Fragment>
                        <button className={'btn mx-2'} onClick={() => navigate(`/customer/order-details/${tableMeta.rowData[0]}`)}>
                            View
                        </button>
                        <button className={'btn mx-2'} disabled={tableMeta.rowData[2] === "disputed"} onClick={() => onDisputeHandler(tableMeta.rowData[0])}>
                            Dispute
                        </button>
                    </React.Fragment>
                )
            }
        }
    },];
    return (
        <div className={'page_responsive'}>
            <h3>Orders</h3>
            {
                !isLoading ? (
                    <div className="table_container">
                        <MuiTable data={order} columns={columns} page={page} setPage={setPage} />
                    </div>
                ) : (
                    <div className="text-center">
                        <Spinner animation={"border"}/>
                    </div>
                )
            }
        </div>
    )
}
export default Order;
