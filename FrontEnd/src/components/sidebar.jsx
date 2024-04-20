import{useDispatch, useSelector} from 'react-redux'
import{Link, useNavigate} from 'react-router-dom'
import { logoutAction } from '../features/userSlice'

function Sidebar(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        // clear the session storage
        sessionStorage.removeItem('loginId')
        sessionStorage.removeItem('loginName')
    
        // set the login status to false
        dispatch(logoutAction())
    
        // navigate to login page
        navigate('/userLogin') 
    }

    return(
    <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper">
           <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
              <li class="active">
                 <span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> My Blogs
                 
              </li>
              <li>
                 <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>Shortcut</a>
                 <ul class="nav-pills nav-stacked" style="list-style-type:none;">
                    <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link1</a></li>
                    <li><a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span>link2</a></li>
                 </ul>
              </li>
              <li>
                 <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-cloud-download fa-stack-1x "></i></span>Overview</a>
              </li>
              <li>
                 <a href="#"> <span class="fa-stack fa-lg pull-left"><i class="fa fa-cart-plus fa-stack-1x "></i></span>Events</a>
              </li>
              <li>
                 <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-youtube-play fa-stack-1x "></i></span>About</a>
              </li>
              <li>
                 <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-wrench fa-stack-1x "></i></span>Services</a>
              </li>
              <li>
                 <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-server fa-stack-1x "></i></span>Contact</a>
              </li>
           </ul>
        </div>
    </div>
    )
}

export default Sidebar