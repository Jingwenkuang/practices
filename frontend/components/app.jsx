import React from "react";
import UploadFile from './upload_file/upload_file_form'

const App = () => (
  <div>
    <UploadFile />

    <header>
      <ProtectedRoute path="/" component={NavBarContainer} />
    </header>

  </div>
);

export default App;