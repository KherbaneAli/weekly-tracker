//import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import _ from 'lodash'

function App() {
  const tasks = [
    {
      id: 1,
      name: 'Leetcode',
      count: 5,
      maxCount: 10,
      progressColor: 'red'
    },
    {
      id: 2,
      name: 'Run',
      count: 1,
      maxCount: 3,
      progressColor: 'green'
    }
  ]

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route path='/' exact>
          { tasks.length > 0
          ? _.map(tasks, (task) => {
            return (
              <div className='progress'>
                <div className='progress-bar' 
                style={{width : task.count / task.maxCount * 100 + '%', 
                backgroundColor: task.progressColor }}>
                <span>{task.name}</span>
                </div>
              </div> 
            )
          })
          : 'You have no tasks to show..'
          }
          <Footer />
        </Route>
        <Route path='/about' component={About} />
      </div>
    </Router>
  )
}

export default App
