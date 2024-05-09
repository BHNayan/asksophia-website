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
      <WorkflowList ptext="Streamlining Your Online Activities" />
    </div>
   </>
  )
}

export default Workflows