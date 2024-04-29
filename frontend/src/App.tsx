// import { Button, Layout, Menu, theme } from 'antd';
// import { useState } from 'react';

// // Icon
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
// import { RiAdminLine, RiDashboard2Line } from 'react-icons/ri';
// import { FaRegUser } from 'react-icons/fa6';
// import { MdChecklistRtl, MdOutlinePolicy } from 'react-icons/md';
// import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

// // Component
// import Dashboard from './pages/Dashboard';
// import Evaluation from './pages/Evaluation';
// import Policy from './pages/Policy';
// import UserManagement from './pages/UserManagement';
// import AdminManagement from './pages/AdminManagement';

// function App() {

//   const { Header, Sider, Content, Footer } = Layout;
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [collapse, setCollapsed] = useState(false)
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   return (
//     <>
//       <Layout>
//         <Sider collapsed={collapse}
//           collapsible
//           trigger={null}
//           width={250}
//           className='sidebar'
//         >
//           {/* Logo */}
//           <div className='logo'>
//             <div className="logo-icon">
//               DSPM
//             </div>
//           </div>

//           {/* Menu */}
//           <Menu
//             theme="dark"
//             mode="inline"
//             className="menu-bar"
//             selectedKeys={[location.pathname.substring(1)]}
//             onClick={({ key }) => {
//               navigate(key)
//             }}
//           >
//             <Menu.Item key="dashboard" icon={<RiDashboard2Line />}>
//               Dashboard
//             </Menu.Item>
//             <Menu.Item key="evaluation" icon={<MdChecklistRtl />}>
//               Evaluation
//             </Menu.Item>
//             <Menu.Item key="policy" icon={<MdOutlinePolicy />}>
//               Policy
//             </Menu.Item>
//             <Menu.Item key="user" icon={<FaRegUser />}>
//               User Management
//             </Menu.Item>
//             <Menu.Item key="admin" icon={<RiAdminLine />}>
//               Admin Management
//             </Menu.Item>
//           </Menu>
//         </Sider>

//         <Layout>
//           <Header className='header' style={{ background: colorBgContainer }}>
//             <Button
//               type='text'
//               onClick={() => setCollapsed(!collapse)}
//               icon={collapse ? <MenuUnfoldOutlined style={{ fontSize: '24px' }} /> :
//                 <MenuFoldOutlined style={{ fontSize: '24px' }} />}
//             />
//           </Header>

//           {/* Content */}
//           <Content className='content'>
//             <Routes>
//               <Route path='/dashboard' element={<Dashboard />}></Route>
//               <Route path='/evaluation' element={<Evaluation />}></Route>
//               <Route path='/policy' element={<Policy />}></Route>
//               <Route path='/user' element={<UserManagement />}></Route>
//               <Route path='/admin' element={<AdminManagement />}></Route>
//             </Routes>
//           </Content>

//           {/* Footer */}
//           <Footer className='footer'>
//             <div>DSPM ©2018 Created by SUT</div>
//           </Footer>

//         </Layout>
//       </Layout>
//     </>
//   )
// }

// export default App
