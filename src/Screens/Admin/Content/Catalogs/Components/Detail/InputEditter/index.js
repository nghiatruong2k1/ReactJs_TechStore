import {memo,useContext,useRef} from 'react';
import {Grid,TextField,Typography} from '@mui/material/';
import {DetailContext} from "../init";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function InputEditter({left,right,feild,label,placeholder,defaultValue,...props}){
  const {state,handle} = useContext(DetailContext);
  const editorRef = useRef(null);
  function handleEditorChange(){
     if (editorRef.current) {
       handle.change(feild,editorRef.current.getContent());
     }
  };
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <CKEditor
          config={{
            language:"vi",
          }}
          editor= {ClassicEditor}
          data={state.data[feild] ?? defaultValue ?? ""}
          onReady={ editor => {
            console.log(editor)
          } }
          onChange={ ( event, editor ) => {
              handle.change(feild,editor.getData());
          } }
          onBlur={ ( event, editor ) => {
          } }
          onFocus={ ( event, editor ) => {
          } }
        />
      </Grid>
    </Grid>
  )
}
export default memo(InputEditter);

/*
<Editor
           onInit={(evt, editor) => editorRef.current = editor}
           onChange={handleEditorChange}
           initialValue={state.data[feild] ?? defaultValue ?? ""}
           init={{
            height: 1000, 
            language: 'vi',
            plugins: [
               'advlist autolink lists link image charmap print preview anchor',
               'searchreplace visualblocks code fullscreen',
               'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
             'bold italic underline | forecolor backcolor | alignleft aligncenter ' +
             'alignright alignjustify | bullist numlist outdent indent | ' +
             'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
           }}
         />
         */

