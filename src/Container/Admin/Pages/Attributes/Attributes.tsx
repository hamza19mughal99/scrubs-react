import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { Button, Spinner } from "react-bootstrap";
import { deleteAttributes, getAttributes } from "../../../../api/admin/attribute";
import { successNotify } from "../../../../utils/toast";

const Attributes = () => {
    const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    getAttributes(page)
      .then((res) => {
        setData(res.data)
        setIsLoading(false);
      })
  }, [page, !isFetching])


  const onDeleteHandler = (categoryId: string) => {
    setIsLoading(true)
    setIsFetching(true)
    deleteAttributes(categoryId)
      .then((res) => {
        successNotify(res.data.message)
        setIsFetching(false)
        setIsLoading(false)
      })
  }


    let columns = [
      {
        name: "ID",
        options: {
          display: false,
        },
      },
        'Attribute Name',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'} onClick={() => navigate(`/admin/create-attributes/${tableMeta.rowData[0]}`)}>
                                Edit
                            </button>
                            <button className={'btn'} onClick={() => onDeleteHandler(tableMeta.rowData[0])}>
                                Delete
                            </button>
                        </React.Fragment>
                    )
                }
            },
        },
    ]

    return (
        <div className={'page_responsive'}>
            <h3> Attributes </h3>

            <div className={'create_product_btn'}>
                <Button className='all_btns' onClick={() => navigate('/admin/create-attributes')}>Create Attributes</Button>
            </div>
          {
            !isLoading ?
              <MuiDataTable data={data} columns={columns} page={page} setPage={setPage} />
              : (
                <div className={"text-center"}>
                  <Spinner animation={"border"}/>
                </div>
              )
          }
        </div>
    );
};
export default Attributes;
