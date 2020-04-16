import React from "react";
import '../styles/footer.css';
import { inject, observer } from 'mobx-react'

function Footer(props) {
  return (
    <div style={{ marginBottom: props.playerStore.playerState.playerActive && '90px' }} className="footer mt-5">
        <div className="footer-links">
            <a href="http://github.com/pbaveja"><i className="fab fa-github fa-xs"></i></a>
            <a href="https://www.instagram.com/prakharbaveja"><i className="fab fa-instagram fa-xs"></i></a>
            <a href="https://www.linkedin.com/in/prakhar-baveja-244907106/"><i className="fab fa-linkedin fa-xs"></i></a>
        </div>
        <div className="footer-copyright">
            Prakhar Baveja
        </div>
    </div>
  );
}
export default inject('playerStore')(observer(Footer));