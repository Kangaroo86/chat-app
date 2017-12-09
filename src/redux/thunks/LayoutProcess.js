export default function layoutProcess() {
  return (dispatch, getState, env) => {
    return layout()
      .then(createdUserDeck => {
        dispatch({ type: 'CREATE_USER_DECK', deckObj });
      })
      .catch(error => {
        console.error('getUserDecksProcess: Couldnt fetch createDeck: ', error);
      });
  };
}
