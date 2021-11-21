export interface candidatura {
  candidato: string;
  ano_candidatura: number;
  partido: string;
  partido_sigla: string;
  vice_cpf?: string;
  vice_partido?: string;
  vice_partido_sigla?: string;
  cargo: string;
  abrangencia?: string;
  pleito: number;
  num_votos: number;
  municipio?: string;
  estado?: string;
  pais: string;
}
