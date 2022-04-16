import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  IconButton,
  Tooltip
 } from '@mui/material/';
import {
  AddCircleOutlineRounded,
  FileDownloadRounded,
  FileUploadRounded
} from '@mui/icons-material/';
import styles from './styles.module.css';

import{NavLink}from'react-router-dom';
import Title from "../../../../Title/";

import {ListContext} from "../provider";
function Head({...props}){
  const {title,controller} = useContext(ListContext);
  return(
    <>
      <Title text={title}>
        <Tooltip title={"Thêm mới"} placement="top">
          <IconButton component={NavLink} to={"/admin/catalog/"+controller+"/add"} color="info">
            <AddCircleOutlineRounded />
          </IconButton>
        </Tooltip>
        <Tooltip title="Export" placement="top">
          <IconButton color="secondary">
            <FileDownloadRounded />
          </IconButton>
        </Tooltip>
        <Tooltip title="Import" placement="top">
          <IconButton color="success">
            <FileUploadRounded />
          </IconButton>
        </Tooltip>
      </Title>
    </>
  )
}
export default memo(Head);