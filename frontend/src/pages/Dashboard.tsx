import { DatePicker,  Button, Card, Col, Divider, Layout, Row, Tabs, TabsProps, Segmented } from 'antd'
import NavSide from '../components/Navbar/NavSide'
import NavFooter from '../components/Navbar/NavFooter'
// import NavHeader from '../components/Navbar/NavHeader'
import { useState } from 'react'
// import React from 'react'

// Icon
import { MenuUnfoldOutlined, MenuFoldOutlined, CaretUpOutlined, CaretDownOutlined, InfoCircleOutlined } from '@ant-design/icons'

interface Data {
  state: boolean;
}

const Dashboard = () => {
  const { Header, Content } = Layout;
  const { RangePicker } = DatePicker;
  const [collapse, setCollapsed] = useState(false)

  const data: Data = {
    state: collapse
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Sales',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Visits',
      children: 'Content of Tab Pane 2',
    },
  ];

  return (
    <>
      <Layout>
        <NavSide data={data} />
        <Layout>
          <Header className='header' style={{ background: "white" }}>
            <Button
              type='text'
              onClick={() => setCollapsed(!collapse)}
              icon={collapse ? <MenuUnfoldOutlined style={{ fontSize: '24px' }} /> :
                <MenuFoldOutlined style={{ fontSize: '24px' }} />}
            />
          </Header>

          {/* Content */}
          <Content className='content'>
            {/* Content */}
            <Divider orientation='left' style={{ fontSize: 18 }}>Dashboard</Divider>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <Card>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 12, color: 'gray' }}>Total Sales</div>
                    <div style={{ fontSize: 12 }}><a><InfoCircleOutlined style={{ color: 'black' }} /></a></div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: "bold" }}>$ 126,560</div>
                  <div style={{ fontSize: 12 }}>WoW Change 12% <CaretUpOutlined style={{ color: "green" }} /></div>
                  <div style={{ fontSize: 12 }}>DoD Change 11% <CaretDownOutlined style={{ color: "red" }} /></div>
                  <Divider style={{ margin: "5px 0" }} />
                  <div style={{ fontSize: 12 }}>Daily Sales $ 12,423</div>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 12, color: 'gray' }}>Visit</div>
                    <div style={{ fontSize: 12 }}><a><InfoCircleOutlined style={{ color: 'black' }} /></a></div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: "bold" }}>8,846</div>
                  <div style={{ fontSize: 12 }}>// Data 1</div>
                  <div style={{ fontSize: 12 }}>// Data 2</div>
                  <Divider style={{ margin: "5px 0" }} />
                  <div style={{ fontSize: 12 }}>Daily Visits 1,234</div>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 12, color: 'gray' }}>Payments</div>
                    <div style={{ fontSize: 12 }}><a><InfoCircleOutlined style={{ color: 'black' }} /></a></div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: "bold" }}>6,560</div>
                  <div style={{ fontSize: 12 }}>// Data 1</div>
                  <div style={{ fontSize: 12 }}>// Data 2</div>
                  <Divider style={{ margin: "5px 0" }} />
                  <div style={{ fontSize: 12 }}>Conversion Rate 60%</div>
                </Card>
              </Col>

              {/* Row 2 */}
              <Col span={24}>
                <Card>
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    tabBarExtraContent={
                      <div style={{ display: 'flex' }}>
                        <Segmented<string>
                          options={['Day', 'Week', 'Month', 'Year']}
                          onChange={(value) => {
                            console.log(value); // string
                          }}
                          style={{ marginRight: "20px" }}
                        />
                        <RangePicker />
                      </div>
                    } />
                </Card>
              </Col>
            </Row>
          </Content>

          {/* Footer */}
          <NavFooter />

        </Layout>
      </Layout>


    </>
  )
}
export default Dashboard