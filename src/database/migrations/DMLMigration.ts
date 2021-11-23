import { DatabaseService } from '../database.service';
import { Migration } from './Migration';

export class DMLMigration implements Migration {
  MigrationName = 'DMLMigration01';

  async up(databaseService: DatabaseService): Promise<void> {
    databaseService.executeQuery(`
      -- Cargos
      INSERT INTO cargo VALUES('Presidente', 'Federal');
      INSERT INTO cargo VALUES('Deputado Federal', 'Federal');
      INSERT INTO cargo VALUES('Governador', 'Estadual');
      INSERT INTO cargo VALUES('Senador', 'Estadual');
      INSERT INTO cargo VALUES('Deputado Estadual', 'Estadual');
      INSERT INTO cargo VALUES('Prefeito', 'Municipal');
      INSERT INTO cargo VALUES('Vereador', 'Municipal');

      -- Candidatos
      INSERT INTO pessoa_fisica VALUES('5302054755','Tiago da Silva','1957/03/31','Candidato');
      INSERT INTO pessoa_fisica VALUES('5554576687','Lucas Tenório','1951/08/30','Candidato');
      INSERT INTO pessoa_fisica VALUES('9108429029','Rebeca Barbosa','1976/05/29','Candidato');
      INSERT INTO pessoa_fisica VALUES('4213523293','Sophia Barros','1971/05/10','Candidato');
      INSERT INTO pessoa_fisica VALUES('8805153936','Laura Araujo','1966/02/04','Candidato');
      INSERT INTO pessoa_fisica VALUES('1023347967','Sarah Almeida','1967/07/15','Candidato');
      INSERT INTO pessoa_fisica VALUES('5062486560','Isabelle Carvalho','1961/12/29','Candidato');
      INSERT INTO pessoa_fisica VALUES('6638230201','Caio Alves','1960/12/02','Candidato');
      INSERT INTO pessoa_fisica VALUES('6000118959','Rodrigo Rodrigues','1998/04/19','Candidato');
      INSERT INTO pessoa_fisica VALUES('3474773042','Isabela Pinto','1978/04/16','Candidato');
      INSERT INTO pessoa_fisica VALUES('7454705480','Marcos Melo','1946/08/27','Candidato');
      INSERT INTO pessoa_fisica VALUES('7011228287','Eduardo Dias','1962/02/11','Candidato');
      INSERT INTO pessoa_fisica VALUES('5906686639','Manuela Castro','1980/10/16','Candidato');
      INSERT INTO pessoa_fisica VALUES('7103645005','Larissa Santos','1968/04/30','Candidato');
      INSERT INTO pessoa_fisica VALUES('5585272302','Carolina Ribeiro','1987/06/18','Candidato');
      INSERT INTO pessoa_fisica VALUES('2329472026','Giovanna Melo','1999/10/27','Candidato');
      INSERT INTO pessoa_fisica VALUES('2241632363','Tomás Almeida','1960/05/25','Candidato');
      INSERT INTO pessoa_fisica VALUES('3522715956','Mariana Sousa','1989/08/12','Candidato');
      INSERT INTO pessoa_fisica VALUES('1640656326','Ana Silva','1990/09/28','Candidato');
      INSERT INTO pessoa_fisica VALUES('8984683514','Nicolas Martins','1968/04/22','Candidato');
      INSERT INTO pessoa_fisica VALUES('7765150093','Alice Cavalcanti','1963/03/21','Candidato');
      INSERT INTO pessoa_fisica VALUES('5550580108','Tiago Ribeiro','1983/12/15','Candidato');
      INSERT INTO pessoa_fisica VALUES('9767332713','José Goncalves','1955/06/27','Candidato');
      INSERT INTO pessoa_fisica VALUES('2479482415','Lara Azevedo','1960/01/12','Candidato');
      INSERT INTO pessoa_fisica VALUES('9159244950','Fábio Cunha','2000/08/16','Candidato');
      INSERT INTO pessoa_fisica VALUES('5132410077','Luiz Melo','2001/02/06','Candidato');
      INSERT INTO pessoa_fisica VALUES('5180117682','Ryan Correia','1962/11/13','Candidato');
      INSERT INTO pessoa_fisica VALUES('2194029666','Sasha Cardoso','1985/05/20','Candidato');
      INSERT INTO pessoa_fisica VALUES('5449375882','Vitor Barbosa','1975/04/22','Candidato');
      INSERT INTO pessoa_fisica VALUES('9240406214','Pedro Ferreira','1994/07/11','Candidato');
      INSERT INTO pessoa_fisica VALUES('5330031176','Manuela Carvalho','2000/08/11','Candidato');
      INSERT INTO pessoa_fisica VALUES('9751430638','Paulo Almeida','1962/11/12','Candidato');
      INSERT INTO pessoa_fisica VALUES('4794982902','Fernando Reis','1971/06/20','Candidato');
      INSERT INTO pessoa_fisica VALUES('4438460206','Fabiano Junqueira','1951/11/27','Candidato');
      INSERT INTO pessoa_fisica VALUES('3964953935','Thaís Cavalcanti','1995/06/29','Candidato');
      INSERT INTO pessoa_fisica VALUES('3600136838','Otávio Almeida','1969/09/30','Candidato');
      INSERT INTO pessoa_fisica VALUES('4461808173','Amanda Gomes','1992/01/25','Candidato');
      INSERT INTO pessoa_fisica VALUES('8027440496','Kauan Rocha','1988/12/28','Candidato');
      INSERT INTO pessoa_fisica VALUES('9238367044','Wladimir Valente','1964/07/07','Candidato');
      INSERT INTO pessoa_fisica VALUES('9461927137','José Costa','1966/03/11','Candidato');
      INSERT INTO pessoa_fisica VALUES('1502213538','Livia Oliveira','1973/02/20','Candidato');
      INSERT INTO pessoa_fisica VALUES('6693072524','Melissa Lima','2000/12/06','Candidato');
      INSERT INTO pessoa_fisica VALUES('6473155424','Kauã Cardoso','1952/08/31','Candidato');
      INSERT INTO pessoa_fisica VALUES('6408900178','Gustavo Alves','1984/08/03','Candidato');
      INSERT INTO pessoa_fisica VALUES('3796717530','Leonor Sousa','1950/05/12','Candidato');
      INSERT INTO pessoa_fisica VALUES('2058427727','Marcelo Suzart','1964/07/12','Candidato');
      INSERT INTO pessoa_fisica VALUES('7738372204','Katlen Costa','1997/11/23','Candidato');
      INSERT INTO pessoa_fisica VALUES('5038349893','Geraldo Albuquerque','1972/03/05','Candidato');
      INSERT INTO pessoa_fisica VALUES('4581143688','João Prado','1950/05/22','Candidato');
      INSERT INTO pessoa_fisica VALUES('8379028531','Danilo Araujo','1977/09/22','Candidato');
      INSERT INTO pessoa_fisica VALUES('7740759546','Diogo Mattos','1986/10/14','Candidato');
      INSERT INTO pessoa_fisica VALUES('6127732514','Cléber Henrique','1992/04/18','Candidato');
      INSERT INTO pessoa_fisica VALUES('9299203440','William Junqueira','1984/05/20','Candidato');
      INSERT INTO pessoa_fisica VALUES('5570065768','Poliana Félix','1980/07/04','Candidato');
      INSERT INTO pessoa_fisica VALUES('3226131400','Rogério Pereira','1967/02/20','Candidato');
      INSERT INTO pessoa_fisica VALUES('3051731706','Flávia Muniz','1965/09/17','Candidato');
      INSERT INTO pessoa_fisica VALUES('6129675003','Luana Martins','1998/12/12','Candidato');
      INSERT INTO pessoa_fisica VALUES('3914431105','Teobaldo Medeiros','1993/01/22','Candidato');
      INSERT INTO pessoa_fisica VALUES('4794287607','Raíssa Oliveira','1956/10/22','Candidato');
      INSERT INTO pessoa_fisica VALUES('1543105807','Maurício Filho','1973/05/09','Candidato');
      INSERT INTO pessoa_fisica VALUES('9386319500','Valdir Andreguetto','1961/05/30','Candidato');
      INSERT INTO pessoa_fisica VALUES('6725142605','Moacir da Silva','1956/10/23','Candidato');
      INSERT INTO pessoa_fisica VALUES('7200328707','Joana de Sousa','1980/02/25','Candidato');
      INSERT INTO pessoa_fisica VALUES('1656097400','Valéria Moraes','1957/03/08','Candidato');
      INSERT INTO pessoa_fisica VALUES('0046428500','Kevin Silva','1964/12/27','Candidato');
      INSERT INTO pessoa_fisica VALUES('9660911300','Yasmin Lima','1973/11/28','Candidato');
      INSERT INTO pessoa_fisica VALUES('9783395904','Péricles Junior','1994/12/23','Candidato');
      INSERT INTO pessoa_fisica VALUES('0452053404','Carlos Junqueira','1994/05/30','Candidato');
      INSERT INTO pessoa_fisica VALUES('9921783700','Sandra Conceição','1963/12/14','Candidato');
      INSERT INTO pessoa_fisica VALUES('0978944003','Luís William','1972/06/01','Candidato');
      INSERT INTO pessoa_fisica VALUES('9967301406','Letícia Pereira','1966/11/19','Candidato');
      INSERT INTO pessoa_fisica VALUES('4305702509','Izabella Costa','1998/07/04','Candidato');
      INSERT INTO pessoa_fisica VALUES('0324674902','Wellington Minussi','1964/06/17','Candidato');

      -- Doadores
      INSERT INTO pessoa_fisica VALUES('4023033408','Julieta Pinto','1982/08/23 12:34:00','Doador');
      INSERT INTO pessoa_fisica VALUES('4023033408','Julieta Pinto','1982/08/30 09:22:00','Doador');
      INSERT INTO pessoa_fisica VALUES('2346293781','Antônio Barros','1980/09/23 17:32:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3929608640','Lavinia Rodrigues','1979/05/03 07:12:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3790366126','Gabriel Melo','1999/10/17 16:20:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3825776197','Leonardo Dias','1981/12/24 21:20:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3088853590','Estevan Cunha','1991/11/17 09:13:00','Doador');
      INSERT INTO pessoa_fisica VALUES('7922776203','Martim Barros','1954/05/20 16:12:00','Doador');
      INSERT INTO pessoa_fisica VALUES('8005893879','Igor Carvalho','1954/09/14 15:14:00','Doador');
      INSERT INTO pessoa_fisica VALUES('4282883261','Lílian Pereira','1984/02/27 20:20:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3372152085','Bianca Fernandes','1989/05/25 19:08:00','Doador');
      INSERT INTO pessoa_fisica VALUES('7246300094','Rafael Marcon','1977/05/03 19:17:00','Doador');
      INSERT INTO pessoa_fisica VALUES('8612914437','Mateus Souza','1961/06/24 10:13:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3123582728','Vitória da Silva','1998/01/08 13:21:00','Doador');
      INSERT INTO pessoa_fisica VALUES('2041282997','Bruno Ribeiro','1967/10/12 17:09:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3051374644','Gabriela Santos','1975/10/02 18:16:00','Doador');
      INSERT INTO pessoa_fisica VALUES('6088536663','Vinícius Azevedo','1970/09/08 15:55:00','Doador');
      INSERT INTO pessoa_fisica VALUES('4641419840','Aline Moraes','1957/11/25 14:18:00','Doador');
      INSERT INTO pessoa_fisica VALUES('6513182817','Lavinia Martins','1966/07/07 14:14:00','Doador');
      INSERT INTO pessoa_fisica VALUES('4115977160','Laura Oliveira','1972/07/26 07:19:00','Doador');
      INSERT INTO pessoa_fisica VALUES('3879786884','Ronaldinho Gaúcho','1991/09/29 22:07:00','Doador');
      INSERT INTO pessoa_fisica VALUES('5975109954','Gabrielly Costa','2002/05/20 10:44:00','Doador');
      INSERT INTO pessoa_fisica VALUES('4618190698','Vitória Maria','1981/04/12 09:13:00','Doador');
      INSERT INTO pessoa_fisica VALUES('9572859408','Pedro Sierra','1992/10/03 12:34:00','Doador');
      INSERT INTO pessoa_fisica VALUES('2448265379','Fernando Diniz','1968/01/24 10:46:00','Doador');

      -- Apoiadores
      INSERT INTO pessoa_fisica VALUES('1027090876','Julia Alves','1992/05/28 21:03:00','Apoiador');
      INSERT INTO pessoa_fisica VALUES('3369576943','Luana Souza','1960/08/04 23:19:00','Apoiador');
      INSERT INTO pessoa_fisica VALUES('3506693110','Juliana Freire','1985/02/24 00:08:24','Apoiador');
      INSERT INTO pessoa_fisica VALUES('7765463081','Rubens Inácio','1983/05/06 20:17:21','Apoiador');
      INSERT INTO pessoa_fisica VALUES('7407926836','Lara Cunha','1954/04/07 19:12:00','Apoiador');
      INSERT INTO pessoa_fisica VALUES('7087836799','Eduardo Paziani','1972/10/02 18:03:00','Apoiador');
      INSERT INTO pessoa_fisica VALUES('6144491613','Sofia Castro','1978/11/08 10:12:20','Apoiador');
      INSERT INTO pessoa_fisica VALUES('1430960249','Neiva Vieira','1958/08/21 13:12:20','Apoiador');
      INSERT INTO pessoa_fisica VALUES('8434130580','Felipe Cardoso','1963/10/03 02:30:40','Apoiador');
      INSERT INTO pessoa_fisica VALUES('9074100257','Giovane de Sá','1956/01/08 20:19:30','Apoiador');
      INSERT INTO pessoa_fisica VALUES('4221326375','Rubens Barrichello','1958/01/28 15:20:03','Apoiador');
      INSERT INTO pessoa_fisica VALUES('2259906777','Iara Albuquerque','1999/07/30 20:19:03','Apoiador');
      INSERT INTO pessoa_fisica VALUES('2162953848','Humberto Acessorio','1958/11/11 13:11:14','Apoiador');
      INSERT INTO pessoa_fisica VALUES('2144102579','Larissa Pinto','1951/08/28 03:14:15','Apoiador');
      INSERT INTO pessoa_fisica VALUES('9265800657','Emilly Lima','1966/07/19 10:15:21','Apoiador');
      INSERT INTO pessoa_fisica VALUES('5445837109','Neymar Jr','1992/02/05 20:19:09','Apoiador');
      INSERT INTO pessoa_fisica VALUES('4516254665','Ágatha Barbosa','1966/12/15 15:40:20','Apoiador');
      INSERT INTO pessoa_fisica VALUES('6512100755','Paulo Moraes','1979/07/21 07:08:09','Apoiador');
      INSERT INTO pessoa_fisica VALUES('4058751547','Gustavo Paniago','1980/12/26 22:40:30','Apoiador');
      INSERT INTO pessoa_fisica VALUES('6639837393','Selma Silva','1998/10/29 24:50:00','Apoiador');
      INSERT INTO pessoa_fisica VALUES('7553383752','Tiago Leifert','1949/04/07 19:34:03','Apoiador');
      INSERT INTO pessoa_fisica VALUES('6110126191','Matilde Pereira','1959/04/06 14:01:31','Apoiador');
      INSERT INTO pessoa_fisica VALUES('2728374057','Rodolfo Ferreira','1970/11/10 21:06:15','Apoiador');
      INSERT INTO pessoa_fisica VALUES('2194803592','Kléber Passos','1980/08/25 15:20:00','Apoiador');
      INSERT INTO pessoa_fisica VALUES('2623309013','Luan Cunha','1984/06/09 19:24:08','Apoiador');
      INSERT INTO pessoa_fisica VALUES('5844351217','Velma Santana','1972/03/13 06:10:02','Apoiador');

      -- Pleitos
      INSERT INTO pleito VALUES(1,'1989/11/15');
      INSERT INTO pleito VALUES(2,'1989/11/15');
      INSERT INTO pleito VALUES(3,'1992/10/03');
      INSERT INTO pleito VALUES(4,'1994/10/03');
      INSERT INTO pleito VALUES(5,'1996/10/03');
      INSERT INTO pleito VALUES(6,'1998/10/04');
      INSERT INTO pleito VALUES(7,'2000/10/01');
      INSERT INTO pleito VALUES(8,'2002/10/06');
      INSERT INTO pleito VALUES(9,'2004/10/03');
      INSERT INTO pleito VALUES(10,'2006/10/01');
      INSERT INTO pleito VALUES(11,'2008/10/05');
      INSERT INTO pleito VALUES(12,'2010/10/03');
      INSERT INTO pleito VALUES(13,'2012/10/07');
      INSERT INTO pleito VALUES(14,'2014/10/05');
      INSERT INTO pleito VALUES(15,'2016/10/02');
      INSERT INTO pleito VALUES(16,'2018/10/07');

      -- Programas de Partidos
      INSERT INTO programa_partido VALUES(1111,'Título 1','Autor Desconhecido 1','1989/01/01','blábláblá');
      INSERT INTO programa_partido VALUES(2222,'Título 2','Autor Desconhecido 2','1989/01/01','Pipipipi');
      INSERT INTO programa_partido VALUES(3333,'Título 3','Autor Desconhecido 3','1989/01/01','Pópópópó');
      INSERT INTO programa_partido VALUES(4444,'Título 4','Autor Desconhecido 4','1989/01/01','Lorem Ipsum');
      INSERT INTO programa_partido VALUES(5555,'Título 5','Autor Desconhecido 5','1989/01/01','Oi, sou uma descrição');

      -- Partidos
      INSERT INTO partido VALUES('Partido 1','P1',1111,'Zé Pilantra');
      INSERT INTO partido VALUES('Partido 2','P2',2222,'João Ladrão');
      INSERT INTO partido VALUES('Partido 3','P3',3333,'Senhor Corrupto');
      INSERT INTO partido VALUES('Partido 4','P4',4444,'Procurado da Silva');
      INSERT INTO partido VALUES('Partido 5','P5',5555,'Maria Roubalheira');

      -- Processos Judiciais
      INSERT INTO processo_judicial VALUES(1,'1023347967','2000/05/24',TRUE);
      INSERT INTO processo_judicial VALUES(2,'6000118959','2012/10/11',TRUE);
      INSERT INTO processo_judicial VALUES(3,'2241632363','1990/01/01',FALSE);
      INSERT INTO processo_judicial VALUES(4,'1640656326','2018/03/20',TRUE);
      INSERT INTO processo_judicial VALUES(5,'1640656326','2018/03/20',FALSE);
      INSERT INTO processo_judicial VALUES(6,'5449375882','1990/02/03',TRUE);
      INSERT INTO processo_judicial VALUES(7,'5449375882','2000/05/18',FALSE);
      INSERT INTO processo_judicial VALUES(8,'5449375882','2010/10/02',TRUE);
      INSERT INTO processo_judicial VALUES(9,'4438460206','2007/11/17',FALSE);
      INSERT INTO processo_judicial VALUES(10,'6473155424','1991/08/30',FALSE);
      INSERT INTO processo_judicial VALUES(11,'6473155424',null,FALSE);
      INSERT INTO processo_judicial VALUES(12,'5038349893','2000/03/31',FALSE);
      INSERT INTO processo_judicial VALUES(13,'5038349893','2000/03/31',FALSE);
      INSERT INTO processo_judicial VALUES(14,'5038349893','2005/05/03',TRUE);
      INSERT INTO processo_judicial VALUES(15,'5038349893','2005/09/05',TRUE);
      INSERT INTO processo_judicial VALUES(16,'8379028531',null,FALSE);
      INSERT INTO processo_judicial VALUES(17,'5180117682','2003/07/01',TRUE);
      INSERT INTO processo_judicial VALUES(18,'5180117682','2006/03/21',FALSE);
      INSERT INTO processo_judicial VALUES(19,'2194029666',null,TRUE);
      INSERT INTO processo_judicial VALUES(20,'2194029666',null,TRUE);
      INSERT INTO processo_judicial VALUES(21,'3796717530','1999/12/23',TRUE);
      INSERT INTO processo_judicial VALUES(22,'7738372204','2018/03/15',TRUE);
      INSERT INTO processo_judicial VALUES(23,'4115977160','2009/10/19',FALSE);
      INSERT INTO processo_judicial VALUES(24,'7765463081','2010/03/18',TRUE);
      INSERT INTO processo_judicial VALUES(25,'7087836799','2001/04/02',FALSE);

      -- Candidaturas
      ---- Presidente
      INSERT INTO candidatura VALUES('4794982902',2010,'Partido 3','P3','2058427727','Partido 3','P3','Presidente','Federal',12,27000000,null,null,'Brasil');
      INSERT INTO candidatura VALUES('9108429029',2010,'Partido 1','P1','4213523293','Partido 1','P1','Presidente','Federal',12,30000000,null,null,'Brasil');
      INSERT INTO candidatura VALUES('6638230201',2010,'Partido 2','P2','3964953935','Partido 5','P5','Presidente','Federal',12,900000,null,null,'Brasil');

      ---- Governador
      INSERT INTO candidatura VALUES('5554576687',2010,'Partido 5','P5','8805153936','Partido 1','P1','Governador','Estadual',12,8884218,null,'São Paulo','Brasil');
      INSERT INTO candidatura VALUES('5062486560',2010,'Partido 3','P3','3474773042','Partido 3','P3','Governador','Estadual',12,2720142,null,'São Paulo','Brasil');
      INSERT INTO candidatura VALUES('7454705480',2010,'Partido 1','P1','7011228287','Partido 1','P1','Governador','Estadual',12,7700129,null,'Rio de Janeiro','Brasil');
      INSERT INTO candidatura VALUES('5906686639',2010,'Partido 4','P4','7103645005','Partido 4','P4','Governador','Estadual',12,5080687,null,'Rio de Janeiro','Brasil');
      INSERT INTO candidatura VALUES('5585272302',2010,'Partido 2','P2','2329472026','Partido 4','P4','Governador','Estadual',12,1647976,null,'Paraná','Brasil');
      INSERT INTO candidatura VALUES('3522715956',2010,'Partido 3','P3','8984683514','Partido 1','P1','Governador','Estadual',12,4112109,null,'Paraná','Brasil');

      ---- Senador
      INSERT INTO candidatura VALUES('5550580108',2010,'Partido 3','P3',null,null,null,'Senador','Estadual',12,3929026,null,'São Paulo','Brasil');
      INSERT INTO candidatura VALUES('9767332713',2010,'Partido 2','P2',null,null,null,'Senador','Estadual',12,6444733,null,'São Paulo','Brasil');
      INSERT INTO candidatura VALUES('2479482415',2010,'Partido 4','P4',null,null,null,'Senador','Estadual',12,6642277,null,'Mato Grosso','Brasil');
      INSERT INTO candidatura VALUES('9159244950',2010,'Partido 2','P2',null,null,null,'Senador','Estadual',12,1905034,null,'Mato Grosso','Brasil');

      ---- Deputado Federal
      INSERT INTO candidatura VALUES('5132410077',2010,'Partido 1','P1',null,null,null,'Deputado Federal','Federal',12,1787673,null,null,'Brasil');
      INSERT INTO candidatura VALUES('9240406214',2010,'Partido 2','P2',null,null,null,'Deputado Federal','Federal',12,3876229,null,null,'Brasil');
      INSERT INTO candidatura VALUES('5330031176',2010,'Partido 3','P3',null,null,null,'Deputado Federal','Federal',12,8505556,null,null,'Brasil');
      INSERT INTO candidatura VALUES('9751430638',2010,'Partido 4','P4',null,null,null,'Deputado Federal','Federal',12,8276497,null,null,'Brasil');
      INSERT INTO candidatura VALUES('3600136838',2010,'Partido 5','P5',null,null,null,'Deputado Federal','Federal',12,2061423,null,null,'Brasil');
      INSERT INTO candidatura VALUES('4461808173',2010,'Partido 1','P1',null,null,null,'Deputado Federal','Federal',12,2289313,null,null,'Brasil');
      INSERT INTO candidatura VALUES('8027440496',2010,'Partido 2','P2',null,null,null,'Deputado Federal','Federal',12,7370377,null,null,'Brasil');
      INSERT INTO candidatura VALUES('9238367044',2010,'Partido 3','P3',null,null,null,'Deputado Federal','Federal',12,1589584,null,null,'Brasil');
      INSERT INTO candidatura VALUES('9461927137',2010,'Partido 4','P4',null,null,null,'Deputado Federal','Federal',12,3892375,null,null,'Brasil');
      INSERT INTO candidatura VALUES('1502213538',2010,'Partido 5','P5',null,null,null,'Deputado Federal','Federal',12,5804697,null,null,'Brasil');

      ---- Deputado Estadual
      INSERT INTO candidatura VALUES('5302054755',2010,'Partido 3','P3',null,null,null,'Deputado Estadual','Estadual',12,739633,null,'São Paulo','Brasil');
      INSERT INTO candidatura VALUES('6693072524',2010,'Partido 4','P4',null,null,null,'Deputado Estadual','Estadual',12,1340616,null,'São Paulo','Brasil');
      INSERT INTO candidatura VALUES('6408900178',2010,'Partido 1','P1',null,null,null,'Deputado Estadual','Estadual',12,1179880,null,'Minas Gerais','Brasil');
      INSERT INTO candidatura VALUES('4581143688',2010,'Partido 5','P5',null,null,null,'Deputado Estadual','Estadual',12,1420957,null,'Minas Gerais','Brasil');
      INSERT INTO candidatura VALUES('7740759546',2010,'Partido 2','P2',null,null,null,'Deputado Estadual','Estadual',12,773034,null,'Ceará','Brasil');
      INSERT INTO candidatura VALUES('6127732514',2010,'Partido 5','P5',null,null,null,'Deputado Estadual','Estadual',12,1335151,null,'Ceará','Brasil');

      ---- Prefeito
      INSERT INTO candidatura VALUES('1023347967',2012,'Partido 5','P5','7765150093','Partido 5','P5','Prefeito','Municipal',13,548750,'Salvador','Bahia','Brasil');
      INSERT INTO candidatura VALUES('9299203440',2012,'Partido 3','P3','5570065768','Partido 3','P3','Prefeito','Municipal',13,595208,'Salvador','Bahia','Brasil');
      INSERT INTO candidatura VALUES('3226131400',2012,'Partido 1','P1','3051731706','Partido 1','P1','Prefeito','Municipal',13,89803,'São Carlos','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('6129675003',2012,'Partido 2','P2','3914431105','Partido 2','P2','Prefeito','Municipal',13,90854,'São Carlos','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('4794287607',2012,'Partido 3','P3','1543105807','Partido 3','P3','Prefeito','Municipal',13,40000,'São Carlos','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('9386319500',2012,'Partido 5','P5','6725142605','Partido 5','P5','Prefeito','Municipal',13,239700,'Ribeirão Preto','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('7200328707',2012,'Partido 4','P4','1656097400','Partido 4','P4','Prefeito','Municipal',13,248962,'Ribeirão Preto','São Paulo','Brasil');

      ---- Vereador
      INSERT INTO candidatura VALUES('1656097400',2012,'Partido 1','P1',null,null,null,'Vereador','Municipal',13,43208,'Salvador','Bahia','Brasil');
      INSERT INTO candidatura VALUES('0046428500',2012,'Partido 2','P2',null,null,null,'Vereador','Municipal',13,19101,'Salvador','Bahia','Brasil');
      INSERT INTO candidatura VALUES('9660911300',2012,'Partido 3','P3',null,null,null,'Vereador','Municipal',13,77118,'Salvador','Bahia','Brasil');
      INSERT INTO candidatura VALUES('9783395904',2012,'Partido 4','P4',null,null,null,'Vereador','Municipal',13,89764,'São Carlos','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('0452053404',2012,'Partido 5','P5',null,null,null,'Vereador','Municipal',13,19366,'São Carlos','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('9921783700',2012,'Partido 1','P1',null,null,null,'Vereador','Municipal',13,22606,'São Carlos','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('0978944003',2012,'Partido 2','P2',null,null,null,'Vereador','Municipal',13,74956,'Ribeirão Preto','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('9967301406',2012,'Partido 3','P3',null,null,null,'Vereador','Municipal',13,41030,'Ribeirão Preto','São Paulo','Brasil');
      INSERT INTO candidatura VALUES('4305702509',2012,'Partido 4','P4',null,null,null,'Vereador','Municipal',13,33823,'Ribeirão Preto','São Paulo','Brasil');

      -- Doações PJ
      INSERT INTO doacao_pj VALUES('55324860152','4794982902',2010,'Empresa 1',5000.00,'2010/09/14');
      INSERT INTO doacao_pj VALUES('87195556969','4794982902',2010,'Empresa 2',9999.00,'2010/09/20');
      INSERT INTO doacao_pj VALUES('22046057006','9386319500',2012,'Empresa 3',7250.00,'2012/08/30');
      INSERT INTO doacao_pj VALUES('68640993664','9767332713',2010,'Empresa 4',100.00,'2010/10/01');
      INSERT INTO doacao_pj VALUES('52428344129','1023347967',2012,'Empresa 5',500.50,'2012/09/22');
      INSERT INTO doacao_pj VALUES('39271932505','1023347967',2012,'Empresa 6',1000.00,'2012/09/13');
      INSERT INTO doacao_pj VALUES('89308044935','5906686639',2010,'Empresa 7',2354.39,'2010/10/02');
      INSERT INTO doacao_pj VALUES('25634917263','7454705480',2010,'Empresa 8',5000.00,'2010/08/29');
      INSERT INTO doacao_pj VALUES('15918385770','4581143688',2010,'Empresa 9',10.00,'2010/09/14');
      INSERT INTO doacao_pj VALUES('83753685287','4581143688',2010,'Empresa 10',8900.00,'2010/08/14');

      -- Doações PF
      INSERT INTO doacao_pf VALUES('3790366126','4794982902',2010,'2010/09/14',5000.00);
      INSERT INTO doacao_pf VALUES('4282883261','4794982902',2010,'2010/09/20',9999.00);
      INSERT INTO doacao_pf VALUES('3051374644','9386319500',2012,'2012/08/30',7250.00);
      INSERT INTO doacao_pf VALUES('3051374644','9767332713',2010,'2010/10/01',100.00);
      INSERT INTO doacao_pf VALUES('6088536663','1023347967',2012,'2012/09/22',500.50);
      INSERT INTO doacao_pf VALUES('6513182817','1023347967',2012,'2012/09/13',1000.00);
      INSERT INTO doacao_pf VALUES('6513182817','5906686639',2010,'2010/10/02',2354.39);
      INSERT INTO doacao_pf VALUES('2448265379','7454705480',2010,'2010/08/29',5000.00);
      INSERT INTO doacao_pf VALUES('9572859408','4581143688',2010,'2010/09/14',10.00);
      INSERT INTO doacao_pf VALUES('4618190698','4581143688',2010,'2010/08/14',8900.00);

      -- Equipes
      INSERT INTO equipe VALUES('9767332713',2010,111,'Equipe 1',300);
      INSERT INTO equipe VALUES('5330031176',2010,222,'Equipe 2',400);
      INSERT INTO equipe VALUES('8027440496',2010,333,'Equipe 3',3000);
      INSERT INTO equipe VALUES('1502213538',2010,444,'Equipe 4',100);
      INSERT INTO equipe VALUES('4581143688',2010,555,'Equipe 5',500);
      INSERT INTO equipe VALUES('9299203440',2012,666,'Equipe 6',50);
      INSERT INTO equipe VALUES('4794287607',2012,777,'Equipe 7',2459);
      INSERT INTO equipe VALUES('7200328707',2012,888,'Equipe 8',5000);
      INSERT INTO equipe VALUES('0452053404',2012,999,'Equipe 9',120);
      INSERT INTO equipe VALUES('6638230201',2010,101010,'Equipe 10',1);

      -- Apoiadores
      INSERT INTO apoiador VALUES('1027090876','9767332713',2010,111);
      INSERT INTO apoiador VALUES('3369576943','5330031176',2010,222);
      INSERT INTO apoiador VALUES('3506693110','8027440496',2010,333);
      INSERT INTO apoiador VALUES('7765463081','1502213538',2010,444);
      INSERT INTO apoiador VALUES('7407926836','4581143688',2010,555);
      INSERT INTO apoiador VALUES('7087836799','9299203440',2012,666);
      INSERT INTO apoiador VALUES('6144491613','4794287607',2012,777);
      INSERT INTO apoiador VALUES('1430960249','7200328707',2012,888);
      INSERT INTO apoiador VALUES('8434130580','0452053404',2012,999);
      INSERT INTO apoiador VALUES('9074100257','6638230201',2010,101010);
      INSERT INTO apoiador VALUES('4221326375','9767332713',2010,111);
      INSERT INTO apoiador VALUES('2259906777','5330031176',2010,222);
      INSERT INTO apoiador VALUES('2162953848','8027440496',2010,333);
      INSERT INTO apoiador VALUES('2144102579','1502213538',2010,444);
      INSERT INTO apoiador VALUES('9265800657','4581143688',2010,555);
      INSERT INTO apoiador VALUES('5445837109','9299203440',2012,666);
      INSERT INTO apoiador VALUES('4516254665','4794287607',2012,777);
      INSERT INTO apoiador VALUES('6512100755','7200328707',2012,888);
      INSERT INTO apoiador VALUES('4058751547','0452053404',2012,999);
      INSERT INTO apoiador VALUES('6639837393','6638230201',2010,101010);
      INSERT INTO apoiador VALUES('7553383752','9767332713',2010,111);
      INSERT INTO apoiador VALUES('6110126191','5330031176',2010,222);
      INSERT INTO apoiador VALUES('2728374057','8027440496',2010,333);
      INSERT INTO apoiador VALUES('2194803592','1502213538',2010,444);
      INSERT INTO apoiador VALUES('2623309013','4581143688',2010,555);
      INSERT INTO apoiador VALUES('5844351217','9299203440',2012,666);
    `);
  }

  async down(databaseService: DatabaseService): Promise<void> {
    databaseService.executeQuery(`
      -- Cargos
      DELETE FROM cargo;

      -- Candidatos
      -- Doadores
      -- Apoiadores
      DELETE FROM pessoa_fisica;

      -- Pleitos
      DELETE FROM pleito;

      -- Programas de Partidos
      DELETE FROM programa_partido;

      -- Partidos
      DELETE FROM partido;

      -- Processos Judiciais
      DELETE FROM processo_judicial;

      -- Candidaturas
      ---- Presidente
      ---- Governador
      ---- Senador
      ---- Deputado Federal
      ---- Deputado Estadual
      ---- Prefeito
      ---- Vereador
      DELETE FROM candidatura;

      -- Doações PJ
      DELETE FROM doacao_pj;

      -- Doações PF
      DELETE FROM doacao_pf;

      -- Equipes
      DELETE FROM equipe;

      -- Apoiadores
      DELETE FROM apoiadores;
    `);
  }
}
