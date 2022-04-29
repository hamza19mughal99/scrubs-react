import React, { useEffect, useState } from "react";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { taxesData } from "../../../../hooks/admin";
import TaxesModal from '../../../../Components/Modal/Modal'
import { Form, Spinner } from "react-bootstrap";
import inputValidation from '../../../../lib/Validation';
import { TexInterface } from '../../../../Interfaces/index'
import { useForm } from "react-hook-form";
import { getTax, updateTax } from "../../../../api/admin/tax";
import { successNotify } from "../../../../utils/toast";


const Taxes = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TexInterface>();
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    const onSubmitHandler = handleSubmit((data) => {
        setShow(!show)
        setIsLoading(true)
        setIsFetching(true)
        updateTax(data, taxId!)
          .then((res) => {
              setIsLoading(false)
              setIsFetching(false)
              successNotify(res.data.message)
          })
        reset()
    })

    useEffect(() => {
        setIsLoading(true);
        getTax(page)
          .then((res) => {
              setData(res.data)
              setIsLoading(false);
          })
    }, [page, !isFetching])

    const [taxId, setTaxId] = useState<null | string>(null)

    const onModalOpenHandler = (taxId: string) => {
      setTaxId(taxId);
      setShow(!show)
    }


    let columns = [
        {
            name: "ID",
            options: {
                display: false,
            },
        },
        'State Name',
        'Tax%',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <React.Fragment>
                            <button className={'btn mx-2'} onClick={() => onModalOpenHandler(tableMeta.rowData[0])}>
                                Edit
                            </button>

                        </React.Fragment>
                    )
                }
            },
        }
    ]


    return (
        <div className={'page_responsive'}>
            <h3>Taxes</h3>
            {
                !isLoading ?
                  <MuiDataTable data={data} columns={columns} page={page} setPage={setPage} />
                  : (
                    <div className={"text-center"}>
                        <Spinner animation={"border"}/>
                    </div>
                  )
            }
            <TaxesModal size={"lg"} show={show} modalTitle={"Edit Tax"} handleClose={handleClose}>
                <React.Fragment>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Control {...register('tax', inputValidation.taxPercent)} placeholder="Enter Tax Percentage" type="text" />
                        <small className="text-danger"> {errors.tax && errors.tax.message} </small>
                        <div className='text-center mt-3'>
                            <button className={'btn'}>
                                Save
                            </button>
                        </div>
                    </Form>
                </React.Fragment>
            </TaxesModal>

        </div>
    );
};
export default Taxes;
