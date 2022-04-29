import React, { useEffect, useState } from "react";
import MuiDataTable from '../../../../Components/MuiDataTable/MuiDataTable';
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../../api/admin/user";

const AllUsers = () => {
  const navigation = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then((res) => {
        setData(res.data)
        setIsLoading(false);
      })
  }, [page])


  const columns = [{
      name: "ID",
      options: {
        display: false,
      },
    }, 'Role',"Name","Contact No.","email"]
    return (
        <div className='page_responsive'>
            <h3>All Users</h3>

          <div className={'create_product_btn'}>
            <Button className='all_btns' onClick={() => navigation('/admin/create-user')}>Create User</Button>
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
    )
}

export default AllUsers
