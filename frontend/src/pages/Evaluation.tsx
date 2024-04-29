import { Breadcrumb, Button, Card, Col, Divider, Layout, Row, Table, TableColumnsType, TableProps } from 'antd'
import NavSide from '../components/Navbar/NavSide'
import NavFooter from '../components/Navbar/NavFooter'
// import NavHeader from '../components/Navbar/NavHeader'
import { useState } from 'react'
// import React from 'react'

// Icon
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'


interface Data {
  state: boolean;
}
interface DataType {
  key: React.Key;
  name: string;
  score1: number;
  score2: number;
  score3: number;
}
const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    // defaultSortOrder: 'ascend',
    sorter: (a, b) => {
      // Convert names to lowercase for case-insensitive sorting
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
    sortDirections: ['descend'],
  },
  {
    title: 'Chinese Score',
    dataIndex: 'score1',
    sorter: (a, b) => a.score1 - b.score1,
  },
  {
    title: 'Math Score',
    dataIndex: 'score2',
    sorter: (a, b) => a.score2 - b.score2,
  },
  {
    title: 'English Score',
    dataIndex: 'score3',
    sorter: (a, b) => a.score3 - b.score3,
  },
];
const user = [
  {
    key: '1',
    name: 'John Brown',
    score1: 35,
    score2: 51,
    score3: 59,
  },
  {
    key: '2',
    name: 'Jim Green',
    score1: 45,
    score2: 73,
    score3: 64,
  },
  {
    key: '3',
    name: 'Joe Black',
    score1: 67,
    score2: 54,
    score3: 82,
  },
  {
    key: '4',
    name: 'Jim Red',
    score1: 54,
    score2: 82,
    score3: 75,
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Evaluation = () => {
  const { Header, Content } = Layout;
  const [collapse, setCollapsed] = useState(false)

  const data: Data = {
    state: collapse
  };

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

            <Row gutter={24}>
              <Col span={24} style={{ padding: "10px 0 5px 24px " }}>
                <Breadcrumb
                  items={[
                    {
                      title: 'Evaluation',
                    },
                    {
                      title: `Lists`,
                    },
                  ]}
                />
              </Col>
              <Col span={24}>
                <Card>
                  <Divider orientation='left' style={{ fontSize: 18 }}>Evaluation</Divider>
                  <Table
                    columns={columns}
                    dataSource={user}
                    onChange={onChange}
                    showSorterTooltip={{ target: 'sorter-icon' }}
                  />
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
export default Evaluation