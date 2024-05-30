import React from 'react'
import styles from './Dashboard.module.css'
import Questions from '../Common/WeeklyQuestions/Questions'
import Goals from '../Common/WeeklyGoals/Goals'
import Rewards from '../Common/Rewards/Rewards'
import Task from '../Common/Task/Task'

function Dashboard(props) {
    const { user } = props;
    return (
        <div className={styles.Dashboard}>
            <div className={`flex justify-between w-full`}>
                <Goals user={user} />
                <Task user={user} />
            </div>
            <div className={`flex justify-between w-full`}>
                <Questions user={user} />
                <Rewards user={user} />
            </div>

        </div>
    )
}
export default Dashboard
