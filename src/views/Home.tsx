import { ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Vite Starter | React Typescript | React Query | Ant Design </h1>
        <Link to="about">
            <Button iconPosition='end' icon={<ArrowRightOutlined />}>About Page</Button>
        </Link>
      </div>
  )
}

export default Home