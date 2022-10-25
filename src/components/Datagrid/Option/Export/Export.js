import { memo, useCallback } from 'react';
import { FileDownloadRounded } from '@mui/icons-material/';
import { IconButton, Tooltip } from '@mui/material';

import { exportFileJson } from '~/utils/File';
import { useGetDatagridContext } from '../../provider';
import { getValues } from '../../../../models';
function ExportButton() {
  const { datasets,model, title, loading } = useGetDatagridContext();
  return (
    <Tooltip title="Export" placement="top" arrow>
      <span>
        <IconButton
          disabled={loading}
          color="inherit"
          onClick={() => {
            const data = datasets.map((item)=>{
              return model && getValues(model,item) || item
            })
            exportFileJson(title,data);
          }}
        >
          <FileDownloadRounded />
        </IconButton>
      </span>
    </Tooltip>
  );
}
export default memo(ExportButton);
