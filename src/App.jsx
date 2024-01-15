import Main from "./components/Main";
import { CommentsProvider } from "./context/CommentsContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <CommentsProvider>
        <Main />
      </CommentsProvider>
    </>
  );
}

export default App;
