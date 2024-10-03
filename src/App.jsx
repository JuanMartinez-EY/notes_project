import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalISVisible] = useState(false);

  function showModalHandler() {
    setModalISVisible(true);
  }

  function hideModalHandler() {
    setModalISVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
