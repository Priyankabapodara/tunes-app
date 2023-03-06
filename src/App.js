
import './App.css';
import { NavBar } from './Components/NavBar';
import { MainContainer } from './Components/MainContainer';
import { Footer } from './Components/Footer';
import { TaylorSwift } from './Components/TaylorSwift';
import { ShawnMendes } from './Components/ShawnMendes';
import { SelenaGomez } from './Components/SelenaGomez';
import { TheWeeknd } from './Components/TheWeeknd';
import { RewindAlb } from './Components/RewindAlb';
import { TopEng } from './Components/TopEng';
import { TopHin } from './Components/TopHin';
import { TopHin90sAlbum } from './Components/TopHin90sAlbum';
import {Routes, Route} from 'react-router-dom';
import { SearchedSong } from './Components/SearchedSong';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<MainContainer />} />
        <Route path='/TaylorSwift' element={<TaylorSwift />} />
        <Route path='/ShawnMendes' element={<ShawnMendes />} />
        <Route path='/SelenaGomez' element={<SelenaGomez />} />
        <Route path='/TheWeeknd' element={<TheWeeknd />} />
        <Route path='/Rewind' element={<RewindAlb />} />
        <Route path='/TopEnglish' element={<TopEng />} />
        <Route path='/TopHindi' element={<TopHin />} />
        <Route path='/TopHindi90s' element={<TopHin90sAlbum />} />
        <Route path='/Searched' element={<SearchedSong />} />
      </Routes>
      {/*<TopHin90sAlbum />
      <MainContainer />
      <TopHin />
      <TopEng />
      <RewindAlb />
      <TheWeeknd />
      <SelenaGomez />
      <ShawnMendes />
      <TaylorSwift/>*/}
      <div className='background'></div>
    </div>
  );
}

export default App;
