import './homePage.module.scss'

function App() {

  return (
    <>

{/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMlife - Home</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap">
</head> */
    <header>
        <div id="topo" class="menu">
            <a href="index.html" class="home-button">
                <img src="assets/logo.png" alt="Clínica Médica" title="Clínica Médica Life">
            </a>
            <nav>
                <a href="#sobre">Sobre</a>
                <a href="especialidades.html">Especialidades</a>
                <a href="#contato">Contato</a>
            </nav>
        </div>
    </header>
    <main>
        <section id="banner" class="banner container">
            <div class="titulo">
                <h1>Clínica médica life <span class="linha2">aqui a gente cuida de você</span></h1>
            </div>
        </section>

        <section id="sobre" class="container">
            <div>
                <div class="sobre">
                    <h2>Sobre a clínica</h2>
                    <p>Nossa clínica está pronta para receber nossos pacientes através de uma excelente
                        <span>estrutura,comodidade
                            e com a segurança de que você precisa.</span>
                    </p>
                </div>
                <div class="lista">
                    <img src="assets/medico.jpg" alt="medico apresentando">
                    <div>
                        <p>AQUI NA NOSSA CLÍNICA VOCÊ VAI ENCONTRAR:</p>
                        <ul>
                            <li>Horário flexível. Atendemos de segunda à sábado.</li>
                            <li>Estacionamento amplocom 600 vagas.</li>
                            <li>Sala de espera com TV e Wifi.</li>
                            <li>Agendamento pelo telefone ou WhatsApp.</li>
                            <li>Excelente localização</li>
                            <li>Entrega de exames em sua residência</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <div>
                <div class="sobre">
                    <h2>Uma clínica de multiespecialidade</h2>
                    <p>Nossa clínica possui diversas especialidades. Como ortopedia, pediatria, geriatria,<span class="descer">
                            psicologia,
                            fisioterapia e outros.</span></p>
                </div>

                <div class="galeria">
                    <div class="card">
                        <img class="img" src="assets/ortopedia1.png" alt="">
                        <p>Ortopedia</p>
                    </div>
                    <div class="card">
                        <img class="img" src="assets/pediatra.png" alt="">
                        <p>Pediatria</p>
                    </div>
                    <div class="card">
                        <img class="img" src="assets/geriatra.png" alt="">
                        <p>Geriatria</p>
                    </div>
                </div>
                <div class="container-button container">
                    <a class="button" href="especialidades.html">Ver horários</a>
                </div>
            </div>
        </section>

        <section id="contato" class="container estilo">
                <div class="contato">
                    <h2>Contato</h2>
                    <p>Nossa clínica médica está aberto de <span>segunda à sábado das 6:00 às 21:00</span></p>
                    <p>Através do telefone/WhatsApp <span>(21) 99966-5555</span> você pode fazer o agendamento de
                        consultas e exames.
                    </p>
                    <p>Estamos localizados no estacionamento do Via Parque Shopping <span>Av. Ayrton Senna, 3000- Barra
                            da
                            Tijuca, Rio de Janeiro.</span></p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5194.572579424619!2d-43.36035153662261!3d-22.982706467456108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-003!5e0!3m2!1sen!2sbr!4v1694713008159!5m2!1sen!2sbr"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
        </section>

    </main>

    <footer class="container">
        <div>
            <div>
                <a href="index.html#topo">
                    <img src="assets/logo.png" alt="Clínica Médica" title="Clínica Médica Life">
                </a>
            </div>
            <div>
                <a href="">Telefone e WhatsApp: (21) 99966-5555</a>
                <a href="">Endereço: Av. Ayrton Senna, 3000- Barra da Tijuca, Rio de Janeiro.</a>
                <a href="">&copy;2020 Clínica Médica Life - Todos os direitos reservados</a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
