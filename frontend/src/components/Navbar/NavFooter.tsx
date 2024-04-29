import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';

// Icon
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { RiAdminLine, RiDashboard2Line } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa6';
import { MdChecklistRtl, MdOutlinePolicy } from 'react-icons/md';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function NavFooter() {

  const { Header, Sider, Content, Footer } = Layout;
  const navigate = useNavigate()
  const location = useLocation()
  const [collapse, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Footer className='footer'>
        <div>DSPM ©2018 Created by SUT</div>
      </Footer>
    </>
  )
}

export default NavFooter
