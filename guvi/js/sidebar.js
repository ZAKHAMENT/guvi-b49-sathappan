const sidebar = (function sidebar() {
    const menuList = '#sidebar';
    const toggleicon = '#sidebarToggle .material-icons';
    const collapseClass = 'sidebar-collapse';
    const activeClass = 'active';
    const EventMenuOpened = 'shown.bs.collapse';
    const EventMenuClosed = 'hidden.bs.collapse';
    function handleMobileUI() {
        $(menuList).on(EventMenuClosed, ()=>$(toggleicon).html('menu'));
        $(menuList).on(EventMenuOpened, ()=>$(toggleicon).html('close'));
    }
    function toggleSidebar() {
        if ($(menuList).is(":hover")) {
            $(menuList).removeClass(collapseClass);
        }
        $(menuList).hover(()=>$(menuList).toggleClass(collapseClass));
    }
    function setActiveClass() {
        const path = location.pathname;
        const pgurl = path.substr(path.lastIndexOf('/') + 1, path.length);
        const page = pgurl.split('.')[0] || 'dashboard';
        const activeLink = page + "-link";
        $("." + activeLink).addClass(activeClass);
    }
    const init = ()=>{
        handleMobileUI();
        toggleSidebar();
        setActiveClass();
    }
    ;
    return {
        init
    };
}());
$(document).ready(function() {
    sidebar.init();
});
$(document).on("click", "#forum_link", function() {
    try {
        authorize.smartTechCEEvent('forum_link', {});
    } catch (error) {
        console.log(error);
    }
});
