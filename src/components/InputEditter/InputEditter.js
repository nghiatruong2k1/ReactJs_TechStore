import { memo, useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, FormLabel } from '@mui/material/';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from './InputEditter.module.css';
import './InputEditter.css';
const sizes = ['small','medium','large']
function InputEditter({
  size,
  label,
  value,
  onChange,
  disabled,
  readOnly,
  error,
  helperText,
}) {


  return (
    <FormControl
      fullWidth
      className={clsx(styles.root, { [styles.disabled]: disabled })}
      disabled={disabled}
      readOnly={readOnly}
    >
      <FormLabel>{label}</FormLabel>
      <FormHelperText error={Boolean(error)}>{helperText ?? ''}</FormHelperText>
      <CKEditor
        init={{
          language: 'vi',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic underline | forecolor backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        editor={ClassicEditor}
        data={value || ''}
        onReady={(editor) => {}}
        onChange={(event, editor) => {}}
        onBlur={(event, editor) => {
          !readOnly && !disabled && onChange && onChange(event, editor.data.get());
        }}
        onFocus={(event, editor) => {}}
      />
    </FormControl>
  );
}
InputEditter.defaultProps = {
  size: 'small',
};
InputEditter.propTypes = {
  size: PropTypes.oneOf(sizes),
};
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
