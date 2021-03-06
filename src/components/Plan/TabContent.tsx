/**
 * Main tab content of Plan
 * 
 */

import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import { IPlan, IViewOptions, IViewOptionsAnyOne } from '@/iplan'
import Node from '@/inode'

import { PlanStats } from './PlanStats'
import { PlanTab } from './PlanTab'

export interface TabContentProps {
  validationMessage: string,
  activeTab: string,
  viewOptions: IViewOptions,
  plan: IPlan,
  rootNode: Node,
  handleViewOptionsChange: (options: IViewOptionsAnyOne) => void,
}

export function TabContent({
  validationMessage,
  activeTab,
  viewOptions,
  plan,
  rootNode,
  handleViewOptionsChange,
}: TabContentProps) {
  if (validationMessage) {
    return (
      <div className='tab-content flex-grow-1 d-flex overflow-hidden'>
        <div className="flex-grow-1 d-flex justify-content-center">
          <div className="alert alert-danger align-self-center">{validationMessage}</div>
        </div>
      </div>
    )
  }

  const { viewMode, orientation } = viewOptions

  return (
    <div className='tab-content flex-grow-1 d-flex overflow-hidden'>
      <div className={classNames('tab-pane flex-grow-1 overflow-hidden', {
        'show active d-flex': activeTab === 'plan',
        })}
      >
      <div className={classNames(`d-flex flex-column flex-grow-1 overflow-hidden ${viewMode} ${orientation}`)}>
        <PlanStats
          viewOptions={viewOptions}
          planStats={plan.planStats}
          handleViewOptionsChange={handleViewOptionsChange}
        />
        {
          plan.content && (
            <PlanTab
              plan={plan}
              rootNode={rootNode}
              viewOptions={viewOptions}
              handleViewOptionsChange={handleViewOptionsChange}
            />
          )
        }
      </div>
    </div>
   </div>
  )
}