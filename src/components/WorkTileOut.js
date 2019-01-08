import React from 'react'
import PropTypes from 'prop-types';

class WorkTileOut extends React.Component {
  render() {
    return (
<div className='w-25-ns w-50 dib pl0-ns mv3 v-top'> 
<a target='blank' href={this.props.link} >
   <img style={{float: 'left', margin:'0px 10px 0px 0px'}} className='imgDes br5'src={this.props.img} alt='UX/UI'/>
   </a>
    <div   className='pv2'>
      <h3 className='mt3 mb0'>{this.props.title}</h3>
      <p  className='dib f7 secondary-text'>{this.props.info}</p>
      <p style={{lineHeight: '20px'}} className='secondary-text pb3 mt2 fw4 f6'>{this.props.summary}</p>
      <a className="link dim round dib w2-5  mr6 pa2 grow"  href={this.props.pdf}> </a>
    </div>
</div>

    )
  }
}

WorkTileOut.propTypes = {
  link: PropTypes.string.isRequired,
  pdf: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default WorkTileOut

