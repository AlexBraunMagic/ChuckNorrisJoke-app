import { JokeItem } from '../../components/JokeItem/index';
import { useDispatch, useSelector} from "react-redux";
import { generationJoke } from "../../redux/jokes/action";
import './style.css';

export function ChuckNorrisApp() {

    const dispatch = useDispatch();
    const {jokes} = useSelector((state) => state.jokes);


    function addJoke() {        
        dispatch(generationJoke());
    }



    return (
        <div className="app-wrapper">
            <div className="header">
                <button onClick={addJoke} className="header-btn">Add joke</button>
                <div>
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98c0fKeZTE-qBRk8mLiAR5sgNG8ljkRQmAym_zK_8qImINH5dpenXqWQoGFDxIus1ON0&usqp=CAU"/>
                </div>
            </div>
            <h2 className="list-title">Joke List</h2>
            <div className="joke-list">
                {jokes.map((item) => <JokeItem key={item.id} item={item}/>)}                
            </div>
        </div>
    )
}