import React, { useState } from "react";
import Menu from "./Menu";

export default function Todo({ title, completed, on }) {
  // const element = useRef();
  const [menuHide, setMenuHide] = useState(true);
  // useEffect(() => {
  // }, [element])
  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={() => setMenuHide(false)}
      onMouseOut={() => setMenuHide(true)}
    >
      <span className="me-auto" style={{ textDecoration: completed ? 'line-through' : '' }}>{title}</span>
      <Menu on={on} hide={menuHide}></Menu>
    </div >
  );
}
