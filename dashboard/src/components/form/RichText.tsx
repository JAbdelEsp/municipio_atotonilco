import React from "react";
import TextField from "@mui/material/TextField";
import ReactQuill, { Quill } from "react-quill";
import CustomToolbar from "./CustomToolbar";
import "react-quill/dist/quill.snow.css";
type FormTextFieldProps = {
  label: string;
  name: string;
  value: string | null;
  isRequired: boolean | undefined;
  onChange: () => void;
};

export default function RichText({
  label,
  name,
  value,
  isRequired,
  onChange,
}: FormTextFieldProps) {
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];
  return (
    <>
      <CustomToolbar />
      <ReactQuill modules={modules} formats={formats} onChange={onChange} />
    </>
  );
}
