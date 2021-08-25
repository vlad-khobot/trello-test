import { useEffect } from "react";
import AddColumn from "./components/AddColumn";
import KanbanLists from "./components/KanbanLists";
import styled from 'styled-components'
import { GlobalStyle } from "./globalStyles";
const StyledHeader = styled.div`
display: flex;
justify-content: flex-end;
padding:10px 20px;
position:fixed;
z-index:1000;
width:100%;
top:0;

`
const AppContainer=styled.div`
 

`
function App() {
  useEffect(() => {
  }, [])
  return (

    <AppContainer>
<GlobalStyle/>
    

        <StyledHeader className="col-12 bg-dark text-light">
          <AddColumn />
        </StyledHeader>
    
      <KanbanLists />
    </AppContainer>

  );
}

export default App
