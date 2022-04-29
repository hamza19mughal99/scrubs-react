import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import { Button, Spinner } from "react-bootstrap";
import { deleteGift, getGift } from "../../../../api/admin/gift";
import { successNotify } from "../../../../utils/toast";

const EGiftCard = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false)
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [giftId, setGiftId] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getGift(page)
      .then((res) => {
        setData(res.data)
        setIsLoading(false);
      })
  }, [page, !isFetching])

  const onDeleteHandler = (giftId: string) => {
    setIsFetching(true)
    setIsLoading(true);
    deleteGift(giftId!)
      .then((res) => {
        setIsFetching(false)
        setIsLoading(false);
        setShow(!show)
        successNotify(res.data.message);
      })
  }

    const columns = [{
      name: "ID",
      options: {
        display: false,
      },
    },
      "E-Gift Card Name", "E-Gift Card Code", "Amount","Description",{
        name: "Actions",
        options: {
            customBodyRender: (value: any, tableMeta: any) => {
                return (
                    <React.Fragment>
                        <button className={'btn mx-2'} onClick={() =>  onDeleteHandler(tableMeta.rowData[0])}>
                            Delete
                        </button>
                        <button className={'btn'} onClick={() => navigate(`/admin/edit-egiftCard/${tableMeta.rowData[0]}`)}>
                            Edit
                        </button>
                    </React.Fragment>
                )
            }
        },
    }]

    return (
        <div className='page_responsive'>
            <h3>E-Gift Card</h3>
            <div>
                <Button className= 'all_btns' onClick={() => navigate('/admin/create-egiftcard')}> Create E-Gift Card </Button>
            </div>
            <div className="coupon_container">
              {
                !isLoading ?
                  <MuiDataTable data={data} columns={columns} page={page} setPage={setPage}/>
                  : (
                    <div className={"text-center"}>
                      <Spinner animation={"border"}/>
                    </div>
                  )
              }
            </div>
        </div>
    );
};

export default EGiftCard;
