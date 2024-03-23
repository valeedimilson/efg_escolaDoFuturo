import { CgMenuRound } from "react-icons/cg";
import { RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";

function BtMobile() {
  const [open, setOpen] = useState(false);
  function toggle() {
    console.log(open);
    setOpen(!open);
  }

  if (open) {
    return <RiCloseCircleLine size="30" color="navy" onClick={toggle} />;
  }

  return <CgMenuRound size="30" color="navy" onClick={toggle} />;
}

export default BtMobile;
