import React, {useEffect, useState} from 'react'
import {getAllCategories, getAllColors} from "../../../../api/product";
import {Spinner} from "react-bootstrap";


const ProductType: React.FC<any> = ({ color, category,
                                        setCategory,
                                        selectedCategory,
                                        setSelectedCategory,
                                        selectedSize,
                                        setSelectedSize,
                                        selectedColor,
                                        setSelectedColor
}) => {

  const [isLoading, setIsLoading] = useState(false)


  const colorChange = (data:string) => {
      setSelectedColor(data)
  }

    const getColor = () => {
        const resArr: any[] = [];
        color.forEach(function (color: any) {
            const i = resArr.findIndex(x => x._id == color._id);
            if (i <= -1) {
                resArr.push(color)
            }
        })

        return resArr.map((color: any) => (
            <div className={selectedColor === color._id ? "active_border" : ""}
                 style={{backgroundColor: `${color.code}`, width: "25px", height: "25px"}}
                 onClick={() => colorChange(color._id)}/>
        ))
    }


    const [size, setSize] = useState(["XS", "S", "M", "L", "XL", "XXL"])

    const onCategoryAddHandler = (check: boolean, categoryId: string) => {
        const mappedCategory = category.map((category: any) => {
            if (category._id === categoryId) {
                return { ...category, isChecked: check}
            } else {
                return category
            }
        })

       const found = category.find((category: any) => categoryId === category._id);
        if (found.isChecked) {
            let categoryClone = selectedCategory.concat();
            categoryClone = categoryClone.filter((id: any) => {
                return id !== categoryId;
            });
            setSelectedCategory(categoryClone)
        } else {
            const categoryClone = selectedCategory.concat();
            categoryClone.push(categoryId)
            console.log(categoryClone)
            setSelectedCategory(categoryClone)
        }
      setCategory(mappedCategory)
    }

    return (
    !isLoading ? (
        <React.Fragment>
          <div className='Product_type_container'>
            <h5>Product Type</h5>
            {
              category.length > 0 ?
                  (
                      category.map((category: any) => (
                          <div className='mt-4'>
                            <input type='checkbox'
                                   onChange={(e) => onCategoryAddHandler(e.target.checked, category._id)}
                                   checked={category.isChecked}
                            />
                            <span>{ category.name }</span>
                          </div>
                      ))
                  ) : (
                      <div className="text-center">
                          <p>No Category Found</p>
                      </div>
                  )
            }
          </div>

          <div className='size_container'>
            <h5>SIZE</h5>
            <div className='button_container'>
                {
                    size.map((size) => {
                        return (
                            <button className={selectedSize && selectedSize  === size ? "active_border" : ""}
                                    onClick={() => setSelectedSize(size)}>{size}</button>
                        )
                    })
                }
            </div>
          </div>

          <div className='size_container'>
            <h5>COLORS</h5>
            <div className='button_container'>
                {
                    color.length > 0 ? (
                        getColor()
                    ) : (
                        <div className="text-center">
                            <p>No Color Found</p>
                        </div>
                    )
                }
            </div>
          </div>


        </React.Fragment>
    ) : (
        <div className="text-center">
          <Spinner animation={"border"}/>
        </div>
    )
  )
}

export default ProductType
