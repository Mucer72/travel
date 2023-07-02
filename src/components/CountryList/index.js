import { memo, useContext } from "react";
import { getOriginURL } from "../../handler/common";
import { countryList } from "../../handler/language";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../handler/useReducer";
import "./index.css";

const CountryList = (props) => {
  const { currentCountry } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const clickHandle = (country) => {
    dispatch({
      type: "countryUpdate",
      country: country,
    });
  };
  return (
    <div class="language-container">
      <div class="icon-contain">
        <img
          src={`${getOriginURL}/images/${countryList[currentCountry]}.png`}
          width="30px"
          alt="viet-icon1"
        />
      </div>
      <div class="icon-list">
        {Object.entries(countryList).map(
          ([key, _]) =>
            key !== currentCountry && (
              <div class="icon-child-list" onClick={() => clickHandle(key)}>
                <img
                  src={`${getOriginURL}/images/${countryList[key]}.png`}
                  width="30px"
                  alt="viet-icon"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default memo(CountryList);
