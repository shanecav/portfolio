/**
 * StaggeredRise
 *
 * @flow
 */

 import React from 'react'
 import { StaggeredMotion, presets, spring } from 'react-motion'
 import range from 'lodash/range'

 type Props = {
   children?: Array<any>,
 }

 class StaggeredRise extends React.Component {
   props: Props

   _getStyles = (prevStyles: Array<*>) => prevStyles.map((style, i) => {
     return i === 0
       ? {
         ...style,
         y: spring(0),
         o: spring(1),
       }
       : {
         ...style,
         y: spring(prevStyles[i - 1].y, presets.gentle),
         o: spring(prevStyles[i - 1].o, presets.gentle),
       }
   })

   render () {
     if (Array.isArray(this.props.children)) {
       return (
         <StaggeredMotion
           defaultStyles={range(this.props.children.length).map(n => ({y: 50, o: 0}))}
           styles={this._getStyles}
         >
           {interpolatingStyles =>
             <div>
               {interpolatingStyles.map((style, i) =>
                 <div key={i} style={{
                   opacity: style.o,
                   transform: `translate3d(0px, ${style.y}px, 0)`,
                 }}>
                   {React.Children.toArray(this.props.children)[i]}
                 </div>
               )}
             </div>
           }
         </StaggeredMotion>
       )
     }
     return null
   }
 }

 export default StaggeredRise
