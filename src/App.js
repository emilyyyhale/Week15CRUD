import './App.css';
import travelListData from './Travel-List';
import TravelData from './Travel-Data';


function App() {
  const travelList = travelListData.map(travel => {
    return (
      <TravelData
        key={travel.id}
        travel={travel}
      />
    )
  })
  return (
    <div className="App">
      <div className="container">
        <h1>Have you been to this destination? Leave your review below!</h1>
        <section className="card-container">{travelList}</section>
      </div>
    </div>
  );
}

export default App;
