import React from "react";
import '../styles/footer.css';

function Footer(props) {
  return (
    <div className="footer mt-5">
        <div className="footer-links">
            <a href="http://github.com/pbaveja"><i className="fab fa-github fa-xs"></i></a>
            <a href="https://www.instagram.com/prakharbaveja"><i className="fab fa-instagram fa-xs"></i></a>
            <a href="https://www.linkedin.com/in/prakhar-baveja-244907106/"><i className="fab fa-linkedin fa-xs"></i></a>
        </div>
        <div className="footer-copyright">
            <i className="far fa-copyright fa-xs"></i> Prakhar Baveja
        </div>
    </div>
  );
}
export default Footer