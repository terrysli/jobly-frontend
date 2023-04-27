import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from './HomePage';
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

/**
 * RoutesList
 *
 * Props:
 * - none
 *
 * States:
 * - none
 *
 *
 * /companies/[invalid handle] -> redirect to /companies
 * /jobs/... -> redirect to /jobs
 *
 * App -> RoutesList -> [HomePage, CompanyList, CompanyDetail, JobList]
 */

function RoutesList() {
  console.log('RoutesList is running')

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/*" element={<Navigate to="/jobs" />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
