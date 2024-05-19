import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { getJoke } from '../api/SampleApi'

const About = () => {
    const {data, isLoading} = useQuery({ queryKey: ['api1'], queryFn: getJoke })

  return (
    <div>
        <h1>React router v6 used for routing and Tanstack React query for api handling.</h1>
        {
            isLoading ?
            <LoadingOutlined /> :
            <h3>How is the weather in {data?.data?.city}, {data?.data?.country}?</h3>
        }
        <Link to="/">
            <Button icon={<ArrowLeftOutlined />}>Back to home</Button>
        </Link>
      </div>
  )
}

export default About