import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLoaderData } from "react-router-dom"
import React from "react";
import HomePage from "./components/pages/HomePage";
import JobsPage from "./components/pages/JobsPage";
import MainLayout from "./components/layouts/MainLayout";
import NotFoundPage from "./components/pages/NotFoundPage";
import JobPage, { jobLoader } from "./components/pages/JobPage";
import AddJobPage from "./components/pages/AddJobPage";
import EditJobPage from "./components/pages/EditJobPage";


const App = () => {
  //Add new job
  const addJob = async (newJob) => {
    // console.log(newJob)
    const res = await fetch('https://json-server-two-kappa.vercel.app/jobs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    })
  }

  //Delete job
  const deleteJob = async (jobID) => {


    const res = await fetch(`https://json-server-two-kappa.vercel.app/jobs/${jobID}`, {
      method: "DELETE",

    })
  }
  //Update job
  const updateJob = async (updatedJob) => {
    const res = await fetch(`https://json-server-two-kappa.vercel.app/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob),
    })
    return;
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
};

export default App;
