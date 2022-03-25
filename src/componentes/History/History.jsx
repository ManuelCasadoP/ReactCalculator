function History(props) {

    const historyBuffer = props.historyArray.map(
        (item) => <p>{item}</p>
    );

    return (
        <>     
        <h1>Historial</h1>
        {historyBuffer}
        </>
    );
}

export default History
  