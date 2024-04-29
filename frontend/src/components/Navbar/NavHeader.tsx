import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';

// Icon
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { RiAdminLine, RiDashboard2Line } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa6';
import { MdChecklistRtl, MdOutlinePolicy } from 'react-icons/md';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function NavHeader({ updateState = (collapseState: boolean) => { } }) {

  const { Header, Sider, Content, Footer } = Layout;
  const navigate = useNavigate()
  const location = useLocation()
  const [collapse, setCollapsed] = useState(false)
  updateState(collapse);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header className='header' style={{ background: colorBgContainer }}>
        <Button
          type='text'
          onClick={() => setCollapsed(!collapse)}
          icon={collapse ? <MenuUnfoldOutlined style={{ fontSize: '24px' }} /> :
            <MenuFoldOutlined style={{ fontSize: '24px' }} />}
        />
      </Header>
    </>
  )
}

export default NavHeader
