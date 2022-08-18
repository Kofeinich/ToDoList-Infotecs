import './App.css'
import './styles/css/reset.css'

function App() {
  return (
    <div className="app">
        <h1 className="title">
            To Do List
        </h1>
        <div className='work-space'>
            <div className="toolbar">
                <button className="button">
                    Add Task
                </button>
                <form className="search">
                    <input type="text" placeholder="Искать здесь..."/>
                    <button  type="submit">

                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
