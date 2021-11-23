export interface relatorio {
  candidato: string;
  nome: string;
  data_nasc: string;
  funcao_atual: string;
  vice_cpf: string;
  vice_nome: string;
  vice_data_nasc: string;
  vice_funcao: string;
  ano_candidatura: string;
  cargo: string;
  abrangencia: string;
  municipio?: string;
  partido_do_candidato: string;
  partido_do_candidato_sigla: string;
  partido_do_candidato_programa: string;
  partido_do_candidato_presidente: string;
  partido_do_vice: string;
  partido_do_vice_sigla: string;
  partido_do_vice_programa: string;
  partido_do_vice_presidente: string;
  pleito: string;
  data_do_pleito: string;
  num_votos: string;
  estado?: string;
  pais: string;
}
