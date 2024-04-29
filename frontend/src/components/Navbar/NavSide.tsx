import { Layout, Menu } from 'antd';

// Icon
import { RiAdminLine, RiDashboard2Line } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa6';
import { MdChecklistRtl, MdOutlinePolicy } from 'react-icons/md';

import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface State {
  state: boolean;
}

function NavSide({ data }: { data: State }) {

  const { Sider } = Layout;
  const navigate = useNavigate()
  const location = useLocation()

  const [path, setPath] = useState(location.pathname.substring(0));
  if (path[path.length - 1] == "/") {
    setPath(path.slice(0, -1))
  }

  return (
    <>
      <Sider collapsed={data.state}
        collapsible
        trigger={null}
        width={250}
        className='sidebar'
      >
        {/* Logo */}
        <div className='logo'>
          <div className="logo-icon">
            DSPM
          </div>
        </div>

        {/* Menu */}
        <Menu
          theme="dark"
          mode="inline"
          className="menu-bar"
          selectedKeys={[path]}
          onClick={({ key }) => {
            navigate(key)
          }}
        >
          <Menu.Item key="/dashboard" icon={<RiDashboard2Line />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/evaluation" icon={<MdChecklistRtl />}>
            Evaluation
          </Menu.Item>
          <Menu.Item key="/policy" icon={<MdOutlinePolicy />}>
            Policy
          </Menu.Item>
          <Menu.Item key="/user" icon={<FaRegUser />}>
            User Management
          </Menu.Item>
          <Menu.Item key="/admin" icon={<RiAdminLine />}>
            Admin Management
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  )
}

export default NavSide
