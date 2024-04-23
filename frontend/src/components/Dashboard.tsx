import { Card, Col, Row, Space, Statistic, Table, Typography } from 'antd'
// import React from 'react'

const Dashboard = () => {
  return (
    <div>
      {/* <Space direction='horizontal'>
        <Card className='card'>
          <div className='card-title'>Value 1</div>
          <Typography.Title>
            11111
          </Typography.Title>
        </Card>
        <Card className='card'>
          <div className='card-title'>Value 2</div>
          <Typography.Title>
            22222
          </Typography.Title>
        </Card>
        <Card className='card'>
          <div className='card-title'>Value 3</div>
          <Typography.Title>
            33333
          </Typography.Title>
        </Card>
      </Space> */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h2>แดชบอร์ด</h2>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card style={{ backgroundColor: "#F5F5F5" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Card
                  bordered={false}
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Statistic
                    title="จำนวน"
                    value={1800}
                    // prefix={<StockOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Card
                  bordered={false}
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Statistic
                    title="จำนวน"
                    value={200}
                    valueStyle={{ color: "black" }}
                    // prefix={<AuditOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Card
                  bordered={false}
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Statistic
                    title="จำนวน"
                    value={3000}
                    valueStyle={{ color: "black" }}
                    // prefix={<PieChartOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Card
                  bordered={false}
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Statistic
                    title="จำนวน"
                    value={10}
                    valueStyle={{ color: "black" }}
                    // prefix={<UserOutlined />}
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h3>ผู้ใช้งานล่าสุด</h3>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {/* <Table columns={columns} dataSource={data} /> */}
        </Col>
      </Row>
    </div>
  )
}
export default Dashboard