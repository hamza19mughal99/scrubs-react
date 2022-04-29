import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import "../CreateProduct/CreateProduct.scss";
import { errorNotify, successNotify } from "../../../../../utils/toast";
import inputValidation from "../../../../../lib/Validation";
import { ProductInterface } from "../../../../../Interfaces/index";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./EditProduct.scss";
import { ColorSizeData } from "../../../../../hooks/admin/index";
import {
  deleteImage,
  getProductById,
  updateProduct,
  uploadImages,
} from "../../../../../api/admin/product";
import { getColorOptions } from "../../../../../api/admin/color";
import { getAttributesOptions } from "../../../../../api/admin/attribute";
import { getCategoryOptions } from "../../../../../api/admin/category";
import {AiOutlinePlus} from "react-icons/ai";

interface IInventory {
  color: string;
  colorName: string;
  size: string;

  quantity: number;
}

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inventory, setInventory] = useState<IInventory[]>([]);
  const [productColor, setProductColor] = useState<any>([]);
  const [productColorSize, setProductColorSize] = useState<any>([]);
  const [formLoading, setFormLoading] = useState(false);
  const [productColorquantity, setProductColorQuantity] = useState<any>({
    value: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm<ProductInterface>();
  const [images, setImages] = useState<any>([]);
  const [colorOption, setColorOption] = useState([]);
  const [attributeOption, setAttributeOption] = useState([]);
  const [categoryOption, setCategoryOption] = useState([]);
  const [isFetching, setIsFetching] = useState(false);


  useEffect(() => {
    getColorOptions().then((res) => {
      setColorOption(res.data);
    });
    getAttributesOptions().then((res) => {
      setAttributeOption(res.data);
    });

    getCategoryOptions().then((res) => {
      setCategoryOption(res.data);
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    getProductById(id!).then((res) => {
      setProduct(res.data);
      const inventory = res.data.inventory.map((inventory: any) => {
        return {
          colorName: inventory.color.name,
          color: inventory.color._id,
          size: inventory.size,
          quantity: inventory.quantity,
        };
      });
      setInventory(inventory);
      setValue("name", res.data.name);
      setValue("description", res.data.description);
      setValue("price", res.data.price);
      setValue("type", {
        value: res.data.type,
        label: res.data.type,
      });
      setValue("discountPrice", res.data.discountPrice);
      setValue(
        "category",
        res.data.category.map((category: any) => {
          return {
            value: category._id,
            label: category.name,
          };
        })
      );
      setValue(
        "attribute",
        res.data.attribute.map((attribute: any) => {
          return {
            value: attribute._id,
            label: attribute.name,
          };
        })
      );
      setIsLoading(false);
    });
  }, [!isFetching]);

  const onSubmitHandler = handleSubmit((data) => {
    if (!data.attribute || !data.category) {
      errorNotify("Please Select All fields");
    } else {
      setFormLoading(true);
      const allData: any = {
        ...data,
        attribute: (data.attribute as any).map((val: any) => {
          return val.value;
        }),
        category: (data.category as any).map((val: any) => {
          return val.value;
        }),
        type: data.type.value,
        inventory,
      };

      updateProduct(allData, id!).then((res) => {
        successNotify(res.data.message);
        setFormLoading(false);
        navigate("/admin/products");
        reset();
      });
    }
  });
  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setProductColorQuantity({ value: event?.currentTarget?.value });
  };

  const addColors = () => {
    if (
      !inventory ||
      !productColor ||
      !productColorSize ||
      productColorquantity.value === ""
    ) {
      console.log("Error");
    } else {
      const inventoryClone = inventory.concat();
      inventoryClone.push({
        colorName: productColor.label,
        color: productColor.value,
        size: productColorSize.value,
        quantity: productColorquantity.value,
      });

      setInventory(inventoryClone);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(e.target.files!);
  };

  const formUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsFetching(true)
    const formData = new FormData();
    for (const i of images) {
      formData.append("images", i);
    }
    uploadImages(id!, formData).then((res) => {
      setIsLoading(false);
      setIsFetching(false)
      successNotify(res.data.message);
    });
  };

  const deleteImageHandler = (img: any) => {
    setIsLoading(true);
    setIsFetching(true)
    deleteImage(id!, img)
      .then((res) => {
        setIsLoading(false);
        setIsFetching(false)
        successNotify(res.data.message);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsFetching(false)
        errorNotify(err.response.data.message);
      });
  };

  const DeleteItem = (index: number) => {
    const updatedItems = inventory.filter((elem, ind) => {
      return index !== ind;
    });
    setInventory(updatedItems);
  };

  const type = [
    {
      value: "Men",
      label: "Men",
    },
    {
      value: "Women",
      label: "Women",
    },
  ];

  return (
    <div className="page_responsive">
      <h3>Update Products</h3>
      <div className={"create_product_btn"}>
        <Button onClick={() => navigate("/admin/products")}>Back</Button>
      </div>
      <Container>
        <Row>
          {!isLoading && product ? (
            <Col md={8} className="Products_container">

              <div className="edit_product">
                {product.images.map((data: any) => {
                  return (
                      <div key={data.id} className="mb-3">
                        <Card>
                        <span>
                          <IoMdCloseCircleOutline
                              onClick={() => deleteImageHandler(data)}
                          />
                        </span>
                          <Card.Img
                              className="img-fluid"
                              variant="top"
                              src={data.avatar}
                          />
                        </Card>
                      </div>
                  );
                })}
              </div>

              <Form onSubmit={formUpload}>
                <Form.Group className="mb-3">
                  <Form.Control
                      type="file"
                      multiple
                      required
                      onChange={handleImageChange}
                      placeholder="Select any image"
                  />
                  <div className="d-flex justify-content-end p-3">
                    <Button type="submit">Submit</Button>
                  </div>
                </Form.Group>
              </Form>

              <Form onSubmit={onSubmitHandler}>
                <div className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      {...register("name", inputValidation.name)}
                      placeholder="Enter Product Name"
                    />
                    <small className="text-danger">
                      {" "}
                      {errors.name && errors.name.message}{" "}
                    </small>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      {...register(
                        "description",
                        inputValidation.productDescription
                      )}
                      placeholder="Enter Product Description"
                    />
                    <small className="text-danger">
                      {" "}
                      {errors.description && errors.description.message}{" "}
                    </small>
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

                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          options={type}
                          className="basic-multi-select mb-3"
                          classNamePrefix="select"
                          placeholder="Select Type"
                        />
                      );
                    }}
                  />

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      {...register("price", inputValidation.productPrice)}
                      placeholder="Enter product price"
                    />
                    <small className="text-danger">
                      {" "}
                      {errors.price && errors.price.message}{" "}
                    </small>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      {...register(
                        "discountPrice",
                        inputValidation.discountedPrice
                      )}
                      placeholder="Enter discounted price"
                    />
                    <small className="text-danger">
                      {" "}
                      {errors.discountPrice &&
                        errors.discountPrice.message}{" "}
                    </small>
                  </Form.Group>

                  <Select
                    onChange={setProductColor}
                    options={colorOption}
                    className="basic-multi-select mb-3"
                    classNamePrefix="select"
                    placeholder="Select Colors"
                  />
                  <Select
                    onChange={setProductColorSize}
                    options={ColorSizeData}
                    className="basic-multi-select mb-3"
                    classNamePrefix="select"
                    placeholder="Select Color Size"
                  />
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      min="1"
                      onChange={handleChange}
                      placeholder="Enter product color quantity"
                    />
                  </Form.Group>

                  {inventory.length > 0 ? (
                    <React.Fragment>
                      {inventory?.map(
                        ({ color, quantity, size, colorName }, index) => {
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
                                <div className="icon_container">
                                  <span>
                                    <IoMdCloseCircleOutline
                                      className="cross_icon"
                                      onClick={() => DeleteItem(index)}
                                    />
                                  </span>
                                </div>
                              </Col>
                            </Row>
                          );
                        }
                      )}
                    </React.Fragment>
                  ) : null}
                </div>

                <div className="add_view_container">
                  {!formLoading ? (
                    <React.Fragment>
                      <Button className="all_btns mb-3" type="submit">
                        Update Product
                      </Button>
                      <Button className="all_btns mb-3" onClick={addColors}>
                        <AiOutlinePlus className="plus_icon" />
                      </Button>
                    </React.Fragment>
                  ) : (
                    <div className="text-center">
                      <Spinner animation={"border"} />
                    </div>
                  )}
                </div>
              </Form>
            </Col>
          ) : (
            <div className={"text-center"}>
              <Spinner animation={"border"} />
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};
export default EditProduct;
