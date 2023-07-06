import LogoRodape from '../wireframes/logo-rodape.png'
import linkedinImg from '../wireframes/linkedin.svg'
import instagramImg from '../wireframes/instagram.svg'
import whatsappImg from '../wireframes/whatsapp.svg'

export default function Footer() {
  return (
    <footer>
    <div class="container">
      <div class="image-footer">
        <a href="index"><img src={ LogoRodape } alt="Logo branco Navega" /></a>
      </div>
      <div class="contato-footer">
        <h5>Central de atendimento<br />ao cliente:</h5>
        <div class="number-footer">
          <a href="tel:6135505899" target="_blank"><i class="bi bi-telephone"></i> (61) 3550-5899</a> | <a
            href="https://api.whatsapp.com/send/?phone=5538991529547&text&type=phone_number&app_absent=0"
            target="_blank">(38) 99152-9547 <i class="bi bi-whatsapp"></i></a><br />
          <a href="mailto:navega@navegaconsultoria.com.br">navega@navegaconsultoria.com.br</a>
        </div>
      </div>
      <div class="endereco-footer">
        <div class="endereco">
          <div class="maps">
            <i class="bi bi-pin-map-fill"></i>
          </div>
          <div class="rua">
            <a href="https://goo.gl/maps/NLhUu2NgvSKyewd79" target="_blank">Rua Coronel Severiano<br />nº 40 –
              Araguaia<br />Belo Horizonte-MG</a>
          </div>
        </div>
        <div class="redes-sociais">
          <ul>
            <li><a href="https://www.linkedin.com/company/navega-sistemas/" target="_blank"><img
                  src={ linkedinImg } alt="linkedin" /></a></li>
            <li><a href="https://www.instagram.com/navegasistemas/" target="_blank"><img src={ instagramImg }
                  alt="instagram" /></a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5538991529547&text&type=phone_number&app_absent=0"
                target="_blank"><img src={ whatsappImg } alt="whatsapp" /></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="termos-uso">
      <div class="container">
        <div class="lista-uso">
          <ul>
            <li><a href="institucional" target="_blank">Política de Privacidade</a></li>
            <li><a href="politica-cookies" target="_blank">Política de Cookies</a></li>
            <li><a href="institucional" target="_blank">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}
