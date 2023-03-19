import { memo} from 'react';

import { FormControl, TextField } from '@mui/material/';
import styles from './Search.module.css';
import SearchSelect from './Select';
import SearchOption from './Option';
import { InputAdornment } from '@material-ui/core';
function SearchLayout({
  controllers,
  state,
  dispath,
  handle: { handleSubmit, handleChangeSelect, handleChangeInput },
}) {
  return (
    <FormControl
      fullWidth
      autoComplete="off"
      component="form"
      data-action={controllers[state.controller]}
      data-method={'get'}
      onSubmit={handleSubmit}
    >
      <TextField
        size="small"
        color="info"
        value={state.query}
        onChange={handleChangeInput}
        inputProps={{
          className: styles.input,
        }}
        InputProps={{
          className: styles.outline,
          startAdornment: (
            <InputAdornment position="start" className={styles.adorment}>
              <SearchSelect
                data={controllers}
                value={state.controller}
                onChange={handleChangeSelect}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" className={styles.adorment}>
              <SearchOption />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}
export default memo(SearchLayout);
