import logoHeader from '../wireframes/logo-azul.svg'

export default function Header() {
  return (
    <header>
    <div class="container">
      <div class="logo-navega">
        <a href="index"><img src={ logoHeader } alt="Logo Navega" /></a>
      </div>
      <nav>
        <ul class="nav-links">
          <li><a href="index">INÍCIO</a></li>
          <li><a href="sistema">CONHEÇA O SISTEMA</a></li>
          <li><a href="institucional">INSTITUCIONAL</a></li>
          <li><a href="sobre-nos">SOBRE NÓS</a></li>
          <li><a href="https://api.whatsapp.com/send/?phone=5538991529547&text&type=phone_number&app_absent=0"
              class="btn-contato">CONTATO<i class="bi bi-whatsapp"></i></a></li>
        </ul>
        <button class="button-mobile" onclick="openMenu()">
          <img src="assets/img/menu.png" alt="botão menu mobile" />
        </button>

      </nav>
    </div>
  </header>
  );
}
