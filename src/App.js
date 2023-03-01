import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import PersonalDetail from "./Components/Pages/Personal Detail/PersonalDetail";
import Employees from "./Components/Pages/Employees/Employees";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-detail" element={<PersonalDetail />} />
        <Route path="/employees-teams" element={<Employees />} />
        {/*<Route path="/login/*" element={<LoginLayout />} />
        <Route path="/signup/*" element={<SignupLayout />} />
        <Route path="/post-a-task" element={<PostATasker />} />
        <Route path="/how-it-works" element={<Howitwork />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/wallet/*" element={<WalletLayout />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/browse-requests/*" element={<BrowseRequestLayout heading={'Browse-Request'} />} />
        <Route path="/my-tasks/*" element={<MyTasksLayout />} />
        <Route path="/past-tasks" element={<PastTasks />} />
        <Route path="/my-proposals/*" element={<MyProposalLayout />} />
        <Route path="/my-requests" element={<MyRequest />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/category/:name/*" element={< CategoriesLayout />} />
        <Route path="/search-posts/*" element={<BrowseRequestLayout heading={'Search-Posts'} />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;