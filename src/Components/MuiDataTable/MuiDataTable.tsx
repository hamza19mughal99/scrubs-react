import React from 'react'
import MUIDataTable, { FilterType } from "mui-datatables";
import { PAGINATION_LIMIT } from "../../utils/helper";

const MuiDataTable: React.FC<any> = ({ data: {count, data}, columns, setPage, page }) => {

  const options: FilterType | any = {
    filter: false,
    search: false,
    rowsPerPageOptions: [],
    rowsPerPage: PAGINATION_LIMIT,
    count,
    serverSide: true,
    jumpToPage: false,
    page,
    print: false,
    onTableChange:(action: string, newTableState: any) => {
      switch (action) {
        case 'changePage':
          changePage(newTableState);
          break;
      }
    },
    viewColumns: false,
    responsive: 'standard',
    filterType: "checkbox",
    selectableRows: 'none',
  };

  const changePage = (newTableState: any) => {
    setPage(newTableState.page)
  }

    return (
        <div className="mt-4 table">
            <MUIDataTable
                title={""}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    )
}
export default MuiDataTable;
