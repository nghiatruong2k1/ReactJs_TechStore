export const initState = {
  isOpen: false,
  isLoading: false,
  data: [],
  limit: 2,
};
export const initCase = {
  SET_DATA: '[set_data,?array]',
  ADD: '[add,obj]',
  REMOVE: '[remove,index]',
  CLEAR: '[clear]',
  RESET: '[reset]',
  CHANGE_ITEM: '[change_item,item]',
  TOGGLE_OPEN: '[toggle_open,?bool]',
  TOGGLE_LOADING: '[toggle_loading,?bool]',
};
export function initReducerState(toast) {
  return (prevState, [key, payload, callback]) => {
    console.log(prevState, [key, payload, callback]);
    switch (key) {
      case initCase.TOGGLE_LOADING: {
        if (payload !== prevState.isLoading) {
          return {
            ...prevState,
            isLoading:
              typeof payload === 'boolean' ? payload : !prevState.isLoading,
          };
        }
        break;
      }
      case initCase.TOGGLE_OPEN: {
        if (payload !== prevState.isOpen) {
          return {
            ...prevState,
            isOpen: typeof payload === 'boolean' ? payload : !prevState.isOpen,
          };
        }
        break;
      }
      case initCase.SET_DATA: {
        if (payload !== prevState.data) {
          return {
            ...prevState,
            data:
              (Array.isArray(payload) && payload) ||
              Array(prevState.limit).fill(null),
          };
        }
        break;
      }
      case initCase.CHANGE_ITEM: {
        return {
          ...prevState,
          data: prevState.data.map(function (item) {
            return {
              ...item,
            };
          }),
        };
      }
      case initCase.ADD: {
        if (typeof payload === 'object') {
          try {
            const carts = [...prevState.data];
            const { Id, Quantity } = payload;
            const oldIndex = carts.findIndex(function (data) {
              return data && data.Id == Id;
            });
            if (carts[oldIndex]) {
              carts[oldIndex].Quantity += Number(Quantity) ?? 0;
            } else {
              carts.push({
                Id,
                Quantity,
              });
            }
            setTimeout(() => {
              toast({ message: 'Thêm sản phẩm thành công' });
              callback && callback();
            }, 500);
            return {
              ...prevState,
              data: carts,
            };
          } catch (error) {
            console.log(error)
            toast({ message: 'Có lỗi khi thêm sản phẩm' });
          }
        }
        break;
      }
      case initCase.REMOVE: {
        const data = [...prevState.data];
        data.splice(payload, 1);
        return {
          ...prevState,
          data,
        };
      }
      case initCase.CLEAR: {
        const data = prevState.data.filter(function (item) {
          return item;
        });
        return {
          ...prevState,
          data,
        };
      }
      case initCase.RESET: {
        return {
          ...prevState,
          data: [],
        };
      }
      default: {
        console.log(`không tôn tại case`, key, initCase);
      }
    }
    return prevState;
  };
}
