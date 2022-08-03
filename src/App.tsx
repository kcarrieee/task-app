import { TaskProvider } from './context/TaskContext' // Context provider
import AddForm from "./components/AddForm/AddForm"
import Container from "./components/Container/Container"
import EditTodo from "./components/EditTodo/EditTodo"
import Header from "./components/Header/Header"
import List from "./components/List/List"



function App() {

  // General layout:
 
  return (
    <TaskProvider> 
      <div className="App">
        <Header />
        <main className="main">
          <div className="main__div">
              <AddForm />
              <Container> 
                <List/>
              </Container>
            </div>
            <div className="main__div" >
               <EditTodo/>
            </div>
          </main>
      </div>
    </TaskProvider>
  );
}

export default App;
