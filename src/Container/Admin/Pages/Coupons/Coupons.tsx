import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import "./Coupons.scss";
import { Button, Spinner } from "react-bootstrap";
import { deleteCoupon, getCoupon } from "../../../../api/admin/coupon";

const Coupons = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false)
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [couponID, setCouponID] = useState<string | null>(null)
  const editCoupons = (couponID: string) => {
    navigate(`/admin/edit-coupon/${couponID}`);
  };

  useEffect(() => {
    setIsLoading(true);
    getCoupon(page)
      .then((res) => {
        setData(res.data)
        setIsLoading(false);
      })
  }, [page, !isFetching])

  const columns = [
    {
      name: "ID",
      options: {
        display: false,
      },
    },
    "Coupon Name",
    "Coupon Code",
    "Price",
    {
      name: "Actions",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <React.Fragment>
              <button className={"btn mx-2"} onClick={() => deleteCouponHandler(tableMeta.rowData[0])}>
                Delete
              </button>
              {/*<button className={"btn"} onClick={() => editCoupons(tableMeta.rowData[0])}>*/}
              {/*  Edit*/}
              {/*</button>*/}
            </React.Fragment>
          );
        },
      },
    },
  ];

  const deleteCouponHandler = (couponID: string) => {
    setShow(!show);
    setCouponID(couponID)
  };
  const onDeleteSubmit = async () => {
    setShow(!show);
    setIsFetching(true)
    setIsLoading(true);
    await deleteCoupon(couponID!)
    setIsFetching(false)
    setIsLoading(false)
  };

  return (
    <div className="page_responsive">
      <DeleteModal
        show={show}
        onClose={() => setShow(!show)}
        onSubmit={onDeleteSubmit}
      />
      <h3>Coupons</h3>
      <div>
        <Button
          className="all_btns"
          onClick={() => navigate("/admin/create-coupon")}
        >
          Create Coupons
        </Button>
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

export default Coupons;
