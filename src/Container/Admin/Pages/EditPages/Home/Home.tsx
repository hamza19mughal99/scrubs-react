import React, { useState } from 'react';
import { Card, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "../EditPages.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HomeEdit = () => {

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }]
        ]
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image"
    ]
    const [sliderImages, setSliderImages] = useState<any>([]);
    const [sliderPreviewImages, setSliderPreviewImages] = useState([]);

    const [homeImages, setHomeImages] = useState({
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
        image_5: null,
    })

    const [previewImages, setPreviewImages] = useState<any>({
        preview_1: null,
        preview_2: null,
        preview_3: null,
        preview_4: null,
        preview_5: null,
    })

    const [quillData, setQuillData] = useState({})

    const onDeleteImageChange = (deletePreview: string, deleteImage: string) => {

        setPreviewImages({
            ...previewImages,
            [deletePreview]: null
        })

        setHomeImages({
            ...homeImages,
            [deleteImage]: null
        })
    }

    const onChangeHandler = (e: any, img: string, preview: string) => {
        setHomeImages({
            ...homeImages,
            [img]: e.target.files[0]
        })

        let previewUrl = URL.createObjectURL(e.target.files[0])
        setPreviewImages({
            ...previewImages,
            [preview]: previewUrl
        })

    }

    const onEditorStateChange = (editorState: any, name: string) => {
        setQuillData({
            ...quillData,
            [name]: editorState
        })
    };

    const SliderImageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // @ts-ignore
        setSliderImages([...e.target.files!]);
        const sliderImagePreview: any = [];
        // @ts-ignore
        [...e.target.files!].forEach((img) => {
            sliderImagePreview.push(URL.createObjectURL(img))
        })
        setSliderPreviewImages(sliderImagePreview)
    }

    const SliderDeleteImageChange = (index: number) => {
        let previewImagesClone = sliderPreviewImages.concat()
        previewImagesClone = previewImagesClone.filter((elem, ind) => {
            return index !== ind
        })
        setSliderPreviewImages(previewImagesClone)
    }

    const SliderSubmitHandler = (e: any) => {
        e.preventDefault();

        // slider image data
        console.log(sliderImages)
    }

    const saveTextHandler = () => {
        //Text Data
        console.log(quillData)
    }

    const saveImagesHandler = () => {
        //Images Data
        console.log(homeImages)
    }

    return (
        <div className="page_responsive">
            <h2 className='mb-3'>Home Edit Page</h2>

            <div className={'mb-3'}>
                <h3>Slider</h3>
                <Form onSubmit={SliderSubmitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Control type="file"
                                      required={true}
                                      onChange={SliderImageChangeHandler}
                                      placeholder="Select any image"
                                      multiple={true}
                        />
                    </Form.Group>

                    <div className="edit_product">
                        {sliderPreviewImages.map((imageSrc, index) => {
                            return (
                                <div key={index} className="mb-3">
                                    <Card>
                                        <span>
                                            <IoMdCloseCircleOutline className="cross_icon" onClick={() => SliderDeleteImageChange(index)}
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
                    <div className={'text-center'}>
                        <button type="submit" className={'btn'}>Save Slider</button>
                    </div>
                </Form>
            </div>

            <div className={'mb-3'}>
                <h3>Section 1</h3>

                <div className={'main_section'}>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        onChange={(e) => onEditorStateChange(e, 'section1')}
                    />
                    <Form.Group className="mb-3">
                        <Form.Control type="file"
                            required={true}
                            onChange={(e) => onChangeHandler(e, "image_1", "preview_1")}
                            placeholder="Select any image"
                        />
                        <div className="edit_product">
                            {
                                previewImages.preview_1 ?
                                    (
                                        <div className="mb-3">
                                            <Card>
                                                <span>
                                                    <IoMdCloseCircleOutline className="cross_icon" onClick={() => onDeleteImageChange('preview_1', 'image_1')}
                                                    />
                                                </span>
                                                <Card.Img
                                                    className="img-fluid"
                                                    variant="top"
                                                    src={previewImages.preview_1}
                                                />
                                            </Card>
                                        </div>
                                    )
                                    : null
                            }
                        </div>
                    </Form.Group>
                </div>
            </div>
            <div className={'my-5'}>
                <h3>Section 2</h3>

                <div className={'main_section'}>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        onChange={(e) => onEditorStateChange(e, 'section2')}
                    />
                    <Form.Group className="mb-3">
                        <Form.Control type="file"
                            required={true}
                            onChange={(e) => onChangeHandler(e, "image_2", "preview_2")}
                            placeholder="Select any image"
                        />
                        <div className="edit_product">
                            {
                                previewImages.preview_2 ?
                                    (
                                        <div className="mb-3">
                                            <Card>
                                                <span>
                                                    <IoMdCloseCircleOutline className="cross_icon" onClick={() => onDeleteImageChange('preview_2', 'image_2')}
                                                    />
                                                </span>
                                                <Card.Img
                                                    className="img-fluid"
                                                    variant="top"
                                                    src={previewImages.preview_2}
                                                />
                                            </Card>
                                        </div>
                                    )
                                    : null
                            }
                        </div>
                    </Form.Group>
                </div>
            </div>
            <div className={'my-5'}>
                <h3>Section 3</h3>

                <div className={'main_section'}>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        onChange={(e) => onEditorStateChange(e, 'section3')}
                    />
                    <Form.Group className="mb-3">
                        <Form.Control type="file"
                            required={true}
                            onChange={(e) => onChangeHandler(e, "image_3", "preview_3")}
                            placeholder="Select any image"
                        />
                        <div className="edit_product">
                            {
                                previewImages.preview_3 ?
                                    (
                                        <div className="mb-3">
                                            <Card>
                                                <span>
                                                    <IoMdCloseCircleOutline className="cross_icon" onClick={() => onDeleteImageChange('preview_3', 'image_3')}
                                                    />
                                                </span>
                                                <Card.Img
                                                    className="img-fluid"
                                                    variant="top"
                                                    src={previewImages.preview_3}
                                                />
                                            </Card>
                                        </div>
                                    )
                                    : null
                            }
                        </div>
                    </Form.Group>
                </div>
            </div>
            <div className={'my-5'}>
                <h3>Section 4</h3>

                <div className={'main_section'}>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        onChange={(e) => onEditorStateChange(e, 'section4')}
                    />
                    <Form.Group className="mb-3">
                        <Form.Control type="file"
                            required={true}
                            onChange={(e) => onChangeHandler(e, "image_4", "preview_4")}
                            placeholder="Select any image"
                        />
                        <div className="edit_product">
                            {
                                previewImages.preview_4 ?
                                    (
                                        <div className="mb-3">
                                            <Card>
                                                <span>
                                                    <IoMdCloseCircleOutline className="cross_icon" onClick={() => onDeleteImageChange('preview_4', 'image_4')}
                                                    />
                                                </span>
                                                <Card.Img
                                                    className="img-fluid"
                                                    variant="top"
                                                    src={previewImages.preview_4}
                                                />
                                            </Card>
                                        </div>
                                    )
                                    : null
                            }
                        </div>
                    </Form.Group>
                </div>
            </div>

            <div className={'main_section'}>
                <button type={'button'} className="btn my-4" onClick={saveTextHandler} >Save Text</button>
                <button type={'button'} className="btn my-4" onClick={saveImagesHandler} >Save Images</button>

            </div>
        </div>
    );
};

export default HomeEdit;
