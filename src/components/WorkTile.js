import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

class WorkTile extends React.Component {
  render() {
    return (
 <div className='w-33-ns w-33 dib pr4-ns pl0-ns mv3 v-top'>
 <a target='blank' href={this.props.link} >
 <img className='hoverable br5'src={this.props.img} alt='UX/UI'/>
 </a>

    <div className='pv2'>
      <h3 className='mt3 mb0'>{this.props.title}</h3>
      <p className='dib f7 secondary-text'>{this.props.info}</p>
      <p style={{lineHeight: '20px'}} className='secondary-text pb3 mt2 fw4 f6'>{this.props.summary}</p>

    </div>
</div>


    )
  }
}
WorkTile.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default WorkTile

