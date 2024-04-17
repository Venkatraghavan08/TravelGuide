import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuide from './components/TravelGuide'
import './App.css'

class App extends Component {
  state = {
    isLoading: true,
    dataList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const formatData = data.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.imageUrl,
        description: eachItem.description,
      }))
      this.setState({isLoading: false, dataList: formatData})
      console.log(formatData)
    }
  }

  loadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {dataList} = this.state
    return (
      <ul className="list-container">
        {dataList.map(each => (
          <TravelGuide key={each.id} details={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        <div className="card">
          {isLoading ? this.loadingView() : this.successView()}
        </div>
      </div>
    )
  }
}

export default App
