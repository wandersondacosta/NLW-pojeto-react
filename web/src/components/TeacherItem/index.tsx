import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function teacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://scontent.fsdu30-1.fna.fbcdn.net/v/t1.0-1/p100x100/59932488_2488391357889506_1642617904576856064_o.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_eui2=AeGNy5cxl_SC_hMJJgMgafGWICCDNFSUz28gIIM0VJTPb1G4V3poTvj-XQ8W5EFBOoNVSX1WAfiDLlX3sOS0y0Iu&_nc_ohc=BOhwUdfY6nUAX96E4LA&_nc_ht=scontent.fsdu30-1.fna&_nc_tp=6&oh=a58e83025afa7cfeab1f99b33795be3f&oe=5F51FF12"
          alt="wanderson da costa corrêa"
        />
        <div>
          <strong>Wanderson da costa corrêa</strong>
          <span>Química</span>
        </div>
      </header>
      <p>texto aki</p>

      <footer>
        <p>
          preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default teacherItem;