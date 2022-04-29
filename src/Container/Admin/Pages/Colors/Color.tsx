import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { Button, Spinner } from "react-bootstrap";
import { deleteColor, getColor } from "../../../../api/admin/color";
import { successNotify } from "../../../../utils/toast";

const Colors = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getColor(page).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, [page]);

  const onDeleteHandler = (colorId: string) => {
    setIsLoading(true);
    deleteColor(colorId).then((res) => {
      successNotify(res.data.message);
      setIsLoading(false);
    });
  };

  let columns = [
    {
      name: "ID",
      options: {
        display: false,
      },
    },
    "Colors Name",
    {
      name: "Actions",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <button
              className={"btn"}
              onClick={() => onDeleteHandler(tableMeta.rowData[0])}
            >
              Delete
            </button>
          );
        },
      },
    },
  ];

  return (
    <div className={"page_responsive"}>
      <h3> Colors </h3>

      <div className={"create_product_btn"}>
        <Button
          className="all_btns"
          onClick={() => navigate("/admin/create-colors")}
        >
          Create Colors
        </Button>
      </div>
      {!isLoading ? (
        <MuiDataTable
          data={data}
          columns={columns}
          page={page}
          setPage={setPage}
        />
      ) : (
        <div className={"text-center"}>
          <Spinner animation={"border"} />
        </div>
      )}
    </div>
  );
};
export default Colors;
