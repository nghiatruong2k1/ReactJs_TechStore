import { memo, useMemo } from 'react';
import formatNumber from 'number-format.js';
import { userModel } from '~/models/user';
import { voucherModel } from '~/models/voucher';
let idmailer = `body-mailer-${process.env.REACT_APP_WEBSITE_NAME}`;
function PaymentMail({ user, voucher, data, total = 0, totalPrice = 0 }) {
  let name = (user.FirstName || '') + ' ' + (user.LastName || '');
  let url = 'confirm';
  const [salePrice, outPrice] = useMemo(() => {
    const s = Math.round((totalPrice * (voucher?.Value || 0)) / 100);
    return [s, Math.round(totalPrice - s)];
  }, [totalPrice, voucher]);
  return (
    <div id={idmailer}>
      <div>
        <h5>Xin chào {name}</h5>
        <h6>Bạn có 1 đơn hàng đang chờ xác nhận</h6>
      </div>
      <hr style={{ border: '1px solid black', opacity: 0.8 }} />
      <div>
        <table style={{ width: '100%' }}>
          <tr>
            <td>Tên khách hàng:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>{userModel.Email.displayName}:</td>
            <td>{user.Email}</td>
          </tr>
          <tr>
            <td>{userModel.Phone.displayName}:</td>
            <td>{user.Phone}</td>
          </tr>
          <tr>
            <td>{userModel.Location.displayName}:</td>
            <td>{user.Location}</td>
          </tr>
        </table>
        <hr style={{ border: '1px solid black', opacity: 0.8 }} />
        <table style={{ width: '100%' }}>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
          </tr>
          {data.map(function (product, index) {
            return (
              <tr key={index}>
                <td>{product.Name}</td>
                <td>
                  {formatNumber(
                    '#,##0.# đ',
                    product.SalePrice || product.Price || 0,
                  )}
                </td>
                <td>{formatNumber('x #,##0.#', product.Quantity)}</td>
              </tr>
            );
          })}
        </table>
        <hr style={{ border: '1px solid black', opacity: 0.8 }} />
        <table style={{ width: '100%' }}>
          <tr>
            <td>{voucherModel.Code.displayName}</td>
            <td>{voucher?.Code ?? 'Không sử dụng'}</td>
          </tr>
          <tr>
            <td>{voucherModel.Value.displayName}</td>
            <td>{formatNumber('#,##0.# %', voucher?.Value || 0)}</td>
          </tr>
        </table>
        <hr style={{ border: '1px solid black', opacity: 0.8 }} />
        <table style={{ width: '100%' }}>
          <tr>
            <td>Tổng số lượng:</td>
            <td>{formatNumber('#,##0.#', total)}</td>
          </tr>
          <tr>
            <td>Tổng giá:</td>
            <td>{formatNumber('#,##0.# đ', totalPrice)}</td>
          </tr>
          <tr>
            <td>Giảm giá:</td>
            <td>{formatNumber('#,##0.# đ', salePrice)}</td>
          </tr>
          <tr>
            <td>Tổng thanh toán:</td>
            <td>{formatNumber('#,##0.# đ', outPrice)}</td>
          </tr>
        </table>
      </div>
      <hr style={{ border: '1px solid black', opacity: 0.8 }} />
      <div>
        <p>Vui lòng xác nhận:</p>
        <p>
          <a href={url}>{url}</a>
        </p>
      </div>
    </div>
  );
}
export default memo(PaymentMail);
