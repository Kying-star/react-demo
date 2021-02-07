/*
 * @Author: your name
 * @Date: 2021-02-07 23:31:42
 * @LastEditTime: 2021-02-07 23:42:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/src/utils/AnimatedSwitch.js
 */
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import '../assets/style/AnimatedSwitch.css'

const AnimatedSwitch = props => {
    const { children } = props
    return (
        <Route
            render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames={props.type || 'fade'} 
                        timeout={props.duration || 300}
                    >
                        <Switch location={location}>{children}</Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}
        />
    )
}

export default AnimatedSwitch