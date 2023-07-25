import './ThemeSelector.css';
import React from 'react'
import {useTheme} from '../hooks/useTheme'

	const themeColors = ['#420420', '#003366', '#bada55']


function ThemeSelector() {
	const { changeColor } = useTheme()


  return (
	 <div className='theme-selector'>
		<div className="theme-buttons">
			{themeColors.map(color => (
				<div 
					key={color}
					onClick={() => changeColor(color)}
					style={{background: color}}
				/>
			))}
		</div>
	 </div>
  )
}

export default ThemeSelector
