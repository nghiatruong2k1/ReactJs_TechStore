import { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Image.module.css';
import { Paper, Skeleton } from '@mui/material';

function ImageComponent({
  className,
  height,
  width,
  classes:{ wrapper, image },
  alt,
  src,
  placeholder,
  withPlaceholder,
  fit,
  sx,
  loading,
  ...props
}) {
  return (
    <Paper
      elevation={0}
      className={clsx(styles.wrapper, {
        className: className,
        wrapper: wrapper,
      })}
      sx={{
        height: height,
        width: width,
        ...sx,
      }}
      {...props}
    >
      <figure className={styles.figure}>
        {((!src || loading) && (
          <div className={styles.placeholder}>
            <Skeleton className={styles.skeleton}>{placeholder ?? alt}</Skeleton>
          </div>
        )) || (
          <img
            className={clsx(styles.image, styles[fit], {
              image: image,
            })}
            alt={alt || src || 'Hình ảnh'}
            src={src}
            loading={'lazy'}
            style={{
              height:height,
              width:width
            }}
          />
        )}
      </figure>
    </Paper>
  );
}
ImageComponent.defaultProps = {
  fit: 'fill',
  height: '100%',
  width: '100%',
  sx: {},
  classes: {},
  loading: false,
};
ImageComponent.propTypes = {
  fit: PropTypes.oneOf(['fill', 'cover', 'contain']),
  withPlaceholder: PropTypes.bool,
  placeholder: PropTypes.node,
  loading: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  sx: PropTypes.object,
  classes: PropTypes.object,
};
export default memo(ImageComponent);
