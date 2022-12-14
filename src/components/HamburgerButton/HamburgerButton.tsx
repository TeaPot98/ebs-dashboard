import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";

import { Button } from "components";

export const HamburgerButton = (
  props: Omit<JSX.IntrinsicElements["button"], "type">
) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);

    return () => setDomReady(false);
  }, []);

  // Checking if DOM is loaded, then displaying the teleported element in DOM tree
  return domReady ? (
    ReactDOM.createPortal(
      <Button type="icon" className={classNames(props.className)} {...props}>
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/6015/6015685.png"
        />
      </Button>,
      document.querySelector("#hamburger-container")!
    )
  ) : (
    <span></span>
  );
};
