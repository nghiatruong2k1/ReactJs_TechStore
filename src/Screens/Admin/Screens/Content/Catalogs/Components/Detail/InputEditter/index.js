import {memo,useContext,useRef} from 'react';
import {Grid,FormControl,FormHelperText,Typography} from '@mui/material/';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "./index.css"
function InputEditter({left,right,name,label,placeholder,value,onChange,valid,onValid,...props}){
  return(
    <Grid container alignItems="center"{...props}>
      <Grid item {...left}>
        <Typography>{label}:</Typography>
      </Grid>
      <Grid item {...right}>
        <FormControl fullWidth>
          <FormHelperText component="small" error>{valid ?? ""}</FormHelperText>   
          <CKEditor
            config={{
              language:"vi",
            }}
            editor= {ClassicEditor}
            data={value || ""}
            onReady={ editor => {
            } }
            onChange={ ( event, editor ) => {
                onChange && onChange(event,editor.getData());
            } }
            onBlur={ ( event, editor ) => {
            } }
            onFocus={ ( event, editor ) => {
            } }
          />   
        </FormControl>
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

