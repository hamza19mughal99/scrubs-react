import React from 'react'
import ReactQuill from 'react-quill';

const Editor = () => {

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
    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
        />
    )
}

export default Editor