
import './App.css';
import Row from './Row';
import requests from './requests'
import Nav from './Nav'
import Banner from './Banner';
function App() {
  return (
    <div className="App" >

      <Nav/>
      
      <Banner title="" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row
      title="Trending Now" 
      fetchUrl={requests.fetchTrending}/>
      <Row
      title="Top Rated" 
      fetchUrl={requests.fetchTopRated}/>
      <Row
      title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies}/>
      <Row
      title="Actio Movies" 
      fetchUrl={requests.fetchActionMovies}/>
      <Row
      title="Horror Movies" 
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row
      title="Romantic Movies" 
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row
      title="Documentaries" 
      fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
