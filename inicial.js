// =================================================
// Exibe o conteúdo dos dias com algum evento
// =================================================
const cells = document.querySelectorAll("td");
const textBox = document.querySelector(".text-box");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const day = cell.textContent;
    const texto = cell.dataset.texto;
    textBox.innerHTML = `<p>Eventos do dia ${day}. <br><br> ${texto}</p>`;
  });
});
// =================================================

// =================================================
// Função para rotacionar texto de notícias:
// =================================================

const div = document.querySelector(".news-rot");
const textoDiv = document.querySelector("#news-text");

const listaTextos = [
  '<strong>06/04</strong> UFABC volta a realizar Colação de Grau presencial. <a href="https://www.ufabc.edu.br/noticias/ufabc-volta-a-realizar-colacao-de-grau-presencial" target="_blank">saiba mais</a>',
  '<strong>29/03</strong> UFABC oferece curso de preparação para competições de matemática <small>...</small> <a href="https://www.ufabc.edu.br/noticias/ufabc-oferece-curso-de-preparacao-para-competicoes-de-matematica-para-estudantes-de-ensino-fundamental-e-medio" target="_blank">saiba mais</a>',
  '<strong>05/04</strong> UFABC e UNIFFAL-MG firmam convênio inédito de mobilidade acadêmica <small>...</small> <a href="https://www.ufabc.edu.br/noticias/ufabc-e-unifal-mg-firmam-convenio-inedito-de-mobilidade-academica-a-egressos-do-bacharelado-interdisciplinar-em-ciencia-e-tecnologia" target="_blank">saiba mais</a>',
  '<strong>28/03</strong> UFABC e prefeitura de Diadema reforçam parceria e ampliam atividades <small>...</small> <a href="https://www.ufabc.edu.br/noticias/ufabc-e-prefeitura-de-diadema-reforcam-parceria-e-ampliam-atividades-conjuntas" target="_blank">saiba mais</a>',
];

let indexTexto = 0;

function exibirProximoTexto() {
  textoDiv.innerHTML = listaTextos[indexTexto];
  indexTexto = (indexTexto + 1) % listaTextos.length;
}

exibirProximoTexto(); // exibe o primeiro texto imediatamente

setInterval(exibirProximoTexto, 5000); // atualiza o texto a cada 5 segundos
// =================================================
