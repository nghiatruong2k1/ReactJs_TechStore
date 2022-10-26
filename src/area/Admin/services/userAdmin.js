import { useCallback } from 'react';
import { Delete, Post, Put } from '~/utils/HttpRequest';
import useServices from '~/services/DefaultServices';
import useDialogResult from '~/hooks/DialogResult';
const API = 'api/admin/user';
export default function UserAdminServices(location) {
  const services = useServices(location);
  const dialogResult = useDialogResult();
  const getStatistic = useCallback((onThen, onEnd) => {
    return services({
      api: `${API}/statistic`,
      onThen,
      onCatch: () => {
        onThen && onThen([]);
      },
      onEnd,
      location,
    });
  }, []);
  const getCount = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}/count`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },
      onEnd,
      location,
    });
  }, []);
  const getAll = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen(0);
      },
      onEnd,
      location,
    });
  }, []);
  const getsType = useCallback((onThen, onEnd) => {
    // return services({
    //   api: `${API}status`,
    //   onThen,
    //   onCatch: () => {
    //     onThen && onThen([]);
    //   },
    //   onEnd,
    //   location,
    // });
    onThen &&
      onThen([
        {
          Id: 1,
          Name: 'Khách hàng',
        },
        {
          Id: 4,
          Name: 'Người quản trị',
        },
      ]);
    onEnd && onEnd();
  }, []);
  const putData = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen({});
      },
      onEnd,
      method: Put,
      location,
    });
  }, []);
  const postData = useCallback((params, onThen, onEnd) => {
    return services({
      api: `${API}`,
      params,
      onThen,
      onCatch: () => {
        onThen && onThen({});
      },
      onEnd,
      method: Post,
      location,
    });
  }, []);
  const deleteData = useCallback((id, onThen, onEnd) => {
    let ourService;
    try {
      dialogResult({
        type: 'warning',
        title: 'Thông báo',
        message: 'Bạn có muốn xóa tài khoản này?',
        onSuccess: () => {
          ourService = services({
            api: `${API}/${id}`,
            onThen,
            onCatch: () => {
              onThen && onThen({});
            },
            onEnd,
            method: Delete,
            location,
          });
        },onCancel:onEnd
      });
    } catch (error) {
      console.log(error);
      ourService = ()=>{}
    }
    return ourService
  }, []);
  const getById = useCallback((id, onThen, onEnd) => {
    return services({
      api: `${API}/${id}`,
      onThen,
      onCatch: () => {
        onThen && onThen(null);
      },
      onEnd,
      location,
    });
  }, []);
  return {
    getStatistic,
    getCount,
    getAll,
    putData,
    postData,
    deleteData,
    getById,
    getsType
  };
}
