import data from './data/messages.json'

const localOrRemote = (data) => {
  for (const msg of data) {
    msg.sender === 'Estragon' ? msg.role = 'remote': msg.role = 'local';
  } return data;
};

const defaultColor = (data) => {
  for (const msg of data) {
    msg.role === 'remote' ? msg.color = 'blue': msg.color = 'green';
  } return data;
};

export const dataUpdated = defaultColor(localOrRemote(data));