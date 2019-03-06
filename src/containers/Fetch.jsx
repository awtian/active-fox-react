import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getHeroes} from '../store/actions/apiActions'

class Fetch extends Component {
  componentDidMount () {
    this.props.getHeroes()
  }

  render() {
    return (
      <div style={{backgroundColor: '#444', marginTop: 0, paddingTop: '10px', color: 'whitesmoke'}}>
        {this.props.loading ? 
          <h1>tunggu dulu yach</h1> : 
          <div>{this.props.heroes.map(hero => {
            return (
              <div key={hero.id}>
              <img src={'https://api.opendota.com'+ hero.icon} alt={hero.localized_name} />
              <p>{hero.localized_name}</p>
              </div>
              )
          })}
          </div>
          } 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  heroes: state.api.heroes,
  loading: state.api.loading,
  error: state.api.error
})

const mapDispatchToProps = (dispatch) => ({
  getHeroes: () => dispatch(getHeroes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Fetch)

