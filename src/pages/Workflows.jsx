import React from 'react'
import Bredcum from '../components/Bredcum'
import WorkflowList from '../components/WorkflowList'

const Workflows = () => {
  return (
   <>
    <div>
        <Bredcum ShowTitle={true} ShowButton={false} ShowBredcum={true} Titletext="Workflows"/>
    </div>
    <div>
      <WorkflowList />
    </div>
   </>
  )
}

export default Workflows