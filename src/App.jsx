import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Jobs from './pages/job'
import JobApplicationForm from './pages/apply'
import JobList from './pages/jobList'
import WhoWeAre from './pages/whoWeAre'
import WhatWeDo from './pages/whatWeDo';
import About from './pages/about';
import Publications from './pages/publications'
import Contact from './pages/contact'
import Donate from './pages/donate';
import Programs from './pages/programs';
import Stories from './pages/stories'
import History from './pages/history'

export default function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/apply' element={<JobApplicationForm/>} />
        <Route path='/vacancy' element={<JobList/>} />
        <Route path='/who' element={<WhoWeAre/>} />
        <Route path='/what' element={<WhatWeDo/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/publications' element={<Publications/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/program' element={<Programs />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </>
  )
}