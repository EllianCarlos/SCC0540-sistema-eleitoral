export interface pessoa_fisica {
  cpf: string;
  nome: string;
  data_nasc: Date;
  funcao: 'Candidato' | 'Doador' | 'Apoiador';
}
