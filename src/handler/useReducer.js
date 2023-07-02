import { createContext } from "react";

// Set up global contexts
export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

// dành để truyền 1 số dữ liệu tĩnh, chỉ cần truyền từ cha xuống con, không liên quan
// đến reducer
export const GlobalStaticContext = createContext();

const GlobalStateReducer = ({
  initialState,
  dispatch,
  staticValue,
  children,
}) => {
  return (
    <GlobalStateContext.Provider value={initialState}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <GlobalStaticContext.Provider value={staticValue}>
          {children}
        </GlobalStaticContext.Provider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateReducer;
