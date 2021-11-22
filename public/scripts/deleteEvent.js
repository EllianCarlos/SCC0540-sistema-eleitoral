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
    console.log('ERRO MANEIRO');
  }
}