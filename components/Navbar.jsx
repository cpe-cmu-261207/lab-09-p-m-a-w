import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Navbar() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    </Tooltip>
  );
  return (<div id="navbar">
    <OverlayTrigger placement="bottom" overlay={<Tooltip>About me</Tooltip>}>
      <Link href="/">
        <a
          href=""
          style={{ margin: "4px" }}
        >
          <i className="fa-solid fa-circle-info"></i>
        </a>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger placement="bottom" overlay={<Tooltip>Experience</Tooltip>}>
      <Link href="/experience">
        <a
          href=""
          style={{ margin: '4px' }}
        >
          <i className="fa-solid fa-clock-rotate-left"></i>
        </a>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger placement="bottom" overlay={<Tooltip>Contact</Tooltip>}>
      <Link href="/contact">
        <a
          href=""
          style={{ margin: '4px' }}
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </Link>
    </OverlayTrigger>
    <OverlayTrigger placement="bottom" overlay={<Tooltip>Lab-07</Tooltip>}>
      <Link href="/lab-07">
        <a
          href=""
          style={{ margin: '4px' }}
        >
          Lab-07
        </a>
      </Link>
    </OverlayTrigger>
  </div>);
}
