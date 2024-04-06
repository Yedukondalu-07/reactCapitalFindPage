import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCountry = () => {
    const {activeCapital} = this.state

    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapital,
    )

    return activeCapitalAndCountry.country
  }

  render() {
    const {activeCapital} = this.state
    const country = this.getCountry(activeCapital)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapital}
            >
              {countryAndCapitalsList.map(eachcapital => (
                <option
                  className="option"
                  key={eachcapital.id}
                  value={eachcapital.id}
                >
                  {eachcapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
