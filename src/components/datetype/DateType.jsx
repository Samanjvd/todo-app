import React from 'react'

export default function DateType({currentPlan, onChangePlan}) {


  return (
    <div className="navigation">
        <span className={`button-navigation ${currentPlan==='annually' ? 'right-side':''}`}  ></span>
        <span className={`text-navigation monthly ${currentPlan==='monthly' ? 'plan-color':''}`} onClick={()=> onChangePlan('monthly')}  >monthly</span>
        <span className={`text-navigation monthly ${currentPlan==='annually' ? 'plan-color':''}`} onClick={()=> onChangePlan('annually')}>Annually</span>
      </div>
  )
}
