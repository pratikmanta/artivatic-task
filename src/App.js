import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import DropDown from './Components/DropDown';
import Loading from './Components/Loading';
import MapComponent from './MapComponent';

class App extends Component {
  state = {
    data: [],
    loading: true,
    selectedState: [],
  };

  componentDidMount() {
    fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
      .then(response => {
        return response.json()
      })
      .then(data => this.setState({ data: data, loading: false }))
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    var selected = this.state.data.filter(elem => {
      if (elem.State === e.target.value) {
        return elem.City
      }
      else {
        return null;
      }
    })
    this.setState({ selectedState: selected })
  }

  renderCityList = (cities) => {
    return cities.map((el, idx) => {
      return (
        <div className="mt-2 pt-1" key={idx}>
          <h5>{el.City}</h5>
        </div>
      )
    })
  }

  render() {
    return (
      <Loading loading={this.state.loading}>
        <div className="container-fluid mt-4 p-4">
          <DropDown data={this.state.data} handleChange={this.handleChange} />
          <div className="container-fluid">
            <div className="row d-flex justify-content-evenly align-items-center m-2 p-2">
              {
                this.state.selectedState
                ?
                  <>
                    <div className="bg-dark rounded text-light col-sm-12 col-md-12 col-lg-6">
                      <div style={{ maxHeight: '75vh', overflowY: 'scroll' }} >
                        {this.renderCityList(this.state.selectedState)}
                      </div>
                    </div>
                    <div className="col-sm-12 w-100 col-md-12 col-lg-6">
                      <div className="mt-2">
                        <MapComponent data={this.state.selectedState} />
                      </div>
                    </div>
                  </>
                : null
              }
            </div>
          </div>

        </div>
      </Loading>
    );
  }
}

export default App;
