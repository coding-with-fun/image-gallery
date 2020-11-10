import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";

export default function App() {
    return (
        <div className="app__container">
            <SearchBar />
            <ImageGallery />
        </div>
    );
}
