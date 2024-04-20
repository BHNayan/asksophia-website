import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./components/Layout";
import Personalized from "./pages/Personalized";
import GlobalFeauters from "./pages/GlobalFeauters";
import Workflows from "./pages/Workflows";
import DailyNewsDigest from "./pages/Workflow-pages/DailyNewsDigest";
import WeatherUpdate from "./pages/Workflow-pages/WeatherUpdate";
import SearchAssistant from "./pages/Workflow-pages/SearchAssistant";
import SocialMediaRecap from "./pages/Workflow-pages/SocialMediaRecap";
import OnlineShopping from "./pages/Workflow-pages/OnlineShopping";
import RecipeFinder from "./pages/Workflow-pages/RecipeFinder";
import FitnessRoutine from "./pages/Workflow-pages/FitnessRoutine";
import LocalEvents from "./pages/Workflow-pages/LocalEvents";
import MovieRecommendations from "./pages/Workflow-pages/MovieRecommendations";
import BookRecommendations from "./pages/Workflow-pages/BookRecommendations";
import PodcastDiscovery from "./pages/Workflow-pages/PodcastDiscovery";
import MusicDiscovery from "./pages/Workflow-pages/MusicDiscovery";
import GameSuggestions from "./pages/Workflow-pages/GameSuggestions";
import ToDoList from "./pages/Workflow-pages/ToDoList";
import LanguageLearning from "./pages/Workflow-pages/LanguageLearning";
import TravelPlanner from "./pages/Workflow-pages/TravelPlanner";
import FactoftheDay from "./pages/Workflow-pages/FactoftheDay";
import MoneySavingTips from "./pages/Workflow-pages/MoneySavingTips";
import RelaxationGuide from "./pages/Workflow-pages/RelaxationGuide";
import TechNews from "./pages/Workflow-pages/TechNews";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NoPage />} />
            <Route index element={<Home />} />
            <Route path="personalized" element={<Personalized />} />
            <Route path="global-features" element={<GlobalFeauters />} />
            <Route path="workflows" element={<Workflows />} />
            <Route path="daily-news-digest" element={<DailyNewsDigest/>} />   
            <Route path="weather-update" element={<WeatherUpdate/>} />
            <Route path="search-assistant" element={<SearchAssistant/>} />        
            <Route path="social-media-recap" element={<SocialMediaRecap/>} />    
            <Route path="online-shopping" element={<OnlineShopping/>} />   
            <Route path="recipe-finder" element={<RecipeFinder/>} />   
            <Route path="fitness-routine" element={<FitnessRoutine />} />  
            <Route path="local-events" element={<LocalEvents/>} />  
            <Route path="recommended-movies" element={<MovieRecommendations/>} />  
            <Route path="recommended-books" element={<BookRecommendations/>} />  
            <Route path="podcast-discovery" element={<PodcastDiscovery/>} />  
            <Route path="music-discovery" element={<MusicDiscovery/>} />  
            <Route path="game-suggestions" element={<GameSuggestions/>} />  
            <Route path="to-do-list" element={<ToDoList/>} />  
            <Route path="language-learning" element={<LanguageLearning/>} />  
            <Route path="travel-planning" element={<TravelPlanner/>} />  
            <Route path="fact-of-the-day" element={<FactoftheDay/>} />  
            <Route path="money-saving-tips" element={<MoneySavingTips/>} />  
            <Route path="relaxation-techniques" element={<RelaxationGuide/>} />  
            <Route path="tech-news" element={<TechNews/>} />  

            
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
