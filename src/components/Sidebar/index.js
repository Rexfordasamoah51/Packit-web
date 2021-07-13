import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

function Sidebar({click}) {
  return (
    <>
      <DesktopSidebar click={click}/>
      <MobileSidebar click={click} />
    </>
  )
}

export default Sidebar
