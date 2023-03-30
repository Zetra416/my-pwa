

export default function Sidebar() {

    return (
        <div class="sidebar">
            <ul class="sidebar-menu">
                <li class="sidebar-menu-item active">
                <a href="#">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                </li>
                <li class="sidebar-menu-item">
                <a href="#">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </a>
                </li>
                <li class="sidebar-menu-item">
                <a href="#">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
                </li>
                <li class="sidebar-menu-item">
                <a href="#">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
                </li>
            </ul>
        </div>
    )
    
}