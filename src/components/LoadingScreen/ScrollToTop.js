import { useEffect } from "react";

const ScrollToTop = (Component) => {
  return function ScrollToTopWrapper(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <Component {...props} />;
  };
};

export default ScrollToTop;