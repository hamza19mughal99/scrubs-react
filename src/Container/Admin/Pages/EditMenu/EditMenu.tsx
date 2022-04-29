import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import MenuModal from "../../../../Components/Modal/Modal";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import { useForm } from "react-hook-form"
import inputValidation from '../../../../lib/Validation';
import {EditMenuInterface} from '../../../../Interfaces/index'
import {MenuData} from "../../../../hooks/admin";
import {successNotify} from "../../../../utils/toast";

const EditMenu = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<EditMenuInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        successNotify('success')
        reset()
    })

    let columns = [
        'ID',
        'Role Name',
        {
            name: "Actions",
            options: {
                customBodyRender: (value: any, tableMeta: any) => {
                    return (
                        <button className={'btn mr-3'} onClick={editMenuHandler}>
                            Edit
                        </button>
                    )
                }
            },
        },
    ]


    const editMenuHandler = () => {
        setShow(true)
    }

    const modal = (
        <MenuModal size='md' modalTitle={"Edit Menu"} show={show} handleClose={() => setShow(false)}>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                    <label>Menu Name</label>
                    <Form.Control {...register('menuName', inputValidation.menuName)} type="text" />
                    <small className="text-danger"> {errors.menuName && errors.menuName.message} </small>
                </Form.Group>
                <div className="text-center">
                    <Button type= "submit">Update</Button>
                </div>
            </Form>
        </MenuModal>
    )

    return (
        <div className={'page_responsive'}>
            {modal}
            <h3> Edit Menu </h3>

            <MuiDataTable data={MenuData} columns={columns} />
        </div>
    );
};
export default EditMenu;
