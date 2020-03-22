import React from "react";
import '../styles/footer.css';

function Footer(props) {
  return (
    <div class="footer mt-5">
        <div class="footer-links">
            <a href="http://github.com/pbaveja"><i class="fab fa-github fa-xs"></i></a>
            <a href="https://www.instagram.com/prakharbaveja"><i class="fab fa-instagram fa-xs"></i></a>
            <a href="https://www.linkedin.com/in/prakhar-baveja-244907106/"><i class="fab fa-linkedin fa-xs"></i></a>
        </div>
        <div class="footer-copyright">
            <i class="far fa-copyright fa-xs"></i> Prakhar Baveja
        </div>
    </div>
  );
}
export default Footer