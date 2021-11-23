// import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function deleteThis(table, index, ...args) {
  try {
    const response = await axios.delete('/' + table, {
      data: {
        tableName: table,
        pk: args,
      },
    });
    var deleteButton = document.getElementsByClassName(index + 'dclass')[0];
    var pDeleteButton = deleteButton.parentElement;
    var ppDeleteButton = pDeleteButton.parentElement;
    var pppDeleteButton = ppDeleteButton.parentElement;
    pppDeleteButton.removeChild(ppDeleteButton);
  } catch (e) {
    console.error(e);
    throw new Error('Erro ao deletar objeto');
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getRelatorio(cargo, abrangencia, ano, pais, estado, municipio) {
  try {
    const url = await axios.getUri({
      url: 'http://localhost:3000/relatorio',
      params: {
        cargo: encodeURIComponent(cargo),
        abrangencia: encodeURIComponent(abrangencia),
        ano: encodeURIComponent(ano),
        pais: encodeURIComponent(pais),
        estado: estado ? encodeURIComponent(estado) : undefined,
        municipio: estado && municipio ? encodeURIComponent(municipio) : undefined,
      },
    });
    window.location.href = url;
  } catch (e) {
    console.error(e);
    throw new Error('Erro ao gerar relatorio');
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function order(orderBy) {
  try {
    const url = await axios.getUri({
      url: 'http://localhost:3000/order',
      params: {
        orderBy,
      },
    });
    window.location.href = url;
  } catch (e) {
    console.error(e);
    throw new Error('Erro ao ordenar');
  }
}