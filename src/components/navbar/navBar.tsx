import "./styles.css";

import Links from "./links";
import logo from "./imgs/logo.svg";

import {
  IoCloseCircleOutline,
  IoEllipsisVerticalCircleOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const menuMobile = document.querySelector("#menuMobile");
  const menuMobileBg = document.querySelector("#menuMobileBg");
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  function toggleMenu(status?: boolean) {
    console.log("foi clicado");
    if (status == false) {
      setMenuMobileAberto(false);
    } else {
      setMenuMobileAberto(!menuMobileAberto);
    }
  }

  useEffect(() => {
    menuMobileBg?.classList.toggle("menuMobileShow");
    menuMobile?.classList.toggle("menuMobileShow");
  }, [menuMobileAberto]);

  function BotaoMenuMobile() {
    if (menuMobileAberto == false) {
      return (
        <IoEllipsisVerticalCircleOutline
          size="30"
          className="menuMobileBt"
          onClick={function () {
            toggleMenu();
          }}
        />
      );
    } else {
      return (
        <IoCloseCircleOutline
          size="30"
          className="menuMobileBt"
          onClick={function () {
            toggleMenu();
          }}
        />
      );
    }
  }

  return (
    <header>
      <Link
        to="/"
        onClick={function () {
          toggleMenu(false);
        }}
      >
        <img
          src={logo}
          alt="SIREAG - Sistema de Reserva de Ambientes na Escola do Futuro de Goiás"
        />
      </Link>

      <div className="menuDesktop">
        <Links />
      </div>
      <div
        className="menuMobileBg "
        id="menuMobileBg"
        onClick={function () {
          toggleMenu();
        }}
      ></div>
      <div className="menuMobile " id="menuMobile">
        <div>
          <Links
            onClick={function () {
              toggleMenu();
            }}
          />
        </div>
      </div>
      <div className="menuMobileBtdiv">
        <BotaoMenuMobile />
      </div>
    </header>
  );
}

export default NavBar;
// function NavBar() {
//   const menuMobile = document.querySelector("#menuMobile");
//   const menuMobileBg = document.querySelector("#menuMobileBg");
//   const [menuMobileAberto, setMenuMobileAberto] = useState(false);

// function Botao() {
//   if (menuMobileAberto == false) {
//     return (
//       <IoEllipsisVerticalCircleOutline
//         size="30"
//         className="menuMobileBt"
//         onClick={function () {
//           abreFechaMenu();
//         }}
//       />
//     );
//   } else {
//     return (
//       <IoCloseCircleOutline
//         size="30"
//         className="menuMobileBt"
//         onClick={function () {
//           abreFechaMenu();
//         }}
//       />
//     );
//   }
// }

//   function abreFechaMenu(estado?: boolean) {
//     if (estado == false) {
//       setMenuMobileAberto(false);
//     } else {
//       setMenuMobileAberto(!menuMobileAberto);
//     }
//   }

//   useEffect(() => {
//     if (menuMobileAberto) {
//       menuMobile?.classList.add("menuMobileShow");
//       menuMobileBg?.classList.add("menuMobileBgShow");

//       menuMobile?.classList.remove("menuMobileHidden");
//       menuMobileBg?.classList.remove("menuMobileBgHidden");
//     } else {
//       menuMobile?.classList.remove("menuMobileShow");
//       menuMobileBg?.classList.remove("menuMobileBgShow");

//       menuMobile?.classList.add("menuMobileHidden");
//       menuMobileBg?.classList.add("menuMobileBgHidden");
//     }
//   }, [menuMobileAberto]);
//   return (
//     <header>
//       <Link
//         to="/"
//         onClick={function () {
//           abreFechaMenu(false);
//         }}
//       >
//         <img
//           src={logo}
//           alt="SIREAG - Sistema de Reserva de Ambientes na Escola do Futuro de Goiás"
//         />
//       </Link>
// <div className="menuDesktop">
//   <Links />
// </div>
// <div
//   className="menuMobileBg"
//   id="menuMobileBg"
//   onClick={function () {
//     abreFechaMenu(false);
//   }}
// ></div>
// <div className="menuMobile" id="menuMobile">
//   <div>
//     <Links
//       onClick={function () {
//         abreFechaMenu(false);
//       }}
//     />
//   </div>
//       </div>
// <div className="menuMobileBtdiv">
//   <Botao />
// </div>
//     </header>
//   );
// }
// export default NavBar;
