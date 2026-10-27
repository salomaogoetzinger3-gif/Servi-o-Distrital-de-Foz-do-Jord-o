// Fichas de atendimento abertas pela seção "Encontre o serviço que você precisa".
//
// Cada seção tem "itens", e cada item pode ser:
//   linha de campos ........ ['Rótulo', ['Rótulo', largura], { r, w, linhas }, g(...)]
//   grupo de opções ........ g('Pergunta', 'Opção', 'Outra: ___')  (___ vira um campo)
//   duas colunas ........... { cols: [['Título', itens], ['Título', itens]] }
//   subtítulo .............. { sub: 'Texto' }
//   linhas de assinatura ... { assinar: ['Rótulo', ...] }
//   regimes de bens ........ { regimes: [['Nome', 'Lei', 'Explicação']] }
//   aviso .................. { aviso: ['Título', [['Texto', 'Lei']]] }
//   tabela ................. { tabela: ['Título', [['Coluna', largura]], linhas] }
//   herdeiros .............. { herdeiros: itens }  (um bloco e botão para adicionar)
//
// Nos cartões de "O que a lei exige", cada item é 'Texto' ou ['Texto', 'Lei'].
// Leis conferidas em 27/10/2026 no acervo github.com/ctresb/leis (texto compilado)
// e, para os atos do CNJ, no texto oficial do Provimento 149/2023.

const g = (rotulo, ...opcoes) => ({ g: [rotulo, opcoes] })

export const conferido = '27/10/2026'

export const comoUsar =
  'Imprima, preencha com letra de forma e leve ao cartório com os documentos originais. Se preferir, preencha uma versão digital e envie os dados por e-mail.'

const pessoa = [
  ['Nome completo'],
  ['CPF', 'RG / órgão emissor', 'Data de nascimento'],
  ['Nacionalidade', 'Estado civil', 'Profissão'],
  ['Endereço completo (rua, nº, bairro, cidade/UF)'],
  ['Telefone / WhatsApp', ['E-mail', 1.4]],
]

const requerente = 'Assinatura do(a) requerente (igual à do documento de identidade)'

const nascimento = {
  area: 'Registro civil · Declaração de nascimento',
  titulo: 'Registro de nascimento',
  texto: 'Gratuito, com a 1ª certidão. Preencha com os dados que constam da Declaração de Nascido Vivo (DNV) e dos documentos dos pais.',
  secoes: [
    { t: 'Dados do(a) registrando(a)', itens: [
      ['Nome completo escolhido para a criança'],
      [['Data do nascimento', 1.4], 'Hora', 'Sexo', ['Nº da Declaração de Nascido Vivo (DNV)', 2.4]],
      ['Local do parto (hospital, casa...)', 'Município do nascimento'],
      [g('Gêmeos?', 'Não', 'Sim, ordem de nascimento: ___'), g('Naturalidade que vai constar', 'Município do nascimento', 'Município de residência da mãe')],
    ] },
    { t: 'Dados da mãe', itens: [
      ['Nome completo'],
      ['CPF', 'RG / órgão emissor', 'Data de nascimento'],
      ['Nacionalidade', 'Profissão'],
      ['Naturalidade', 'Idade na data do parto', 'Telefone / WhatsApp'],
      ['Endereço de residência'],
    ] },
    { t: 'Dados do pai', nota: 'Preencha se o pai for constar no registro', itens: [
      ['Nome completo'],
      ['CPF', 'RG / órgão emissor', 'Naturalidade'],
      ['Profissão', 'Telefone / WhatsApp', 'Idade'],
      ['Endereço de residência'],
    ] },
    { t: 'Família', itens: [
      [g('Estado civil dos pais', 'Casados', 'União estável', 'Solteiros')],
      ['Lugar e cartório onde se casaram (se casados)'],
      ['Nomes dos avós maternos', 'Nomes dos avós paternos'],
    ] },
    { t: 'Declarante', itens: [
      [g('Quem está declarando o nascimento', 'Mãe', 'Pai', 'Outra pessoa (parentesco): ___')],
    ] },
  ],
  assinaturas: ['Local e data', requerente],
  lei: {
    intro: 'Registro de nascimento: quem declara, em que prazo, o que levar e como fica o nome.',
    cards: [
      { t: 'Quem declara e em quanto tempo', i: [
        ['O pai ou a mãe, sozinho ou em conjunto, deve declarar o nascimento. Se um deles não puder, o outro tem o prazo prorrogado por 45 dias.', 'LRP, art. 52, itens 1º e 2º'],
        ['Se nenhum dos dois puder, a lei chama, nesta ordem, o parente mais próximo, o administrador do hospital ou o médico, e quem tiver a guarda da criança.', 'LRP, art. 52'],
        ['O prazo é de 15 dias. Se a residência dos pais fica a mais de 30 km do cartório, o prazo sobe para até 3 meses.', 'LRP, art. 50'],
        ['Passado o prazo, o registro ainda pode ser feito (registro tardio), no cartório da residência, com requerimento assinado por duas testemunhas.', 'LRP, art. 46'],
      ] },
      { t: 'Quanto custa', i: [
        ['Nada. O registro de nascimento e a primeira certidão não têm emolumentos (a taxa do cartório).', 'LRP, art. 30'],
        ['As demais certidões seguem a tabela de custas; quem comprova pobreza, por declaração, também não paga.', 'LRP, art. 30, §§ 1º e 2º'],
        ['Se o cartório cobrar por esses atos, o oficial sofre as penalidades da Lei dos Cartórios.', 'LRP, art. 30, § 3º-A'],
      ] },
      { t: 'O que levar e por quê', i: [
        ['Declaração de Nascido Vivo (DNV): o número dela é dado obrigatório do registro.', 'LRP, art. 54, item 10'],
        ['Documentos dos pais: a lei pede nome, naturalidade, profissão, idade e residência dos pais, e os nomes dos avós.', 'LRP, art. 54, itens 7 e 8'],
        ['Parto sem assistência de profissional de saúde: são necessárias duas testemunhas.', 'LRP, art. 54, item 9'],
        ['A naturalidade pode ser o município do nascimento ou o da residência da mãe; quem declara escolhe.', 'LRP, art. 54, § 4º'],
      ] },
      { t: 'Pais casados e não casados', i: [
        ['Casados: o pai ou a mãe pode comparecer sozinho, levando a certidão de casamento.', 'LRP, art. 52, item 1º'],
        ['Não casados: o nome do pai só entra no registro se ele autorizar, comparecer (ele mesmo ou procurador com poderes especiais) e assinar o assento.', 'LRP, art. 59'],
        ['O nome do pai que aparece na DNV não prova a paternidade.', 'LRP, art. 54, § 2º'],
      ] },
      { t: 'Escolha do nome', largo: true, i: [
        ['O prenome recebe os sobrenomes dos pais ou de ascendentes, em qualquer ordem.', 'LRP, art. 55'],
        ['O cartório não registra prenome que exponha a pessoa ao ridículo; se os pais discordarem, o caso vai ao juiz.', 'LRP, art. 55, § 1º'],
        ['Em até 15 dias depois do registro, qualquer dos pais pode apresentar oposição fundamentada ao nome escolhido.', 'LRP, art. 55, § 4º'],
      ] },
    ],
    base: 'Lei nº 6.015/1973 (Lei de Registros Públicos), arts. 30, 46, 50, 52, 54, 55 e 59 · Lei nº 14.382/2022 (nova redação do art. 55).',
  },
}

const paiMae = [
  ['Nome completo'],
  ['Naturalidade', 'Profissão'],
  ['Estado civil'],
  ['Endereço atual'],
]

const testemunha = [
  ['Nome completo'],
  ['Profissão', 'Estado civil'],
  ['Endereço completo'],
  ['Telefone / E-mail'],
]

