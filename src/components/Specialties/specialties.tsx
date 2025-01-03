import './specialties.module.scss'

function App() {

  return (
    <>
      <!DOCTYPE html>
<html lang="pt-br">

{/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMlife - Home</title>
    <link rel="stylesheet" href="css/style_especi.css">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap">
</head> */}

<body>
    <header>
        <div id="topo" class="menu">
            <a href="index.html">
                <img src="assets/logo.png" alt="Clínica Médica" title="Clínica Médica Life">
            </a>
            <nav class="nav-1">
                <a href="index.html#sobre">Sobre</a>
                <a href="especialidades.html">Especialidades</a>
                <a href="index.html#contato">Contato</a>
            </nav>
        </div>
    </header>

    <main>
        <section class="container">
            <nav class="menu-secundario">
                <a class="link-especi" href="#ortopedia">Ortopedia</a>
                <a class="link-especi" href="#pediatria">Pediatria</a>
                <a class="link-especi" href="#geriatria">Geriatria</a>
                <a class="link-especi" href="#psicologia">Psicologia</a>
                <a class="link-especi" href="#fisioterapia">Fisioterapia</a>
            </nav>
        </section>

        <section class="sub-titulo">
            <h2>Conheça as nossas especialidades</h2>
        </section>

        <section id="ortopedia" class="container">
            <div>
                <div class="conteudo">
                    <h3>Ortopedia</h3>
                    <p>
                        A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho
                        locomotor, como ossos, músculos, ligamentos e articulações.
                    </p>
                </div>

                <div class="container-tabela">
                    <img src="assets/ortopedia.png" alt="ortopedia">
                    <table class="tabela">
                        <thead>
                            <tr>
                                <th>Dias</th>
                                <th>Horários</th>
                                <th>Médico(a)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Segunda e quartas</td>
                                <td>8:00 às 13:00</td>
                                <td>Dra. Daniele Almeida</td>
                            </tr>
                            <tr>
                                <td>Terça, Quinta e Sexta</td>
                                <td>14:00 às 21:00</td>
                                <td>Dr. Daniel Souza</td>
                            </tr>
                            <tr>
                                <td>Sábado</td>
                                <td>8:00 às 21:00</td>
                                <td>Dr. Manoel Bento </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>







        <section id="pediatria" class="container">
            <div>
                <div class="conteudo">
                    <h3>Pediatria</h3>
                    <p>
                        A pediatra é a especialidade médica dedicada à assistencia à criança e ao adolescente, nos seus
                        diversos aspectos, sejam eles preventivos ou curativos.
                    </p>
                </div>
                <div class="container-tabela">
                    <img src="assets/pediatra2.png" alt="pediatra">
                    <table class="tabela">
                        <thead>
                            <tr>
                                <th>Dias</th>
                                <th>Horários</th>
                                <th>Médico(a)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Segunda e quartas</td>
                                <td>8:00 às 15:00</td>
                                <td>Dra. Elaine Pinheiro</td>
                            </tr>
                            <tr>
                                <td>Terça, Quinta e Sexta</td>
                                <td>14:00 às 21:00</td>
                                <td>Dr. Daniel Souza</td>
                            </tr>
                            <tr>
                                <td>Sábado</td>
                                <td>8:00 às 21:00</td>
                                <td>Dr. Manoel Bento</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>








        <section id="geriatria" class="container">
            <div>
                <div class="conteudo">
                    <h3>Geriatria</h3>
                    <p>
                        Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o
                        tratamento
                        de doenças e da incapacidade em idades avançadas.
                    </p>
                </div>
                <div class="container-tabela">
                    <img src="assets/geriatra.png" alt="geriatra">
                    <table class="tabela">
                        <thead>
                            <tr>
                                <th>Dias</th>
                                <th>Horários</th>
                                <th>Médico(a)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Segunda e quinta</td>
                                <td>9:00 às 12:00</td> 
                                <td>Dr. Antônio Freitas</td>
                            </tr>
                            <tr>
                                <td>Terça e Quarta</td>
                                <td>9:00 às 16:00</td>
                                <td>Dr. Alfred Conceição</td>
                            </tr>
                            <tr>
                                <td>Sexta</td>
                                <td>8:00 às 19:00</td>
                                <td>Dr. Almir Aguiar</td>
                            </tr>
                            <tr>
                                <td>Sábado</td>
                                <td>8:00 às 14:00</td>
                                <td>Dra. Andrea Almeida</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>









        <section id="psicologia" class="container">
            <div>
                <div class="conteudo">
                    <h3>Psicologia</h3>
                    <p>
                        Psicologia è a especialidade médica que trata de mente, do estudo e análise de seus processos e
                        comportamento de indivíduo e grupos humanos em diferentes situações.
                    </p>
                </div>
                <div class="container-tabela">
                    <table class="tabela">
                        <img src="assets/psicologo.png" alt="psicologia">
                        <thead>
                            <tr>
                                <th>Dias</th>
                                <th>Horários</th>
                                <th>Médico(a)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Segunda, terça e quartas</td>
                                <td>8:00 às 21:00</td>
                                <td>Dra. Diane Faguntes</td>
                            </tr>
                            <tr>
                                <td>Quinta e Sexta</td>
                                <td>14:00 às 18:00</td>
                                <td>Dr. Daniel Dias</td>
                            </tr>
                            <tr>
                                <td>Sábado</td>
                                <td>10:00 às 15:00</td>
                                <td>Dra. Beatriz Luz</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>








        <section id="fisioterapia" class="container">
            <div>
                <div class="conteudo">
                    <h3>Fisioterapia</h3>
                    <p>
                        Fisioterapia è uma ciência da saúde aplicada ao estudo, diagnóstico, prevenção e tratamento de
                        disfunções cinéticas funcionais de órgãos e sistemas.
                    </p>
                </div>
                <div class="container-tabela">
                    <img src="assets/fisioterapia.png" alt="fisioterapia">
                    <table class="tabela">
                        <thead>
                            <tr>
                                <th>Dias</th>
                                <th>Horários</th>
                                <th>Médico(a)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Segunda e quinta</td>
                                <td>11:00 às 20:00</td>
                                <td>Dr. Alberto de Paula</td>
                            </tr>
                            <tr>
                                <td>Segunda e Quartas</td>
                                <td>8:00 às 15:00</td>
                                <td>Dra. Maria Fernandes</td>
                            </tr>
                            <tr>
                                <td>Terça e sexta</td>
                                <td>14:00 às 21:00</td>
                                <td>Dra. Elaine Peixoto</td>
                            </tr>
                            <tr>
                                <td>Terça e Quinta</td>
                                <td>8:00 às 14:00</td>
                                <td>Dra. Elaine Peixoto</td>
                            </tr>
                            <tr>
                                <td>Quarta e Sábado</td>
                                <td>8:00 às 21:00</td>
                                <td>Dra. Bianca Rocha</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </main>













    <footer class="container-rodape">
        <div>
            <div>
                <a href="especialidades.html#topo">
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
</body>

</html>
    </>
  )
}

export default App
