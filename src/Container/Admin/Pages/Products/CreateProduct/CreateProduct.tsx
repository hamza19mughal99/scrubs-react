import React, { useState, ChangeEvent, useEffect } from "react";
import {Container, Col, Row, Form, Button, Spinner, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select';
import './CreateProduct.scss';
import { errorNotify, successNotify } from "../../../../../utils/toast";
import inputValidation from '../../../../../lib/Validation';
import { ProductInterface } from '../../../../../Interfaces/index'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { colorData, ColorSizeData, categoryOptions, attributes, sizes } from '../../../../../hooks/admin/index'
import { createProduct } from "../../../../../api/admin/product";
import { getColorOptions } from "../../../../../api/admin/color";
import { getAttributesOptions } from "../../../../../api/admin/attribute";
import { getCategoryOptions } from "../../../../../api/admin/category";
import { AiOutlinePlus } from 'react-icons/ai'

interface IInventory {
    color: string,
    size: string,
    quantity: string
    colorName: string
}

const CreateProduct = () => {
    const navigate = useNavigate();
    const [inventory, setInventory] = useState<IInventory[]>([])
    const [productColor, setProductColor] = useState<any>(null);
    const [productColorSize, setProductColorSize] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [productColorQuantity, setProductColorQuantity] = useState<string>("0");
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<ProductInterface>();
    const [colorOption, setColorOption] = useState([])
    const [attributeOption, setAttributeOption] = useState([])
    const [productImages, setProductImages] = useState<any>([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [categoryOption, setCategoryOption] = useState([])

    useEffect(() => {
        getColorOptions()
          .then((res) => {
              setColorOption(res.data)
          })
        getAttributesOptions()
          .then((res) => {
              setAttributeOption(res.data)
          })

        getCategoryOptions()
          .then((res) => {
              setCategoryOption(res.data)
          })
    }, [])

    const onSubmitHandler = handleSubmit((data) => {
        if (!data.attribute || !data.category) {
            errorNotify("Please Select All fields")
        }
        else {
            setIsLoading(true)
            const allData: any = {
                ...data,
                attribute: (data.attribute as any).map((val: any) => {
                    return val.value
                }),
                category: (data.category as any).map((val: any) => {
                    return val.value
                }),
                type: data.type.value,
                inventory,
                images: productImages
            }

            const formData = new FormData();
            formData.append("name", allData.name);
            for (const i of allData.images) {
                formData.append('images', i);
            }
            formData.append("description", allData.description);
            formData.append("price", allData.price);
            formData.append("discountPrice", allData.discountPrice);
            formData.append("type", allData.type);
            formData.append("images", allData.images)
            formData.append("inventory", JSON.stringify(allData.inventory));
            formData.append("attribute", JSON.stringify(allData.attribute));
            formData.append("category", JSON.stringify(allData.category));
            createProduct(formData)
              .then((res) => {
                  setIsLoading(false)
                  successNotify(res.data.message);
                  navigate('/admin/products')
                  reset()
              })
        }
    })

    const addColors = () => {
        if(productColorQuantity.length <= 0) {
            errorNotify("Please give 1 or greater than 1")
        }
        if (!inventory || !productColor || !productColorSize || productColorQuantity === '') {
            errorNotify("Please Select All fields")
        }
        else {
            const inventoryClone = inventory.concat();

            inventoryClone.push({
                color: productColor.value,
                colorName: productColor.label,
                size: productColorSize.value,
                quantity: productColorQuantity
            })

            setInventory(inventoryClone)
            setProductColor(null)
            setProductColorSize(null)
            setProductColorQuantity("0")
        }
    }

    const DeleteItem = (index:number) =>{
        console.log(index,"IND")
        const updatedItems = inventory.filter((elem,ind)=>{
            return index !== ind
        })
        setInventory(updatedItems)
    }

    const type = [{
        value: "Men",
        label: "Men"
    }, {
        value: "Women",
        label: "Women"
    }];


    const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // @ts-ignore
        setProductImages([...e.target.files!]);
        const imagePreview: any = [];
        // @ts-ignore
        [...e.target.files!].forEach((img) => {
            imagePreview.push(URL.createObjectURL(img))
        })

        setPreviewImages(imagePreview)

    }


    const onDeleteImageChange = (index: number) => {
        let previewImagesClone = previewImages.concat()
        previewImagesClone = previewImagesClone.filter((elem, ind) => {
            return index !== ind
        })
        setPreviewImages(previewImagesClone)
    }


    return (
      <div className="page_responsive">
          <h3>Create Products</h3>
          <div className={'create_product_btn'}>
              <Button onClick={() => navigate('/admin/products')}>Back</Button>
          </div>
          <Container>
              <Row>
                  {
                      !isLoading ? (
                        <Col md={8} className="Products_container">
                            <Form onSubmit={onSubmitHandler}>
                                <div className="mt-3">
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text"  {...register('name', inputValidation.productName)} placeholder="Enter Product Name" />
                                        <small className="text-danger"> {errors.name && errors.name.message} </small>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" {...register('description', inputValidation.productDescription)} placeholder="Enter Product Description" />
                                        <small className="text-danger"> {errors.description && errors.description.message} </small>
                                    </Form.Group>
                                    <Controller
                                      name="category"
                                      control={control}
                                      render={({ field }) => {
                                          return (
                                            <Select
                                              {...field}
                                              isMulti
                                              options={categoryOption}
                                              className="basic-multi-select mb-3"
                                              classNamePrefix="select"
                                              placeholder="Select Category"
                                            />
                                          );
                                      }}
                                    />
                                    <Controller
                                      name="attribute"
                                      control={control}
                                      render={({ field }) => {
                                          return (
                                            <Select
                                              {...field}
                                              isMulti
                                              options={attributeOption}
                                              className="basic-multi-select mb-3"
                                              classNamePrefix="select"
                                              placeholder="Select Attribute"
                                            />
                                          );
                                      }}
                                    />
                                    <Form.Group className="mb-3">
                                        <Form.Control type="file"
                                                      required={true}
                                                      onChange={imageChangeHandler}
                                                      placeholder="Select any image"
                                                      multiple={true}
                                        />
                                        <small className="text-danger"> {errors.images && errors.images.message} </small>
                                    </Form.Group>

                                    <div className="edit_product">
                                        {previewImages.map((imageSrc, index) => {
                                            return (
                                                <div key={index} className="mb-3">
                                                    <Card>
                                                            <span>
                                                                <IoMdCloseCircleOutline className="cross_icon" onClick={() => onDeleteImageChange(index)}
                                                                />
                                                            </span>
                                                        <Card.Img
                                                            className="img-fluid"
                                                            variant="top"
                                                            src={imageSrc}
                                                        />
                                                    </Card>
                                                </div>
                                            );
                                        })}
                                    </div>



                                    <Controller
                                      name="type"
                                      control={control}
                                      render={({ field }) => {
                                          return (
                                            <Select
                                              { ...field }
                                              options={type}
                                              className="basic-multi-select mb-3"
                                              classNamePrefix="select"
                                              placeholder="Select Type"
                                            />
                                          );
                                      }}
                                    />



                                    <Form.Group className="mb-3">
                                        <Form.Control type="number" {...register('price', inputValidation.productPrice)} placeholder="Enter product price" />
                                        <small className="text-danger"> {errors.price && errors.price.message} </small>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="number" {...register('discountPrice', inputValidation.discountedPrice)} placeholder="Enter discounted price" />
                                        <small className="text-danger"> {errors.discountPrice && errors.discountPrice.message} </small>
                                    </Form.Group>

                                    <Select
                                      onChange={setProductColor}
                                      options={colorOption}
                                      value={productColor}
                                      className="basic-multi-select mb-3"
                                      classNamePrefix="select"
                                      placeholder="Select Colors"
                                    />
                                    <Select
                                      onChange={setProductColorSize}
                                      options={ColorSizeData}
                                      value={productColorSize}
                                      className="basic-multi-select mb-3"
                                      classNamePrefix="select"
                                      placeholder="Select Color Size"
                                    />
                                    <Form.Group className="mb-3">
                                        <Form.Control type="number"
                                                      value={productColorQuantity}
                                                      onChange={ (e) => setProductColorQuantity(e.target.value)} placeholder="Enter product color quantity" />
                                    </Form.Group>

                                    {inventory.length > 0 ?
                                      <React.Fragment>
                                          {inventory?.map(({ color, quantity, size, colorName},index) => {
                                              console.log(color, size, quantity)
                                              return (
                                                <Row>
                                                    <Col md={3}>
                                                        <p>{colorName} </p>
                                                    </Col>
                                                    <Col md={3}>
                                                        <p>{size}</p>
                                                    </Col>
                                                    <Col md={3}>
                                                        <p>{quantity}</p>
                                                    </Col>
                                                    <Col md={3}>
                                                        <div className='icon_container'>
                                                            <span><IoMdCloseCircleOutline className='cross_icon' onClick={()=>DeleteItem(index)} /></span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                              )
                                          })}

                                      </React.Fragment>
                                      : null
                                    }

                                </div>
                                <div className='add_view_container'>
                                    <Button className='all_btns mb-3' type="submit">Create Product</Button>
                                    <Button className='all_btns mb-3' onClick={addColors}><AiOutlinePlus className="plus_icon" /></Button>
                                </div>
                            </Form>
                        </Col>
                      ) : (
                        <div className="text-center">
                            <Spinner animation={"border"}/>
                        </div>
                      )
                  }
              </Row>
          </Container>
      </div>
    )
}
export default CreateProduct
