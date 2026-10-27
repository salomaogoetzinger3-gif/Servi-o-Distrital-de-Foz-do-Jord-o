// Escolhe o tipo de cada campo pelo rótulo, para que as fichas usem o teclado,
// o calendário ou a lista de opções certos sem repetir isso em fichas.js.

const digitos = (valor, max) => valor.replace(/\D/g, '').slice(0, max)

const mascaras = {
  cpf: (v) =>
    digitos(v, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'),
  cep: (v) => digitos(v, 8).replace(/(\d{5})(\d)/, '$1-$2'),
  telefone: (v) =>
    digitos(v, 11)
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2'),
  // Número único do CNJ: 0000000-00.0000.0.00.0000
  processo: (v) =>
    digitos(v, 20)
      .replace(/^(\d{7})(\d)/, '$1-$2')
      .replace(/^(\d{7}-\d{2})(\d)/, '$1.$2')
      .replace(/^(.{15})(\d)/, '$1.$2')
      .replace(/^(.{17})(\d)/, '$1.$2')
      .replace(/^(.{20})(\d)/, '$1.$2'),
  maiusculas: (v) => v.toUpperCase(),
}

export const listas = {
  parentesco: ['Cônjuge', 'Companheiro(a)', 'Filho(a)', 'Pai', 'Mãe', 'Irmão(ã)', 'Neto(a)', 'Avô(ó)', 'Tio(a)', 'Sobrinho(a)', 'Genro / Nora'],
}

const opcoes = {
  sexo: ['Feminino', 'Masculino', 'Ignorado'],
  'estado civil': ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Separado(a) judicialmente'],
  'regime de bens': ['Comunhão parcial de bens', 'Comunhão universal de bens', 'Separação convencional de bens', 'Separação obrigatória de bens', 'Participação final nos aquestos'],
}

const ano = new Date().getFullYear()

const regras = [
  [/^data e hora/, { type: 'datetime-local' }],
  [/^hora$/, { type: 'time' }],
  [/^(data\b|início da união|trânsito em julgado|até$)/, { type: 'date' }],
  [/^cpf$/, { mascara: 'cpf', inputMode: 'numeric', placeholder: '000.000.000-00' }],
  [/^cep$/, { mascara: 'cep', inputMode: 'numeric', placeholder: '00000-000' }],
  [/^telefone( \/ whatsapp)?$/, { mascara: 'telefone', type: 'tel', placeholder: '(42) 00000-0000' }],
  [/^e-mail$/, { type: 'email', placeholder: 'nome@exemplo.com' }],
  [/^número do processo$|processo nº$/, { mascara: 'processo', inputMode: 'numeric', placeholder: '0000000-00.0000.0.00.0000' }],
  [/^placa$/, { mascara: 'maiusculas', placeholder: 'ABC1D23' }],
  [/^nº da declaração de nascido vivo/, { inputMode: 'numeric' }],
  [/^(idade|quantos|quantidade|filhos em comum)/, { type: 'number', min: 0 }],
  [/^ano aproximado/, { type: 'number', min: 1890, max: ano }],
  [/\(r\$\)$/, { type: 'number', min: 0, step: 0.01, inputMode: 'decimal', placeholder: '0,00' }],
  [/^área/, { type: 'number', min: 0, step: 'any', inputMode: 'decimal' }],
  [/parentesco/, { list: 'f-parentesco' }],
]

// Devolve { opcoes } para virar <select>, ou os atributos do <input>.
export function tipoDe(rotulo) {
  const r = rotulo.toLowerCase().replace(/[\s:(]+$/, '')
  if (opcoes[r]) return { opcoes: opcoes[r] }
  if (r === 'nacionalidade') return { opcoes: nacionalidades }
  const achado = regras.find(([teste]) => teste.test(r))
  if (!achado) return {}
  const { mascara, ...atributos } = achado[1]
  if (mascara) atributos.onInput = (e) => (e.target.value = mascaras[mascara](e.target.value))
  return atributos
}

// Estados em ordem alfabética pelo nome. Os municípios de cada um (IBGE) ficam em
// public/municipios.json, já em ordem alfabética, e só são baixados quando alguém escolhe o estado.
export const estados = [
  ['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'],
  ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'],
  ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'],
  ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'],
  ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'],
  ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'],
  ['SE', 'Sergipe'], ['TO', 'Tocantins'],
]

let municipios
export const carregarMunicipios = () => (municipios ||= fetch('/municipios.json').then((r) => r.json()))

// 'estado' para escolher só o estado; 'cidade' para estado e município.
export function localDe(rotulo) {
  const r = rotulo.toLowerCase()
  if (r === 'natural do estado de') return 'estado'
  if (/^(cidade$|município d|naturalidade$|natural de$|mora na cidade de$)/.test(r)) return 'cidade'
  return null
}

const ordem = new Intl.Collator('pt-BR').compare

// Documento de identidade: cada tipo mostra os dados que aparecem nele.
// O segundo item diz o tipo do campo: orgao, uf, data, cpf, categoria, conselho, forca, maiusculas.
export const documentos = {
  RG: ['RG (Carteira de Identidade)', [
    ['Número do RG'], ['Órgão emissor', 'orgao'], ['UF', 'uf'], ['Data de expedição', 'data'],
  ]],
  CIN: ['CIN (Carteira de Identidade Nacional)', [
    ['Número (é o próprio CPF)', 'cpf'], ['Órgão emissor', 'orgao'], ['UF', 'uf'], ['Data de expedição', 'data'], ['Validade', 'data'],
  ]],
  CNH: ['CNH (Carteira de Motorista)', [
    ['Nº de registro da CNH'], ['Categoria', 'categoria'], ['Órgão emissor', 'orgao'], ['UF', 'uf'],
    ['Data de emissão', 'data'], ['Validade', 'data'], ['1ª habilitação', 'data'],
  ]],
  'Carteira profissional': ['Carteira profissional (OAB, CRM, CREA...)', [
    ['Conselho ou ordem', 'conselho'], ['Nº de inscrição'], ['UF da seccional ou regional', 'uf'], ['Data de expedição', 'data'],
  ]],
  'Identidade militar': ['Identidade militar', [
    ['Força ou corporação', 'forca'], ['Número da identidade'], ['UF (se for estadual)', 'uf'], ['Data de expedição', 'data'],
  ]],
  CRNM: ['CRNM / RNE (estrangeiro residente)', [
    ['Número do RNM', 'maiusculas'], ['Classificação (ex.: residente)'], ['Data de expedição', 'data'], ['Validade', 'data'],
  ]],
  Passaporte: ['Passaporte', [
    ['Número do passaporte', 'maiusculas'], ['País emissor'], ['Data de expedição', 'data'], ['Validade', 'data'],
  ]],
  CTPS: ['Carteira de Trabalho (CTPS)', [
    ['Número'], ['Série'], ['UF', 'uf'], ['Data de emissão', 'data'],
  ]],
  Outro: ['Outro', [
    ['Nome do documento'], ['Número'], ['Órgão emissor', 'orgao'], ['UF', 'uf'], ['Data de expedição', 'data'],
  ]],
}

// Campos que aparecem antes de escolher o tipo (e na ficha impressa em branco).
export const documentoGenerico = [['Número'], ['Órgão emissor', 'orgao'], ['UF', 'uf'], ['Data de expedição', 'data']]

export const categoriasCnh = ['ACC', 'A', 'B', 'AB', 'C', 'D', 'E', 'AC', 'AD', 'AE']

export const conselhos = [
  'CAU', 'COFECI / CRECI', 'COREN', 'CRA', 'CRBio', 'CRC', 'CREA', 'CREF', 'CREFITO', 'CRF', 'CRFa',
  'CRM', 'CRMV', 'CRN', 'CRO', 'CRP', 'CRQ', 'CRESS', 'OAB', 'Outro',
]

export const forcas = ['Corpo de Bombeiros Militar', 'Exército Brasileiro', 'Força Aérea Brasileira', 'Marinha do Brasil', 'Polícia Militar']

export const orgaos = [
  ['CBM', 'Corpo de Bombeiros Militar'],
  ['Conselho regional', 'Conselho regional (CRM, CREA, CRC...)'],
  ['DETRAN', 'Departamento Estadual de Trânsito'],
  ['DPF', 'Polícia Federal'],
  ['EB', 'Exército Brasileiro'],
  ['FAB', 'Força Aérea Brasileira'],
  ['IFP', 'Instituto Félix Pacheco'],
  ['IGP', 'Instituto-Geral de Perícias'],
  ['II', 'Instituto de Identificação'],
  ['IIRGD', 'Instituto de Identificação Ricardo Gumbleton Daunt'],
  ['MB', 'Marinha do Brasil'],
  ['MTE', 'Ministério do Trabalho e Emprego'],
  ['OAB', 'Ordem dos Advogados do Brasil'],
  ['PC', 'Polícia Civil'],
  ['PM', 'Polícia Militar'],
  ['SDS', 'Secretaria de Defesa Social'],
  ['SEJUSP', 'Secretaria de Justiça e Segurança Pública'],
  ['SESP', 'Secretaria de Estado da Segurança Pública'],
  ['SSP', 'Secretaria de Segurança Pública'],
  ['SSPDS', 'Secretaria da Segurança Pública e Defesa Social'],
  ['Outro', 'Outro'],
]

// Órgãos de âmbito nacional, que não têm estado.
export const orgaosFederais = ['DPF', 'EB', 'FAB', 'MB', 'MTE']

// Órgão que já vem marcado ao escolher o tipo de documento.
export const orgaoPadrao = { CNH: 'DETRAN' }

export const documentoDe = (rotulo) => /^rg\b/i.test(rotulo)

export const nacionalidades = [
  'Afegã', 'Albanesa', 'Alemã', 'Andorrana', 'Angolana', 'Antiguana', 'Apátrida', 'Argelina', 'Argentina',
  'Armênia', 'Australiana', 'Austríaca', 'Azerbaijana', 'Bahamense', 'Bangladeshiana', 'Barbadiana',
  'Bareinita', 'Belga', 'Belizenha', 'Beninense', 'Bielorrussa', 'Birmanesa', 'Boliviana', 'Bósnia',
  'Botsuanesa', 'Brasileira', 'Brasileira (naturalizada)', 'Britânica', 'Bruneana', 'Búlgara', 'Burquinense',
  'Burundiana', 'Butanesa', 'Cabo-verdiana', 'Camaronesa', 'Cambojana', 'Canadense', 'Catariana', 'Cazaque',
  'Centro-africana', 'Chadiana', 'Chilena', 'Chinesa', 'Cingapuriana', 'Cipriota', 'Colombiana', 'Comorense',
  'Congolesa (Congo)', 'Congolesa (República Democrática do Congo)', 'Costa-marfinense', 'Costa-riquenha',
  'Croata', 'Cubana', 'Dinamarquesa', 'Djibutiana', 'Dominicana (República Dominicana)', 'Dominiquense',
  'Egípcia', 'Emiradense', 'Equato-guineense', 'Equatoriana', 'Eritreia', 'Eslovaca', 'Eslovena',
  'Espanhola', 'Essuatiniana', 'Estadunidense', 'Estoniana', 'Etíope', 'Fijiana', 'Filipina', 'Finlandesa',
  'Francesa', 'Gabonesa', 'Gambiana', 'Ganesa', 'Georgiana', 'Granadina', 'Grega', 'Guatemalteca',
  'Guianense', 'Guineense (Guiné)', 'Guineense (Guiné-Bissau)', 'Haitiana', 'Hondurenha', 'Húngara',
  'Iemenita', 'Indiana', 'Indonésia', 'Iraniana', 'Iraquiana', 'Irlandesa', 'Islandesa', 'Israelense',
  'Italiana', 'Jamaicana', 'Japonesa', 'Jordaniana', 'Kiribatiana', 'Kosovar', 'Kuwaitiana', 'Laosiana',
  'Lesotiana', 'Letã', 'Libanesa', 'Liberiana', 'Líbia', 'Liechtensteinense', 'Lituana', 'Luxemburguesa',
  'Macedônia', 'Malaia', 'Malauiana', 'Maldívia', 'Malgaxe', 'Malinesa', 'Maltesa',
  'Marroquina', 'Marshallina', 'Mauriciana', 'Mauritana', 'Mexicana', 'Micronésia', 'Moçambicana',
  'Moldava', 'Monegasca', 'Mongol', 'Montenegrina', 'Namibiana', 'Nauruana', 'Neerlandesa (holandesa)',
  'Neozelandesa', 'Nepalesa', 'Nicaraguense', 'Nigeriana', 'Nigerina', 'Norte-coreana', 'Norueguesa',
  'Omanense', 'Palauense', 'Palestina', 'Panamenha', 'Papua-nova-guineense', 'Paquistanesa', 'Paraguaia',
  'Peruana', 'Polonesa', 'Portuguesa', 'Queniana', 'Quirguiz', 'Romena', 'Ruandesa', 'Russa', 'Salomônica',
  'Salvadorenha', 'Samoana', 'Santa-lucense', 'São-cristovense', 'São-marinense', 'São-tomense',
  'São-vicentina', 'Saudita', 'Seichelense', 'Senegalesa', 'Serra-leonesa', 'Sérvia', 'Síria', 'Somali',
  'Sri-lankesa', 'Sudanesa', 'Sueca', 'Suíça', 'Sul-africana', 'Sul-coreana', 'Sul-sudanesa', 'Surinamesa',
  'Tadjique', 'Tailandesa', 'Taiwanesa', 'Tanzaniana', 'Tcheca', 'Timorense', 'Togolesa', 'Tonganesa',
  'Trinitino-tobagense', 'Tunisiana', 'Turca', 'Turcomena', 'Tuvaluana', 'Ucraniana', 'Ugandense',
  'Uruguaia', 'Uzbeque', 'Vanuatuense', 'Vaticana', 'Venezuelana', 'Vietnamita', 'Zambiana', 'Zimbabuana',
].sort(ordem)

// Datas chegam como 2026-10-27; no e-mail ficam como 27/10/2026.
export function legivel(valor) {
  return String(valor).replace(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}:\d{2}))?$/, (_, a, m, d, h) => `${d}/${m}/${a}${h ? ` às ${h}` : ''}`)
}
