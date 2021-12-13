import React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorWrapper from "./styles/editor.style";

export default function EditorFunc(props) {
  const handleChange = (html) => {
    props.article["commonEditor"] = html;
  };

  return (
    <EditorWrapper>
      <ReactQuill
        theme={"snow"}
        onChange={handleChange}
        modules={EditorFunc.modules}
        formats={EditorFunc.formats}
        bounds={".app"}
        placeholder={"文章寫在此...."}
      />
    </EditorWrapper>
  );
}

EditorFunc.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"],
    // ["bold", "italic", "underline", "strike", "blockquote"], // toggled buttons
    // ["blockquote", "code-block"],

    // [{ header: 1 }, { header: 2 }], // custom button values
    // [{ list: "ordered" }, { list: "bullet" }],
    // [{ script: "sub" }, { script: "super" }], // superscript/subscript
    // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    // [{ direction: "rtl" }], // text direction

    // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],
    // [{ align: [] }],
    // ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
EditorFunc.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "background",
  "color",
  "align",
];

/*
 * PropType validation
 */
EditorFunc.propTypes = {
  placeholder: PropTypes.string,
};
