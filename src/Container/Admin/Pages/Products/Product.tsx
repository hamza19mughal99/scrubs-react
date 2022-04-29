import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";
import ProductDetails from './ProductDetails/ProductDetails'
import { successNotify } from "../../../../utils/toast";
import { deleteProduct, getProduct, getProductById } from "../../../../api/admin/product";

const Products = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [viewLoading, setViewLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [productDetailShow, setProductDetailsShow] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

  const handleClose = () =>  {
    setProductDetailsShow(false)
  }

  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    getProduct(page)
      .then((res) => {
        setData(res.data)
        setIsLoading(false);
      })
  }, [page, !isFetching])

  const onDeleteHandler = (productId: string) => {
    setIsLoading(true)
    setIsFetching(true)
    deleteProduct(productId)
      .then((res) => {
        successNotify(res.data.message)
        setIsFetching(false)
        setIsLoading(false)
      })
  }

  const onViewHandler = (productId: string) => {
    setViewLoading(true)
    getProductById(productId)
      .then((res) => {
        setProduct(res.data)
        setViewLoading(false)
      })
    setProductDetailsShow(true)
  }

  let columns = [
    'Product ID',
    'Product Name',
    'Product Price',
    {
      name: "Actions",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <div className={"d-flex"}>
              <button className={'btn mx-2'} onClick={() => navigate(`/admin/edit-product/${tableMeta.rowData[0]}`)}>
                Edit
              </button>
              <button className={'btn mx-2'} onClick={() => onDeleteHandler(tableMeta.rowData[0])}>
                Delete
              </button>
              <button className={'btn'} onClick={() => onViewHandler(tableMeta.rowData[0])}>
                View
              </button>
            </div>
          )
        }
      },
    },
  ]

  const deleteProductHandler = () => {
    setShow(!show)
  }
  const onDeleteSubmit = () => {
    setShow(!show)
  }

  return (
    <div className={'page_responsive'}>
      <DeleteModal show={show} onClose={() => setShow(!show)} onSubmit={onDeleteSubmit} />
      <h3> Products </h3>

      <div className={'create_product_btn'}>
        <Button className="all_btns" onClick={() => navigate('/admin/create-product')}>Create Product</Button>
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
      {
        !isLoading ?
          <ProductDetails isLoading={viewLoading} product={product} show={productDetailShow} handleClose={handleClose} />
          : null
      }
    </div >
  );
};

export default Products;
