import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import {eGiftCardHistoryData} from "../../../../hooks/admin";
import {Button} from 'react-bootstrap'

const EGiftCardHistory = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const columns = ["User ID", "E-Gift Card Id", "Amount"]

    const editEgiftCard = () => {
        navigate('/admin/edit-egiftCard/1233')
    }
  
    const deleteEGiftCardHandler = () => {
        setShow(!show)
    }
    const onDeleteSubmit = () => {
        setShow(!show)
    }

    return (
        <div className='page_responsive'>
            <DeleteModal show={show} onClose={() => setShow(!show)} onSubmit={onDeleteSubmit}/>
            <h3>E-Gift Card History</h3>
            <div className="coupon_container">
                <MuiDataTable
                    data={eGiftCardHistoryData}
                    columns={columns}
                />
            </div>
        </div>
    );
};

export default EGiftCardHistory;