export const site = {
  telefone: '(42) 99806-7505',
  tel: 'tel:+5542998067505',
  email: 'cartoriofozdojordao@hotmail.com',
  rua: 'Rua Gov. Prof Parigot de Souza, 44',
  bairro: 'Centro',
  cidade: 'Foz do Jordão, PR',
  cep: '85145-000',
  mapa: 'R. Prof. Parigot de Souza, 41 - Centro, Foz do Jordão - PR, 85145-000',
  horario: '8h30 às 11h30 e 13h às 17h',
  cns: '08.330-3',
  cnpj: '06.208.455/0001-83',
  tjpr: 'https://www.tjpr.jus.br',
}

export const endereco = `${site.rua}, ${site.bairro}, ${site.cidade}, ${site.cep}`

export const nav = [
  ['Início', '/'],
  ['Serviços', '/servicos/casamento-civil'],
  ['O Cartório', '/o-cartorio'],
  ['Tabela de custas', '/tabela-de-custas'],
  ['Dúvidas', '/duvidas'],
  ['Contato', '/contato'],
]

export const rodape = [
  ['Links úteis', [
    ['Certidões online (Registro Civil)', 'https://registrocivil.org.br'],
    ['Tabela de custas do TJPR', '/tabela-de-custas'],
    ['Justiça Aberta (CNJ)', 'https://www.cnj.jus.br/corregedoria/justica_aberta/'],
    ['Dúvidas frequentes', '/duvidas'],
  ]],
  ['LGPD e privacidade', [
    ['Política de privacidade', '#'],
    ['Exercício de direitos do titular', '#'],
    ['Fale com o encarregado de dados', '/contato'],
    ['Código de ética', '#'],
  ]],
  ['Atendimento', [
    ['Segunda a sexta'],
    [site.horario],
    null,
    ['Canal de ouvidoria', '/contato'],
    ['Pesquisa de satisfação', '#'],
  ]],
]

export function enviarPorEmail(evento, assunto) {
  evento.preventDefault()
  const corpo = [...new FormData(evento.currentTarget)]
    .filter(([campo]) => campo !== 'lgpd')
    .map(([campo, valor]) => `${campo}: ${valor}`)
    .join('\n')
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`
}
