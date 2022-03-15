import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppCompWrap = (Component, idName, className) => function HOC() {
  return (
    <div id={idName} className={`app__container ${className}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
            <Component />
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppCompWrap