import { Outlet, Link } from 'react-router-dom'
import styles from './ProjectsNav.module.css';

function ProjectsNav() {
    return (
        <>
            <nav className={styles.projectsNav}>
                <ul>
                    <li><Link to='/'>Animated Countdown</Link></li>
                    <li><Link to='/AnimatedNavigation'>Animated Navigation</Link></li>
                    <li><Link to='/AutoTextEffect'>Auto Text Effect</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                    <li><Link to='/BackgroundSlider'>Background Slider</Link></li>
                </ul>
            </nav>
            <Outlet/> 
        </>
    )
}

export default ProjectsNav;