const casamento = {
  area: 'Registro civil · Cadastro dos noivos',
  titulo: 'Habilitação e casamento civil',
  texto: 'Documentos, proclamas e celebração. Cada noivo preenche a sua coluna; o cadastro é o mesmo usado no balcão do cartório.',
  secoes: [
    { t: 'Dados dos noivos', itens: [
      { cols: [['Noivo', testemunha], ['Noiva', testemunha]] },
    ] },
    { t: 'Pais dos noivos', itens: [
      { cols: [
        ['Pais do noivo', [{ sub: 'Pai' }, ...paiMae, { sub: 'Mãe' }, ...paiMae]],
        ['Pais da noiva', [{ sub: 'Pai' }, ...paiMae, { sub: 'Mãe' }, ...paiMae]],
      ] },
    ] },
    { t: 'Testemunhas', nota: 'Duas pessoas maiores de 18 anos', itens: [
      { cols: [['1ª testemunha', testemunha], ['2ª testemunha', testemunha]] },
    ] },
    { t: 'Mudança de nome (preencher somente se houver)', itens: [
      ['Novo nome do noivo', 'Novo nome da noiva'],
    ] },
    { t: 'Local e data prevista', itens: [
      [g('Casamento', 'No cartório', 'Fora do cartório'), g('Algum noivo tem 16 ou 17 anos?', 'Não', 'Sim: anexar autorização dos pais')],
      [['Endereço (se for fora do cartório)', 3], 'Data prevista'],
    ] },
    { t: 'Regime de bens (marque uma opção)', itens: [
      { regimes: [
        ['Comunhão parcial de bens', 'CC, art. 1.658', 'Os bens adquiridos após a data do casamento são comuns ao casal. Os bens adquiridos antes do casamento continuam de propriedade individual.'],
        ['Comunhão universal de bens', 'CC, art. 1.667', 'Todos os bens adquiridos antes do casamento e durante a sua vigência são de propriedade de ambos.'],
        ['Separação total de bens', 'CC, art. 1.687', 'Não há bens comuns ao casal. Todos os bens são sempre de propriedade individual, tanto os adquiridos antes quanto os adquiridos durante o casamento.'],
        ['Participação final nos aquestos', 'CC, art. 1.672', 'Os bens adquiridos antes e durante o casamento são de responsabilidade de quem os obteve, mas, em caso de divórcio, serão divididos apenas os bens adquiridos durante a relação.'],
      ] },
      { aviso: ['Atenção', [
        ['Regime diferente do padrão (comunhão parcial de bens) precisa de escritura de pacto antenupcial.', 'CC, arts. 1.640, parágrafo único, e 1.653'],
      ]] },
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura do noivo', 'Assinatura da noiva'],
  lei: {
    intro: 'Quem pode casar, o que levar, como funciona a habilitação e o regime de bens.',
    cards: [
      { t: 'Quem pode casar', i: [
        ['A partir de 16 anos, com autorização de ambos os pais ou dos representantes legais, até completar 18.', 'CC, art. 1.517'],
        ['Abaixo de 16 anos não pode, em nenhum caso.', 'CC, art. 1.520'],
        ['Não podem casar, entre outros, pessoas já casadas, irmãos e parentes até o 3º grau, pais com filhos.', 'CC, art. 1.521'],
      ] },
      { t: 'Documentos da habilitação (a lei)', i: [
        'Certidão de nascimento ou documento equivalente.',
        'Autorização por escrito dos pais, se for menor de 18 anos.',
        'Declaração de duas testemunhas maiores que os conheçam e afirmem que não há impedimento.',
        'Declaração do estado civil, domicílio e residência dos noivos e de seus pais, se conhecidos.',
        ['Se viúvo ou divorciado: certidão de óbito do cônjuge ou registro da sentença ou escritura de divórcio.', 'CC, art. 1.525'],
      ] },
      { t: 'O que levar ao cartório', i: [
        'Certidão de nascimento ou de casamento (com averbação de divórcio, se divorciado), de no máximo 30 dias.',
        'Se divorciado: escritura ou sentença de divórcio e certidão de casamento com averbação do divórcio. Se viúvo: certidão de óbito.',
        'Documentos pessoais (RG e CPF) e comprovante de residência.',
        'Duas testemunhas maiores de 18 anos, com RG e CPF.',
        'O valor da habilitação é pago no dia do processo.',
        'Dúvidas: WhatsApp (42) 99806-7505, por mensagem ou áudio.',
      ] },
      { t: 'Como funciona', i: [
        ['Estando tudo em ordem, o cartório dá publicidade à habilitação em meio eletrônico e emite o certificado em até 5 dias. Os noivos podem se casar em qualquer cartório de registro civil.', 'LRP, art. 67, § 1º'],
        ['Os documentos também podem ser apresentados eletronicamente.', 'LRP, art. 67, § 4º-A'],
        ['A data do casamento pode ser marcada até 90 dias depois da habilitação, que é o prazo de validade do certificado.', 'CC, art. 1.532'],
        ['Se alguém apontar impedimento, o caso segue para o juiz.', 'LRP, art. 67, § 5º'],
      ] },
      { t: 'Celebração', i: [
        ['No cartório, de portas abertas, com pelo menos duas testemunhas. Em prédio particular ou se um noivo não souber ou não puder escrever, são quatro testemunhas.', 'CC, art. 1.534'],
        ['A celebração pode ser feita por videoconferência, a pedido dos noivos.', 'LRP, art. 67, § 8º'],
        ['A celebração do casamento civil é gratuita; os demais atos seguem a tabela de custas.', 'CF, art. 226, § 1º'],
      ] },
      { t: 'Regime de bens e nome', i: [
        ['Sem escolha, vale a comunhão parcial. Qualquer outro regime exige pacto antenupcial por escritura pública.', 'CC, arts. 1.640 e 1.653'],
        ['O regime começa a valer na data do casamento.', 'CC, art. 1.639, § 1º'],
        ['Qualquer noivo pode acrescentar ao seu o sobrenome do outro.', 'CC, art. 1.565, § 1º'],
      ] },
      { t: 'Regime de separação obrigatória de bens', largo: true, i: [
        ['Casamento de pessoa maior de 70 anos. O STF decidiu que as partes podem afastar essa regra por manifestação expressa, em pacto antenupcial por escritura pública.', 'CC, art. 1.641, II · STF, Tema 1236'],
        ['Pessoas que dependam de suprimento judicial para se casar.', 'CC, art. 1.641, III'],
        ['O divorciado que ainda não fez a partilha dos bens do casamento anterior.', 'CC, arts. 1.523, III, e 1.641, I'],
        ['O viúvo ou a viúva que tem filho do cônjuge falecido e ainda não concluiu o inventário.', 'CC, arts. 1.523, I, e 1.641, I'],
      ] },
    ],
    base: 'Código Civil (Lei nº 10.406/2002), arts. 1.517, 1.520, 1.521, 1.523, 1.525, 1.532, 1.534, 1.565, 1.639, 1.640, 1.641, 1.653, 1.658, 1.667, 1.672 e 1.687 · Lei nº 6.015/1973, art. 67 (redação da Lei nº 14.382/2022) · Constituição Federal, art. 226, § 1º · STF, Tema 1236.',
  },
}

const paisFalecido = [
  ['Natural do Estado de'],
  ['Estado civil'],
]

const obito = {
  area: 'Registro civil · Autorização e dados para a lavratura',
  titulo: 'Registro de óbito',
  texto: 'Orientação para a família. Leve o atestado de óbito e os documentos do falecido; a ficha abaixo é a que o cartório usa para lavrar o registro.',
  secoes: [
    { t: 'Dados do declarante', itens: [
      ['Nome completo'],
      ['Grau de parentesco', 'CPF'],
      ['RG', 'Telefone'],
      ['Estado civil', 'Profissão'],
      ['Endereço'],
      ['Bairro', 'Cidade', ['CEP', 0.7]],
    ] },
    { t: 'Dados do falecido', itens: [
      ['Nome completo'],
      ['Estado civil', 'Profissão', 'Natural de'],
      ['CPF', 'RG', 'Título de eleitor, PIS/PASEP ou nº de benefício do INSS'],
      ['Endereço (rua/avenida, nº, bairro)'],
      [['Cidade', 2], 'CEP'],
    ] },
    { t: 'Filhos vivos', itens: [
      [g('Deixou filhos?', 'Não', 'Sim'), 'Quantos vivos'],
      [{ r: 'Nome completo e idade de cada filho', linhas: 3 }],
    ] },
    { t: 'Filhos falecidos', itens: [
      [g('Filho falecido?', 'Não', 'Sim'), 'Quantos falecidos'],
      [{ r: 'Nome completo e idade de cada filho', linhas: 2 }],
    ] },
    { t: 'Informações complementares', itens: [
      [g('Era eleitor?', 'Sim', 'Não'), g('Deixou bens (imóveis, veículos)?', 'Sim', 'Não'), g('Deixou testamento?', 'Sim', 'Não')],
      [g('Deixou herdeiros menores ou interditados?', 'Sim', 'Não')],
      [g('Cemitério onde será ou foi sepultado', 'Municipal de Foz do Jordão', 'Outro (nome e cidade): ___')],
    ] },
    { t: 'Cônjuge', itens: [
      ['Nome do(a) esposo(a) / marido, com comprovação (documento assinado pelos dois), mesmo que já falecido(a)'],
    ] },
    { t: 'Pai e mãe do(a) falecido(a)', itens: [
      { cols: [
        ['Pai do(a) falecido(a)', [...paisFalecido, [g('', 'Falecido')], ['Se vivo, profissão'], ['Mora na cidade de']]],
        ['Mãe do(a) falecido(a)', [...paisFalecido, [g('', 'Falecida')], ['Se viva, profissão'], ['Mora na cidade de']]],
      ] },
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura do responsável pelo falecido'],
  depois: ['Importante', [
    'É de inteira responsabilidade do declarante o conteúdo das informações prestadas nesta declaração.',
    ['O registro de óbito e a primeira certidão são gratuitos.', 'LRP, art. 30'],
    ['Eventuais erros ou omissões na declaração, depois da lavratura do registro, podem ser retificados por procedimento administrativo, mediante pagamento de custas.', 'LRP, art. 110'],
  ]],
  lei: {
    intro: 'Quando registrar, quem pode declarar, o que o registro contém e o que é gratuito.',
    cards: [
      { t: 'Antes do enterro', i: [
        ['Nenhum sepultamento é feito sem a certidão de óbito emitida pelo cartório do local do falecimento ou da residência do falecido. O cartório registra à vista do atestado médico; onde não houver médico, bastam duas pessoas qualificadas que tenham presenciado ou verificado a morte.', 'LRP, art. 77'],
        ['Se não for possível registrar em 24 horas (distância ou outro motivo relevante), o registro é feito depois, com a maior urgência, nos prazos do art. 50: 15 dias, ou até 3 meses se o cartório fica a mais de 30 km.', 'LRP, art. 78'],
      ] },
      { t: 'Quem declara o óbito', i: [
        ['Em ordem: o chefe da família, o cônjuge sobrevivente, o filho, o irmão ou o parente mais próximo maior e presente; o administrador do local onde ocorreu a morte; quem assistiu os últimos momentos (médico, sacerdote ou vizinho); a autoridade policial, se a pessoa foi encontrada morta.', 'LRP, art. 79'],
        ['A declaração pode ser feita por preposto, com autorização escrita do declarante.', 'LRP, art. 79, parágrafo único'],
      ] },
      { t: 'O que consta do registro', i: [
        ['Dia, hora e lugar do falecimento; dados pessoais do falecido; cônjuge; pais; se deixou testamento, bens e herdeiros menores ou interditados; filhos; causa da morte e quem a atestou; lugar do sepultamento; se era eleitor.', 'LRP, art. 80'],
        ['É preciso informar ao menos um número de documento do falecido (CPF, RG, título de eleitor, PIS/PASEP, INSS ou outro previsto).', 'LRP, art. 80, item 12'],
      ] },
      { t: 'Quanto custa', i: [
        ['O assento de óbito e a primeira certidão não têm emolumentos.', 'LRP, art. 30'],
        ['Criança com menos de 1 ano: antes do óbito, o cartório confere se o nascimento foi registrado; se não foi, registra primeiro.', 'LRP, art. 77, § 1º'],
      ] },
      { t: 'Responsabilidade do declarante', i: [
        ['O declarante responde pelas informações que prestar. Erros ou omissões descobertos depois do registro podem ser corrigidos por procedimento administrativo, com pagamento de custas; se o erro foi do cartório, o interessado não paga selos e taxas.', 'LRP, art. 110 e § 5º'],
      ] },
      { t: 'Cremação', i: [
        ['Só é feita se a pessoa manifestou essa vontade em vida, ou por interesse da saúde pública, com atestado de dois médicos (ou um médico legista); em morte violenta, depende de autorização do juiz.', 'LRP, art. 77, § 2º'],
      ] },
    ],
    base: 'Lei nº 6.015/1973 (Lei de Registros Públicos), arts. 30, 50, 77 a 80 e 110.',
  },
}

const paternidade = {
  area: 'Registro civil · Termo de reconhecimento',
  titulo: 'Reconhecimento de paternidade',
  texto: 'Direto no cartório, sem processo, quando o pai quer reconhecer o filho de forma voluntária.',
  secoes: [
    { t: 'Filho(a) a ser reconhecido(a)', itens: [
      ['Nome completo atual'],
      ['Data de nascimento', 'Cartório e município do registro'],
      ['Livro', 'Folha', 'Termo', 'Data do registro'],
      ['Nome completo da mãe'],
      [g('Idade do(a) filho(a)', 'Menor de 18 anos (a mãe assina a concordância abaixo)', 'Maior de 18 anos (assina o consentimento abaixo)')],
      ['Nome que passará a constar, com sobrenome do pai (se houver mudança)'],
    ] },
    { t: 'Dados de quem reconhece (pai)', itens: pessoa },
    { t: 'Declaração do pai', itens: [
      [{ r: 'Reconheço como meu(minha) filho(a), de forma voluntária e irrevogável, a pessoa acima identificada. Declaro que estou ciente das consequências legais deste ato.', linhas: 1 }],
    ] },
    { t: 'Concordância da mãe (filho(a) menor de 18 anos)', nota: 'Só se o(a) filho(a) for menor', itens: [
      [['Nome completo da mãe', 2], 'CPF'],
      ['Declaro que concordo com o reconhecimento de paternidade. Assinatura:'],
    ] },
    { t: 'Consentimento do(a) filho(a) maior de 18 anos', nota: 'Só se o(a) filho(a) for maior', itens: [
      [['Nome completo', 2], 'CPF'],
      ['Declaro que consinto com o reconhecimento de paternidade. Assinatura:'],
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura do pai que reconhece (igual à do documento de identidade)'],
  lei: {
    intro: 'Como se reconhece um filho, o que muda se ele é maior ou menor e o que acontece se o pai não aceitar.',
    cards: [
      { t: 'Como se faz', i: [
        ['O reconhecimento de filho havido fora do casamento é feito no registro de nascimento, por escritura pública ou escrito particular arquivado em cartório, por testamento, ou diante do juiz.', 'CC, art. 1.609 · Lei 8.560/1992, art. 1º'],
        ['Pode ser feito antes do nascimento ou depois da morte do filho, se ele deixar descendentes.', 'CC, art. 1.609, parágrafo único'],
        ['Pode ser feito em cartório diferente do que lavrou o nascimento: leve a certidão de nascimento ou informe onde foi feito o registro.', 'Prov. CNJ 149/2023, art. 501, § 2º'],
      ] },
      { t: 'Não tem volta', i: [
        ['O reconhecimento é irrevogável, nem mesmo se feito em testamento.', 'CC, arts. 1.609 e 1.610'],
        'Por isso, leve documento de identidade com foto e confirme a decisão antes de assinar.',
      ] },
      { t: 'Filho maior e filho menor', i: [
        ['Filho maior de 18 anos só pode ser reconhecido se consentir.', 'CC, art. 1.614 · Lei 8.560/1992, art. 4º'],
        ['Filho menor: a averbação depende da concordância escrita da mãe. Sem ela, o caso vai ao juiz.', 'Prov. CNJ 149/2023, art. 502'],
        ['Filho menor pode impugnar o reconhecimento nos 4 anos seguintes à maioridade ou à emancipação.', 'CC, art. 1.614'],
      ] },
      { t: 'O que fica no registro', i: [
        ['A certidão do filho não informa se a filiação é de dentro ou de fora do casamento.', 'Lei 8.560/1992, art. 5º'],
        ['O reconhecimento voluntário é averbado no registro de nascimento, direto pelo cartório, sem juiz nem Ministério Público.', 'LRP, art. 29, § 1º, d · Prov. CNJ 149/2023, art. 502'],
      ] },
      { t: 'Se o suposto pai não reconhecer', largo: true, i: [
        ['A mãe de filho menor, ou o filho maior, pode indicar o suposto pai no cartório. O oficial manda os dados ao juiz, que notifica o suposto pai.', 'Lei 8.560/1992, art. 2º · Prov. CNJ 149/2023, arts. 496 a 499'],
        ['Se ele confirmar, lavra-se o termo e averba-se o reconhecimento no registro. Se não responder em 30 dias, ou negar, o juiz encaminha o caso ao Ministério Público ou à Defensoria Pública, que pode propor a ação de investigação de paternidade.', 'Lei 8.560/1992, art. 2º, §§ 3º e 4º · Prov. CNJ 149/2023, art. 499, § 4º'],
      ] },
    ],
    base: 'Código Civil, arts. 1.609, 1.610 e 1.614 · Lei nº 8.560/1992, arts. 1º, 2º, 4º e 5º · Lei nº 6.015/1973, art. 29, § 1º, d · Provimento CNJ nº 149/2023 (Código Nacional de Normas), arts. 496 a 502, que substituiu o Provimento nº 16/2012.',
  },
}

const averbacao = {
  area: 'Registro civil · Requerimento',
  titulo: 'Averbação e retificações',
  texto: 'Divórcio, mudança de nome e correções. Indique o registro que será alterado e o que precisa mudar.',
  secoes: [
    { t: 'Registro a ser alterado', itens: [
      [g('Tipo de registro', 'Nascimento', 'Casamento', 'Óbito')],
      ['Nome da pessoa como consta no registro'],
      [['Cartório do registro', 3], 'Livro', 'Folha', 'Termo'],
    ] },
    { t: 'O que você quer fazer', itens: [
      [g('Marque a opção', 'Averbar divórcio', 'Averbar união estável ou sua extinção', 'Alterar o prenome (maior de 18 anos)', 'Incluir ou excluir sobrenome', 'Corrigir erro evidente de grafia ou dado', 'Outro: ___')],
    ] },
    { t: 'Alteração pedida', itens: [
      ['Como está hoje (copie exatamente o que consta)', 'Como deve ficar'],
      [{ r: 'Como está hoje (2)', oculto: true }, { r: 'Como deve ficar (2)', oculto: true }],
      [{ r: 'Como está hoje (3)', oculto: true }, { r: 'Como deve ficar (3)', oculto: true }],
      [{ r: 'Explique o motivo, se houver', linhas: 2 }],
    ] },
    { t: 'Documentos que acompanham o pedido', itens: [
      [g('Marque o que está levando', 'Certidão atualizada', 'Documento de identidade e CPF', 'Sentença ou escritura de divórcio', 'Certidões que provam o sobrenome pedido', 'Outros: ___')],
    ] },
    { t: 'Dados de quem pede', itens: pessoa },
  ],
  assinaturas: ['Local e data', requerente],
  lei: {
    intro: 'O que é averbação, o que o cartório corrige sozinho, o que depende do juiz e as regras sobre nome.',
    cards: [
      { t: 'Averbação', i: [
        ['Averbar é anotar à margem do registro uma mudança posterior. Quem faz é o cartório onde está o registro, à vista de carta de sentença, mandado ou petição com certidão ou documento legal e autêntico.', 'LRP, arts. 97 e 98'],
        ['Divórcio ou extinção de união estável feitos por escritura servem como título para averbação.', 'CPC, art. 733, § 1º'],
        ['Se o oficial suspeitar de fraude, falsidade ou má-fé, não pratica o ato e consulta o Ministério Público.', 'LRP, art. 97, parágrafo único'],
      ] },
      { t: 'Correção feita direto no cartório', i: [
        ['Sem juiz e sem Ministério Público: erro evidente, que não exija investigação; erro ao copiar dados de ordem judicial ou documento; ordem cronológica ou numeração do livro; falta do município de nascimento quando o endereço é preciso; mudança de nome de Distrito para Município.', 'LRP, art. 110'],
        ['Se o erro foi do cartório, o interessado não paga selos e taxas.', 'LRP, art. 110, § 5º'],
        ['Nos demais casos, o pedido de restauração, suprimento ou retificação vai ao juiz, ouvido o Ministério Público.', 'LRP, art. 109'],
      ] },
      { t: 'Mudança de prenome', i: [
        ['Quem já é maior de 18 anos pode pedir pessoalmente, sem dizer o motivo e sem decisão judicial.', 'LRP, art. 56'],
        ['Só uma vez na via extrajudicial; desfazer exige sentença.', 'LRP, art. 56, § 1º'],
        ['Se o oficial suspeitar de fraude, falsidade, má-fé, vício de vontade ou simulação, recusa o pedido, com justificativa.', 'LRP, art. 56, § 4º'],
      ] },
      { t: 'Mudança de sobrenome', i: [
        ['Pode ser feita pessoalmente no cartório, com certidões, sem autorização do juiz, para incluir sobrenomes de família, incluir ou excluir sobrenome do cônjuge durante o casamento, excluir sobrenome de ex-cônjuge após o fim do casamento, ou ajustar nomes por mudança de filiação.', 'LRP, art. 57'],
        ['Quem vive em união estável registrada pode incluir o sobrenome do companheiro.', 'LRP, art. 57, § 2º'],
        ['Enteado ou enteada pode acrescentar o sobrenome do padrasto ou da madrasta, com motivo justificável e a concordância deles.', 'LRP, art. 57, § 8º'],
      ] },
    ],
    base: 'Lei nº 6.015/1973, arts. 56, 57, 97, 98, 109 e 110 (redações das Leis nº 13.484/2017 e nº 14.382/2022) · Código de Processo Civil (Lei nº 13.105/2015), art. 733, § 1º.',
  },
}

const certidao = {
  area: 'Registro civil · Pedido de certidão',
  titulo: 'Certidão e 2ª via',
  texto: 'Nascimento, casamento e óbito. Se o registro foi feito em Foz do Jordão, você pede por telefone ou e-mail e só vem buscar.',
  secoes: [
    { t: 'Qual certidão você precisa', itens: [
      [g('Tipo', 'Nascimento', 'Casamento', 'Óbito')],
      [g('Modelo', 'Resumo (breve relato)', 'Inteiro teor'), g('Formato', 'Em papel', 'Digital (por e-mail)')],
      ['Quantidade de certidões', ['Finalidade (opcional)', 2]],
    ] },
    { t: 'Dados do registro (quanto mais completo, mais rápido)', itens: [
      ['Nome completo da pessoa registrada (ou dos noivos / do falecido)'],
      ['Data do nascimento, casamento ou óbito', 'Município do registro', 'Ano aproximado do registro'],
      ['Nome do pai', 'Nome da mãe'],
      ['Livro (se souber)', 'Folha', 'Termo'],
    ] },
    { t: 'Quem está pedindo', itens: [
      ['Nome completo'],
      ['CPF', 'Telefone / WhatsApp', 'E-mail'],
      [g('Como quer receber', 'Retirar no balcão', 'Receber por e-mail (digital)'), g('Isenção de custo', 'Declaro que sou pobre na forma da lei')],
    ] },
  ],
  assinaturas: ['Local e data', requerente],
  lei: {
    intro: 'Quem pode pedir, em quanto tempo sai, o que a certidão mostra e quando é de graça.',
    cards: [
      { t: 'Quem pode pedir', i: [
        ['Qualquer pessoa pode pedir certidão de registro, sem precisar dizer o motivo. O cartório é obrigado a emitir a certidão e a prestar as informações solicitadas.', 'LRP, arts. 16 e 17'],
      ] },
      { t: 'Prazo', i: [
        ['A certidão não pode ser retardada por mais de 5 dias.', 'LRP, art. 19'],
        ['Certidões podem ser fornecidas por meio eletrônico, com tecnologia que permita impressão pelo usuário e confirmação da autenticidade.', 'LRP, art. 19, § 5º'],
      ] },
      { t: 'Tipos e conteúdo', i: [
        ['A certidão pode ser de inteiro teor, em resumo ou em relatório, conforme o pedido.', 'LRP, art. 19'],
        ['A certidão de nascimento traz a data do assento, a data do nascimento por extenso e a naturalidade.', 'LRP, art. 19, § 4º'],
        ['Se houve alteração depois do ato (averbação), ela aparece obrigatoriamente na certidão.', 'LRP, art. 21'],
      ] },
      { t: 'Quanto custa', i: [
        ['A primeira certidão de nascimento e de óbito é gratuita.', 'LRP, art. 30'],
        ['Quem é reconhecidamente pobre não paga as demais certidões do registro civil; basta declaração do próprio interessado, com duas testemunhas se for analfabeto.', 'LRP, art. 30, §§ 1º e 2º'],
        ['Declaração falsa gera responsabilidade civil e criminal.', 'LRP, art. 30, § 3º'],
      ] },
      { t: 'Registro feito em outra cidade', largo: true, i: [
        ['Você pode pedir a qualquer cartório a certidão eletrônica de um registro feito em outra cidade, pelo Sistema Eletrônico dos Registros Públicos (Serp).', 'LRP, art. 19, § 6º'],
        ['A certidão eletrônica, e a impressa a partir dela, têm validade e fé pública.', 'LRP, art. 19, § 7º'],
        'Também dá para pedir pelo portal de Certidões online do Registro Civil, indicado em “Links úteis” no site do Serviço Distrital.',
      ] },
    ],
    base: 'Lei nº 6.015/1973 (Lei de Registros Públicos), arts. 16, 17, 19, 21 e 30 (redação da Lei nº 14.382/2022).',
  },
}

const interdicao = {
  area: 'Registro civil · Requerimento de registro',
  titulo: 'Interdições e tutelas',
  texto: 'Registro de decisões judiciais. Leve a certidão ou a carta de sentença expedida pelo juízo.',
  secoes: [
    { t: 'Qual ato será registrado ou averbado', itens: [
      [g('Marque', 'Interdição / curatela', 'Tutela', 'Fim da interdição', 'Troca de curador', 'Mudança dos limites da curatela', 'Outro: ___')],
    ] },
    { t: 'Pessoa interditada ou tutelada', itens: [
      ['Nome completo'],
      ['Data de nascimento', 'Estado civil', 'Profissão'],
      ['Naturalidade', 'Domicílio', 'Residência'],
      [['Cartório e data do registro de nascimento', 3], ['Cartório e data do registro de casamento', 2]],
      [['Nome do cônjuge (se casado)', 3], ['Lugar onde está internado (se houver)', 2]],
    ] },
    { t: 'Sentença', itens: [
      ['Número do processo', ['Vara e comarca', 2]],
      ['Nome do juiz', 'Data da sentença', 'Trânsito em julgado em'],
      ['Nome de quem pediu a interdição e causa'],
      [g('Limites da curatela', 'Total', 'Parcial: ___')],
    ] },
    { t: 'Curador(a) ou tutor(a)', itens: [
      [['Nome completo', 2], 'CPF'],
      ['Estado civil', 'Profissão', 'Telefone / WhatsApp'],
      ['Domicílio e residência'],
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura do(a) curador(a) ou tutor(a) / apresentante'],
  lei: {
    intro: 'O que o cartório registra, quanto tempo há para pedir, quem é o curador e onde fica o livro do ato.',
    cards: [
      { t: 'O que o registro contém', i: [
        ['Data do registro; dados do interditado, com cartório do nascimento e do casamento; data da sentença, nome e vara do juiz; dados do curador; quem pediu a interdição e a causa; limites da curatela, se parcial; lugar da internação.', 'LRP, art. 92'],
      ] },
      { t: 'Quem leva e em quanto tempo', i: [
        ['O curador ou quem promoveu a ação deve levar a sentença ao cartório. Se não o fizer em 8 dias, o juiz comunica o cartório para registrar de ofício.', 'LRP, art. 93'],
        ['Antes de registrada a sentença, o curador não pode assinar o termo de curatela.', 'LRP, art. 93, parágrafo único'],
      ] },
      { t: 'Quem é o curador', i: [
        ['A lei dá preferência ao cônjuge ou companheiro, depois ao pai ou à mãe, depois ao descendente mais apto. Na falta de todos, o juiz escolhe.', 'CC, art. 1.775'],
        ['Os filhos menores vão para tutela quando os pais morrem, são julgados ausentes ou perdem o poder familiar.', 'CC, art. 1.728'],
      ] },
      { t: 'Mudanças depois do registro', i: [
        ['No mesmo livro são averbados o fim da interdição, a troca de curador, a mudança dos limites da curatela e a mudança ou fim da internação.', 'LRP, art. 104'],
      ] },
      { t: 'Onde o ato é registrado', largo: true, i: [
        ['A interdição deve ser registrada em registro público. A lei prevê que ela e a emancipação ficam no Livro E, mantido no cartório do 1º Ofício da comarca.', 'CC, art. 9º, III · LRP, art. 33, p. único, e arts. 89 e 92'],
        'Foz do Jordão pertence à Comarca de Guarapuava. Antes de levar a decisão, confirme com o cartório se o registro é feito aqui ou no 1º Ofício. A lei não trata de registro de tutela no registro civil; o cartório orienta conforme as normas da Corregedoria.',
      ] },
    ],
    base: 'Lei nº 6.015/1973, arts. 33, 89, 92, 93 e 104 · Código Civil, arts. 9º, 1.728 e 1.775.',
  },
}

const firma = {
  area: 'Tabelionato de notas · Solicitação e cartão de assinatura',
  titulo: 'Reconhecimento de firma e autenticação',
  texto: 'Na hora, com documento original. Preencha o cartão de assinatura (se for a primeira vez) e informe o documento.',
  secoes: [
    { t: 'O que você precisa', itens: [
      [g('Serviço', 'Reconhecimento de firma por autenticidade (assino diante do cartório)', 'Reconhecimento de firma por semelhança (assinatura já arquivada)', 'Autenticação de cópia')],
      [['Documento a ser assinado ou copiado (tipo)', 2], 'Quantidade'],
    ] },
    { t: 'Cartão de assinatura', nota: 'Preencha na primeira vez; fica arquivado no cartório', itens: [
      ['Nome completo'],
      ['CPF', 'RG / órgão emissor', 'Data de nascimento'],
      ['Nacionalidade', 'Estado civil', 'Profissão'],
      ['Nome do pai', 'Nome da mãe'],
      ['Endereço completo (rua, nº, bairro, cidade/UF)'],
      { sub: 'Modelos de assinatura (assine igual à do documento de identidade)' },
      { assinar: ['Assinatura (modelo 1)', 'Assinatura (modelo 2) / rubrica'] },
    ] },
    { t: 'Confirmação', itens: [
      [g('Declaro que', 'Estou levando documento de identidade original com foto e CPF', 'Não vou assinar o documento antes de chegar ao cartório')],
    ] },
  ],
  assinaturas: ['Local e data', requerente],
  lei: {
    intro: 'Quem faz, o que o cartório confirma, o que ele não confirma e quando a repartição pública não pode exigir.',
    cards: [
      { t: 'Quem pode fazer', i: [
        ['Reconhecer firma e autenticar cópias é função exclusiva do tabelião de notas.', 'Lei 8.935/1994, art. 7º, IV e V'],
        ['A escolha do cartório é livre, qualquer que seja o seu domicílio. O tabelião só atua dentro do município para o qual recebeu a delegação.', 'Lei 8.935/1994, arts. 8º e 9º'],
      ] },
      { t: 'O que o cartório confirma', i: [
        'Na firma, confirma que a assinatura é de quem se identificou, por comparação com a assinatura arquivada ou porque foi feita diante do tabelião.',
        'Na autenticação, confirma que a cópia é igual ao original apresentado.',
        'Ele não atesta que o conteúdo do documento é verdadeiro nem se o negócio é bom ou ruim.',
      ] },
      { t: 'Quando a repartição pública não pode exigir', i: [
        ['Órgãos públicos federais, estaduais e municipais não podem exigir reconhecimento de firma nem autenticação de cópia do cidadão: o próprio servidor confere a assinatura ou compara a cópia com o original.', 'Lei 13.726/2018, art. 3º, I e II'],
        ['Bancos, empresas e outros particulares podem continuar exigindo. A procuração particular, por exemplo, pode ser exigida com firma reconhecida.', 'CC, art. 654, § 2º'],
      ] },
      { t: 'O que levar', i: [
        'Documento de identidade original com foto e CPF.',
        'Para autenticar: o documento original e a cópia.',
        'Para firma por autenticidade: o documento ainda sem assinar, para assinar diante do cartório. O valor do ato segue a Tabela de custas do TJPR.',
      ] },
    ],
    base: 'Lei nº 8.935/1994 (Lei dos Cartórios), arts. 7º, 8º e 9º · Lei nº 13.726/2018, art. 3º · Código Civil, art. 654, § 2º.',
  },
}

const outorga = [
  ['Nome completo'],
  ['CPF', 'RG / órgão'],
  ['Nacionalidade', 'Estado civil'],
  ['Profissão'],
  ['Endereço completo'],
  ['Telefone / WhatsApp'],
]

const procuracao = {
  area: 'Tabelionato de notas · Dados para lavratura',
  titulo: 'Procurações e substabelecimentos',
  texto: 'Para bancos, INSS, imóveis e veículos. Quem dá os poderes comparece ao cartório; quem recebe só precisa fornecer os dados completos.',
  secoes: [
    { t: 'Que ato você quer fazer', itens: [
      [g('Marque', 'Procuração pública', 'Substabelecimento com reserva de poderes', 'Substabelecimento sem reserva de poderes')],
    ] },
    { t: 'Quem dá e quem recebe os poderes', nota: 'O outorgado não precisa comparecer', itens: [
      { cols: [['Outorgante (quem dá os poderes)', outorga], ['Outorgado (quem recebe os poderes)', outorga]] },
    ] },
    { t: 'Poderes concedidos', itens: [
      [g('Finalidade', 'Banco (conta nº: ___)', 'INSS / benefício', 'Venda ou compra de imóvel (matrícula nº: ___)', 'Veículo (placa ou RENAVAM: ___)', 'Poderes gerais de representação', 'Outros: ___')],
      [g('Pode substabelecer (passar os poderes a outra pessoa)?', 'Sim', 'Não'), g('Validade', 'Prazo indeterminado', 'Até ___')],
      [{ r: 'Descreva os poderes específicos (ex.: receber, assinar, vender, pagar...)', linhas: 2 }],
    ] },
    { t: 'Se for substabelecimento', itens: [
      [['Procuração original: cartório, livro e folha', 3], 'Data'],
      ['Nome de quem recebe o substabelecimento'],
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura do outorgante (igual à do documento de identidade)'],
  lei: {
    intro: 'O que é procuração, quando precisa ser feita no cartório, o que é substabelecimento e quem precisa comparecer.',
    cards: [
      { t: 'O que é', i: [
        ['Procuração é o documento pelo qual alguém (outorgante) dá poderes a outra pessoa (procurador) para agir em seu nome.', 'CC, art. 653'],
        ['Pode ser particular, com assinatura do outorgante, mas quem recebe a procuração pode exigir firma reconhecida.', 'CC, art. 654, §§ 1º e 2º'],
      ] },
      { t: 'Quando precisa ser pública', i: [
        ['A procuração segue a forma exigida para o ato que será praticado. Para vender imóvel de valor acima de 30 salários-mínimos, a lei exige escritura pública; por isso, em regra, a procuração para esse fim também é feita por escritura pública.', 'CC, arts. 657 e 108'],
        ['A procuração pública é lavrada pelo tabelião, com fé pública.', 'Lei 8.935/1994, art. 7º, I · CC, art. 215'],
        ['Pessoa casada precisa da autorização do cônjuge para vender ou onerar imóvel, salvo separação absoluta de bens.', 'CC, art. 1.647, I'],
      ] },
      { t: 'Substabelecimento', i: [
        ['É quando o procurador passa os poderes que recebeu a outra pessoa. Mesmo que a procuração seja pública, o substabelecimento pode ser feito por instrumento particular.', 'CC, art. 655'],
        ['Se o procurador substabelecer sem autorização, responde pelos prejuízos causados pelo substabelecido.', 'CC, art. 667'],
      ] },
      { t: 'Quem comparece e o que levar', i: [
        'O outorgante comparece com RG e CPF originais. O procurador não precisa comparecer; basta fornecer os dados completos.',
        ['A procuração também pode ser feita online, por videoconferência, pela plataforma e-Notariado, com certificado digital gratuito.', 'Prov. CNJ 149/2023, arts. 284 e seguintes'],
      ] },
    ],
    base: 'Código Civil, arts. 108, 215, 653, 654, 655, 657, 667 e 1.647 · Lei nº 8.935/1994, art. 7º, I · Provimento CNJ nº 149/2023 (Código Nacional de Normas), atos notariais eletrônicos – e-Notariado, que substituiu o Provimento nº 100/2020.',
  },
}

const parte = [
  ['Nome completo'],
  ['CPF', 'RG'],
  ['Estado civil e regime de bens'],
  ['Nome do cônjuge (se casado)'],
  ['Profissão', 'Telefone'],
  ['Endereço completo'],
]

const compraVenda = {
  area: 'Tabelionato de notas · Dados para escritura',
  titulo: 'Compra e venda e doação',
  texto: 'Escrituras de imóveis e outros bens. Preencha o que souber; o cartório confere os documentos e pede o que faltar.',
  secoes: [
    { t: 'Tipo de ato', itens: [
      [g('Marque', 'Compra e venda', 'Doação', 'Outro: ___'), g('Bem', 'Imóvel urbano', 'Imóvel rural', 'Outro bem: ___')],
    ] },
    { t: 'Bem objeto do ato', itens: [
      ['Número da matrícula', ['Registro de Imóveis (comarca)', 2]],
      [['Endereço ou localização', 2], 'Inscrição municipal / INCRA'],
      ['Área (m² ou ha)', 'Valor do negócio ou da avaliação (R$)', 'Forma de pagamento'],
    ] },
    { t: 'Quem vende ou doa e quem compra ou recebe', itens: [
      { cols: [['Vendedor(a) / Doador(a)', parte], ['Comprador(a) / Donatário(a)', parte]] },
    ] },
    { t: 'Só para doação', itens: [
      [g('Cláusulas desejadas', 'Reserva de usufruto para o doador', 'Incomunicabilidade', 'Impenhorabilidade', 'Inalienabilidade')],
      [g('Doação a filho ou outro descendente', 'Adiantamento de herança (legítima)', 'Sai da parte disponível')],
      [g('O imposto da doação (ITCMD) já foi pago?', 'Sim', 'Não')],
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura de quem vende ou doa', 'Assinatura de quem compra ou recebe'],
  lei: {
    intro: 'Quando a escritura é obrigatória, que documentos a lei pede, quais impostos incidem e quando a propriedade muda de dono.',
    cards: [
      { t: 'Quando a escritura é obrigatória', i: [
        ['Para imóveis de valor superior a 30 vezes o maior salário-mínimo, a escritura pública é essencial para a validade da transferência.', 'CC, art. 108'],
        ['A escritura pública, lavrada em notas de tabelião, é documento com fé pública e faz prova plena.', 'CC, art. 215'],
        ['A doação pode ser feita por escritura pública ou instrumento particular; para imóveis acima desse valor, aplica-se a regra da escritura.', 'CC, arts. 541 e 108'],
      ] },
      { t: 'Documentos e impostos', i: [
        ['Além da identificação das partes, o tabelião só exige o que a lei manda: comprovante do imposto de transmissão, certidões fiscais e certidão de propriedade e de ônus reais (matrícula atualizada).', 'Lei 7.433/1985, art. 1º, § 2º'],
        ['Venda de imóvel: ITBI, imposto municipal. Doação ou herança: ITCMD, imposto estadual.', 'CF, arts. 156, II, e 155, I'],
      ] },
      { t: 'Casados', i: [
        ['Nenhum cônjuge pode vender ou onerar imóvel sem autorização do outro, salvo no regime de separação absoluta de bens.', 'CC, art. 1.647, I'],
        'Por isso o cartório pede o regime de bens e os dados do cônjuge.',
      ] },
      { t: 'Doação', i: [
        ['Doação de ascendente a descendente, ou de um cônjuge a outro, é adiantamento do que cabe por herança.', 'CC, art. 544'],
        ['É nula a doação na parte que ultrapassar o que o doador poderia deixar em testamento.', 'CC, art. 549'],
      ] },
      { t: 'A escritura não é o último passo', largo: true, i: [
        ['A propriedade de imóvel só passa para o comprador quando a escritura é registrada no Registro de Imóveis. Até lá, o vendedor continua sendo o dono perante terceiros.', 'CC, art. 1.245'],
        ['A escolha do cartório é livre, independentemente de onde estão as partes ou o imóvel.', 'Lei 8.935/1994, art. 8º'],
      ] },
    ],
    base: 'Código Civil, arts. 108, 215, 541, 544, 549, 1.245 e 1.647 · Lei nº 7.433/1985, art. 1º · Lei nº 8.935/1994, art. 8º · Constituição Federal, arts. 155, I, e 156, II.',
  },
}

const companheiro = [
  ['Nome completo'],
  ['CPF', 'RG'],
  ['Data de nascimento', 'Nacionalidade'],
  ['Estado civil', 'Profissão'],
  ['Nome do pai e da mãe'],
  ['Endereço completo'],
]

const uniaoEstavel = {
  area: 'Tabelionato de notas · Dados para escritura',
  titulo: 'União estável e pacto antenupcial',
  texto: 'Declaração e regime de bens do casal. Preencha os dados dos dois e escolha o regime.',
  secoes: [
    { t: 'Que ato você quer fazer', itens: [
      [g('Marque', 'Declaração de união estável', 'Pacto antenupcial (antes do casamento)', 'Contrato de convivência com regime de bens')],
    ] },
    { t: 'Dados do casal', itens: [
      { cols: [['Parte 1', companheiro], ['Parte 2', companheiro]] },
    ] },
    { t: 'Informações do ato', itens: [
      ['Início da união (data)', 'Data prevista do casamento (pacto)', 'Filhos em comum'],
      [g('Regime de bens', 'Comunhão parcial', 'Comunhão universal', 'Separação de bens', 'Participação final nos aquestos', 'Cláusulas próprias: ___')],
      [{ r: 'Bens que cada um já possui e quer destacar, ou regras especiais', linhas: 2 }],
      [g('Deseja registrar a união estável no Registro Civil?', 'Sim', 'Não')],
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura da parte 1', 'Assinatura da parte 2'],
  lei: {
    intro: 'O que caracteriza a união estável, o que o pacto antenupcial exige e o que muda sem contrato.',
    cards: [
      { t: 'União estável', i: [
        ['É a convivência pública, contínua e duradoura, com objetivo de constituir família. Não se forma entre pessoas com os impedimentos do casamento, mas a pessoa casada e separada de fato pode viver em união estável.', 'CC, art. 1.723, § 1º'],
        ['Sem contrato escrito entre os companheiros, vale o regime da comunhão parcial de bens.', 'CC, art. 1.725'],
        'A escritura pública é uma das formas de provar a união e o seu regime de bens.',
      ] },
      { t: 'Pacto antenupcial', i: [
        ['É o contrato em que os noivos definem o regime de bens antes do casamento. Podem estipular o que quiserem sobre os bens.', 'CC, art. 1.639'],
        ['É nulo se não for feito por escritura pública, e ineficaz se o casamento não ocorrer.', 'CC, art. 1.653'],
        ['Só vale perante terceiros depois de registrado no Registro de Imóveis do domicílio do casal.', 'CC, art. 1.657'],
      ] },
      { t: 'Registro no Registro Civil', i: [
        ['O registro é facultativo e dá efeitos à união estável perante terceiros. É feito no Livro E do registro civil da residência do casal.', 'LRP, art. 94-A · Prov. CNJ 149/2023, art. 537'],
        ['Pessoa casada, ainda que separada de fato, não pode registrar a união no Livro E, salvo se separada judicial ou extrajudicialmente.', 'LRP, art. 94-A, § 1º'],
        ['Com a união registrada, o companheiro pode incluir o sobrenome do outro.', 'LRP, art. 57, § 2º'],
      ] },
      { t: 'Regime de bens', i: [
        ['O regime começa a valer na data do casamento. Depois, só pode ser alterado com autorização judicial, a pedido motivado dos dois.', 'CC, art. 1.639, §§ 1º e 2º'],
        ['Para pessoa maior de 70 anos, a lei manda separação de bens, mas o STF permite afastar a regra por manifestação expressa em escritura pública.', 'CC, art. 1.641, II · STF, Tema 1236'],
      ] },
      { t: 'Deveres e efeitos', largo: true, i: [
        ['Os companheiros devem lealdade, respeito e assistência, e guarda, sustento e educação dos filhos.', 'CC, art. 1.724'],
        ['A união estável pode virar casamento com pedido direto ao registro civil da residência, sem juiz e sem cerimônia de celebração.', 'LRP, art. 70-A'],
      ] },
    ],
    base: 'Código Civil, arts. 1.639, 1.641, 1.653, 1.657, 1.723, 1.724 e 1.725 · Lei nº 6.015/1973, arts. 57, 70-A e 94-A (incluídos ou alterados pela Lei nº 14.382/2022) · Provimento CNJ nº 149/2023, art. 537 · STF, Tema 1236.',
  },
}

const conjuge = [
  ['Nome completo'],
  ['CPF', 'RG'],
  ['Nome após o divórcio'],
  [g('Alimentos entre os cônjuges', 'Não', 'Sim')],
]

const advogado = { t: 'Advogado(a) ou defensor(a) público(a)', nota: 'Obrigatório em todos os atos', itens: [
  [['Nome completo', 2], 'OAB / matrícula'],
  ['Telefone / WhatsApp', ['E-mail', 1.4]],
] }

const divorcio = {
  area: 'Tabelionato de notas · Parte 1 · Divórcio e fim de união estável',
  titulo: 'Divórcio e inventário em cartório',
  texto: 'Quando há acordo, com advogado. Esta parte é para divórcio e fim de união estável; o inventário tem a sua ficha logo abaixo, na Parte 2.',
  secoes: [
    { t: 'Que ato você quer fazer', itens: [
      [g('Marque', 'Divórcio consensual', 'Fim de união estável')],
    ] },
    { t: 'Dados dos cônjuges ou companheiros', itens: [
      { cols: [['Cônjuge 1', conjuge], ['Cônjuge 2', conjuge]] },
    ] },
    { t: 'Casamento, filhos e bens', itens: [
      [['Cartório, livro, folha e termo do casamento', 2], 'Regime de bens'],
      [g('Filhos comuns', 'Não há', 'Há, todos maiores e capazes', 'Há menores ou incapazes (já há decisão judicial sobre guarda, visitas e alimentos): processo nº ___')],
      [{ r: 'Partilha dos bens (descreva ou indique se já foi feita)', linhas: 2 }],
    ] },
    advogado,
  ],
  assinaturas: ['Local e data', 'Assinatura de uma das partes', 'Assinatura do(a) advogado(a)'],
  depois: ['Inventário e partilha?', [
    'Use a ficha da Parte 2, logo abaixo: dados do falecido, herdeiros, bens, dívidas e lista de documentos.',
  ]],
  lei: {
    intro: 'Quando é possível fazer divórcio no cartório, quem precisa estar presente e quais são os limites.',
    cards: [
      { t: 'Regra geral', i: [
        ['Se todos forem capazes e concordes, o divórcio e a extinção de união estável podem ser feitos por escritura pública, sem homologação do juiz. A escritura vale para qualquer registro e para levantar valores em banco.', 'CPC, art. 733, § 1º'],
        ['O tabelião só lavra a escritura se os interessados estiverem assistidos por advogado ou defensor público, cuja qualificação e assinatura constam do ato.', 'CPC, art. 733, § 2º'],
      ] },
      { t: 'Divórcio com filhos menores', i: [
        ['O CPC menciona divórcio em cartório sem filhos incapazes. Desde a Resolução CNJ 571/2024, é possível também com filhos menores ou incapazes, desde que guarda, convivência e alimentos já tenham sido decididos pela Justiça e isso conste da escritura.', 'Res. CNJ 35/2007, arts. 34 e 35'],
      ] },
      { t: 'Depois da escritura', i: [
        ['A escritura serve de título para averbar o divórcio no registro de casamento.', 'CPC, art. 733, § 1º · LRP, art. 97'],
        ['Quem quiser pode excluir o sobrenome do ex-cônjuge, por averbação no registro.', 'LRP, art. 57, III'],
      ] },
      { t: 'Escolha do cartório', i: [
        ['Você escolhe o cartório, independentemente de onde moram as partes.', 'Lei 8.935/1994, art. 8º'],
      ] },
    ],
    base: 'Código de Processo Civil (Lei nº 13.105/2015), art. 733 · Resolução CNJ nº 35/2007, com as alterações da Resolução CNJ nº 571/2024 · Lei nº 6.015/1973, arts. 57 e 97 · Lei nº 8.935/1994, art. 8º.',
  },
}

const inventario = {
  area: 'Tabelionato de notas · Parte 2 · Inventário extrajudicial',
  titulo: 'Inventário em cartório',
  texto: 'Dados para inventário extrajudicial. O(A) inventariante reúne as informações e os documentos listados no fim da página e leva ao cartório, com advogado.',
  como: 'Imprima, preencha com letra de forma e leve ao cartório junto com os documentos da lista. Use o botão “Adicionar herdeiro(a)” para incluir cada herdeiro antes de imprimir ou enviar.',
  secoes: [
    { t: 'Dados do(a) falecido(a)', itens: [
      ['Nome completo'],
      ['CPF', 'Data de nascimento'],
      ['Estado civil', 'Natural de'],
      ['Profissão', 'Data do óbito'],
      ['Último endereço'],
      [['Cidade', 2], 'CEP'],
      [g('Deixou testamento?', 'Não', 'Sim (havendo testamento, informe ao cartório)')],
    ] },
    { t: 'Cônjuge ou companheiro(a) sobrevivente', itens: [
      [g('Situação', 'Casamento', 'União estável', 'Não havia')],
      ['Nome completo'],
      ['CPF', 'Regime de bens', 'Profissão'],
      ['Telefone', 'E-mail'],
      ['Endereço'],
    ] },
    { t: 'Inventariante (responsável pelo inventário)', itens: [
      ['Nome completo'],
      ['Parentesco', 'CPF'],
      ['Telefone', 'E-mail'],
    ] },
    { t: 'Advogado(a) responsável', nota: 'Participação obrigatória', itens: [
      [['Nome completo', 3], 'OAB nº'],
      ['Telefone', 'E-mail'],
      ['Endereço'],
    ] },
    { t: 'Herdeiros', itens: [
      { herdeiros: [
        ['Nome completo'],
        ['Parentesco', 'Estado civil'],
        ['CPF', 'Telefone'],
        ['E-mail'],
        ['Endereço / cidade'],
      ] },
    ] },
    { t: 'Bens e dívidas', itens: [
      { tabela: ['Imóveis (urbanos e rurais)', [['Descrição / endereço / localização', 3], ['Matrícula nº', 1.3], ['Valor aproximado (R$)', 1.3]], 3] },
      { tabela: ['Veículos', [['Marca / modelo / ano', 3], ['Placa', 1.3], ['Valor aproximado (R$)', 1.3]], 2] },
      { tabela: ['Contas bancárias e investimentos', [['Banco / instituição', 2], ['Agência / conta', 2], ['Saldo na data do óbito (R$)', 1.6]], 2] },
      { tabela: ['Empresas, joias e outros bens', [['Descrição', 4], ['Valor aproximado (R$)', 1.6]], 2] },
      { sub: 'Dívidas' },
      [g('Deixou dívidas?', 'Não', 'Sim')],
      { tabela: ['', [['Credor / descrição', 4], ['Valor (R$)', 1.6]], 2] },
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura do inventariante / responsável'],
  lei: {
    intro: 'Quando o inventário pode ser feito no cartório, quem precisa estar presente, quais documentos levar e os requisitos.',
    cards: [
      { t: 'Quando pode ser feito', i: [
        ['Se todos forem capazes e concordes, o inventário e a partilha podem ser feitos por escritura pública, sem homologação do juiz. A escritura vale para qualquer registro e para levantar valores em banco.', 'CPC, art. 610, § 1º'],
        ['O tabelião só lavra a escritura se todos estiverem assistidos por advogado ou defensor público, cuja qualificação e assinatura constam do ato.', 'CPC, art. 610, § 2º'],
      ] },
      { t: 'Herdeiro menor ou incapaz', i: [
        ['O CPC manda inventário judicial quando há interessado incapaz. Pela Resolução CNJ 571/2024, o inventário em cartório é possível se cada incapaz receber sua parte em parte ideal de cada bem, sem atos de disposição sobre os bens do incapaz, e com manifestação favorável do Ministério Público.', 'CPC, art. 610 · Res. CNJ 35/2007, art. 12-A'],
      ] },
      { t: 'Inventário com testamento', i: [
        ['O CPC manda inventário judicial quando há testamento. Pela Resolução CNJ 571/2024, pode ser feito no cartório se houver autorização do juízo, todos forem capazes e concordes e estiverem representados por advogado.', 'Res. CNJ 35/2007, art. 12-B'],
      ] },
      { t: 'Imposto e escolha do cartório', i: [
        ['Sobre a herança incide o ITCMD, imposto estadual; o comprovante de pagamento faz parte dos documentos.', 'CF, art. 155, I'],
        ['Você escolhe o cartório, independentemente de onde moram as partes ou de onde estão os bens.', 'Lei 8.935/1994, art. 8º'],
      ] },
      { t: 'Documentos do(a) falecido(a)', i: [
        'Certidão de óbito.',
        'Documento de identificação com CPF (ou CNH).',
        'Certidão de casamento, com averbação de separação ou divórcio (validade de até 90 dias), ou certidão de nascimento, se solteiro(a).',
        'Pacto antenupcial, se houver.',
        'Comprovante de residência (últimos 90 dias).',
        'Certidão de inexistência de testamento (Colégio Notarial do Brasil).',
        'Testamento, se existir (exige autorização judicial).',
      ] },
      { t: 'Cônjuge ou companheiro(a) e herdeiros', i: [
        'Documento de identificação com CPF (ou CNH) de cada um.',
        'Certidão de nascimento ou de casamento (validade de até 90 dias).',
        'Pacto antenupcial, se houver.',
        'Comprovante de residência (últimos 90 dias).',
        'Profissão e endereço completo.',
      ] },
      { t: 'Documentos do(a) advogado(a)', i: [
        'Carteira da OAB e procuração.',
        'Descrição da partilha e informações sobre bens e dívidas.',
      ] },
      { t: 'Imóveis urbanos', i: [
        'Matrícula e certidão de ônus atualizadas (validade de 30 dias).',
        'Carnê do IPTU do ano do falecimento ou certidão de valor venal.',
        'Certidão negativa de tributos municipais.',
        'Quitação de condomínio, se houver.',
        'Certidão de laudêmio, se o imóvel for foreiro.',
      ] },
      { t: 'Imóveis rurais', i: [
        'Matrícula e certidão de ônus atualizadas (validade de 30 dias).',
        'CCIR (Certificado de Cadastro de Imóvel Rural).',
        'ITR dos últimos 5 anos ou certidão negativa do imóvel.',
      ] },
      { t: 'Bens móveis e direitos', i: [
        'Veículos: CRLV (documento do veículo).',
        'Contas e investimentos: extratos com saldo na data do óbito.',
        'Empresas: contrato social, CNPJ e último balanço.',
        'Joias e outros bens de valor: notas fiscais ou avaliação.',
      ] },
      { t: 'Certidões e impostos', largo: true, i: [
        'Certidão negativa da Receita Federal e da PGFN.',
        'Certidão negativa estadual e municipal (domicílio do falecido).',
        'Declarações de Imposto de Renda dos últimos 5 anos, se houver.',
        'Comprovante de pagamento do ITCMD.',
      ] },
      { t: 'Requisitos e observações', largo: true, i: [
        'Todos os herdeiros devem estar de acordo com a partilha.',
        'Havendo herdeiro menor de idade ou incapaz, o inventário em cartório é possível com manifestação favorável do Ministério Público (Resolução CNJ 571/2024).',
        'Havendo testamento, é necessária autorização judicial para o inventário em cartório.',
        'A participação de advogado(a) é obrigatória em todo o processo.',
        'O(A) inventariante é responsável por reunir e trazer ao cartório todas as informações e documentos necessários.',
        'Se algum requisito não for atendido, o inventário deve ser feito pela via judicial.',
        'Esta lista é de referência: o cartório pode solicitar documentos adicionais, e certidões vencidas devem ser emitidas novamente.',
      ] },
    ],
    base: 'Código de Processo Civil (Lei nº 13.105/2015), art. 610 · Resolução CNJ nº 35/2007, com as alterações da Resolução CNJ nº 571/2024 · Lei nº 8.935/1994, art. 8º · Constituição Federal, art. 155, I.',
  },
}

const ata = {
  area: 'Tabelionato de notas · Solicitação',
  titulo: 'Ata notarial',
  texto: 'Prova de fatos, conversas e sites. O tabelião registra o que ele próprio vê e verifica, com fé pública.',
  secoes: [
    { t: 'Quem pede', itens: pessoa },
    { t: 'O que será registrado', itens: [
      [g('Natureza do fato', 'Conversa de aplicativo (WhatsApp, e-mail...)', 'Site, página ou publicação na internet', 'Estado de imóvel, bem ou lugar', 'Fato que ocorre na presença do tabelião', 'Imagens ou sons em arquivo', 'Outro: ___')],
      [['Endereço do site / link (URL) ou local do fato', 2], 'Data e hora em que o fato ocorre ou ocorreu'],
      [{ r: 'Descrição do que deve ser registrado', linhas: 4 }],
    ] },
    { t: 'Provas e finalidade', itens: [
      [g('O que você levará', 'Celular ou computador com o conteúdo', 'Arquivos em pen drive', 'Documentos impressos', 'Outro: ___')],
      [['Finalidade (ex.: processo, perícia, contrato...)', 2], 'Pessoas envolvidas (se houver)'],
    ] },
  ],
  assinaturas: ['Local e data', requerente],
  lei: {
    intro: 'O que é uma ata notarial, o que ela prova, o que o tabelião não faz e como pedir.',
    cards: [
      { t: 'O que é', i: [
        ['Ata notarial é o documento em que o tabelião atesta ou documenta a existência e o modo de existir de um fato, a pedido do interessado.', 'CPC, art. 384'],
        ['Dados representados por imagem ou som gravados em arquivos eletrônicos podem constar da ata.', 'CPC, art. 384, parágrafo único'],
      ] },
      { t: 'Quem faz', i: [
        ['Lavrar ata notarial é função exclusiva do tabelião de notas.', 'Lei 8.935/1994, art. 7º, III'],
        ['Compete ao notário formalizar juridicamente a vontade das partes e autenticar fatos.', 'Lei 8.935/1994, art. 6º'],
      ] },
      { t: 'O que a ata faz e não faz', i: [
        'Registra o que o tabelião percebe e verifica no momento, com fé pública. Conteúdo da internet pode mudar depois; a ata guarda o que existia naquele dia e hora.',
        ['O tabelião autentica fatos que verifica; não julga quem tem razão, não interpreta o conteúdo e não atesta o que não verificou.', 'Lei 8.935/1994, art. 6º, III'],
      ] },
      { t: 'Dicas para pedir', i: [
        'Leve o aparelho com a conversa ou o endereço do site, sem apagar nada.',
        ['Para fatos em outro lugar (um imóvel, por exemplo), informe o endereço e combine a diligência. O tabelião pode realizar as gestões e diligências necessárias ao preparo do ato.', 'Lei 8.935/1994, art. 7º, § 1º'],
      ] },
    ],
    base: 'Código de Processo Civil (Lei nº 13.105/2015), art. 384 · Lei nº 8.935/1994 (Lei dos Cartórios), arts. 6º e 7º.',
  },
}

const genitor = [
  ['Nome completo'],
  ['CPF', 'RG'],
  ['Estado civil', 'Profissão'],
  ['Endereço'],
]

const emancipacao = {
  area: 'Tabelionato de notas · Dados para escritura',
  titulo: 'Emancipação',
  texto: 'Para maiores de 16 anos, com os pais. A emancipação por escritura pública dispensa homologação do juiz.',
  secoes: [
    { t: 'Menor a ser emancipado(a)', itens: [
      ['Nome completo'],
      ['Data de nascimento', 'CPF', 'RG'],
      ['Cartório, livro, folha e termo do registro de nascimento'],
      [['Endereço completo', 2], 'Telefone / WhatsApp'],
    ] },
    { t: 'Quem concede a emancipação', nota: 'Ambos devem comparecer', itens: [
      { cols: [['Pai', genitor], ['Mãe', genitor]] },
    ] },
    { t: 'Situação dos pais', itens: [
      [g('Marque', 'Ambos os pais vivos e presentes', 'Um dos pais falecido ou ausente (levar certidão de óbito ou prova)', 'Menor sob tutela (o pedido segue pela Justiça)')],
      ['Motivo da emancipação (opcional)'],
    ] },
  ],
  assinaturas: ['Local e data', 'Assinatura do pai', 'Assinatura da mãe'],
  lei: {
    intro: 'Quem pode ser emancipado, quem concede, em que forma e quando a emancipação passa a valer.',
    cards: [
      { t: 'Quem pode e como', i: [
        ['A menoridade cessa por concessão dos pais, ou de um deles na falta do outro, por instrumento público, sem homologação judicial, se o menor tiver 16 anos completos.', 'CC, art. 5º, parágrafo único, I'],
        ['Se o menor estiver sob tutela, a emancipação depende de sentença do juiz, ouvido o tutor.', 'CC, art. 5º, parágrafo único, I'],
      ] },
      { t: 'O que muda', i: [
        ['Cessa a incapacidade do menor para os atos da vida civil.', 'CC, art. 5º, parágrafo único'],
        ['Outros casos de fim da incapacidade: casamento, emprego público efetivo, curso superior concluído, ou economia própria por estabelecimento ou emprego, a partir de 16 anos.', 'CC, art. 5º, parágrafo único, II a V'],
      ] },
      { t: 'Quando vale', largo: true, i: [
        ['A emancipação só produz efeito depois de registrada.', 'LRP, art. 91, parágrafo único'],
        ['O registro é feito em livro especial no cartório do 1º Ofício da comarca, mediante apresentação da escritura.', 'LRP, arts. 89 e 90'],
        'A escritura é lavrada aqui; confirme com o cartório como o registro será feito, porque Foz do Jordão pertence à Comarca de Guarapuava.',
      ] },
      { t: 'O que levar', i: [
        'Certidão de nascimento do menor, RG e CPF dos pais e do menor, e comprovante de residência.',
        'Os pais comparecem pessoalmente com documentos originais. O valor segue a Tabela de custas do TJPR.',
      ] },
    ],
    base: 'Código Civil, arts. 5º e 9º, II · Lei nº 6.015/1973, arts. 29, IV, 89, 90 e 91.',
  },
}

// Endereço de cada ficha: /servicos/<chave>. O divórcio tem duas partes na mesma página.
export const fichas = {
  'registro-de-nascimento': [nascimento],
  'habilitacao-e-casamento': [casamento],
  'registro-de-obito': [obito],
  'reconhecimento-de-paternidade': [paternidade],
  'averbacao-e-retificacoes': [averbacao],
  'certidao-e-2-via': [certidao],
  'interdicoes-e-tutelas': [interdicao],
  'firma-e-autenticacao': [firma],
  'procuracoes': [procuracao],
  'compra-venda-e-doacao': [compraVenda],
  'uniao-estavel-e-pacto': [uniaoEstavel],
  'divorcio-e-inventario': [divorcio, inventario],
  'ata-notarial': [ata],
  'emancipacao': [emancipacao],
}

