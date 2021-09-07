

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '200px',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'lighten',
    
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
   
    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
    alignItems: 'center'
  },
  details: {
    display: 'flex',
    justifyContent: 'right',
    backgroundColor:'lightgrey',
    position:'absolute'
  },
  title: {
    padding: '0px 15px',
  },
  cardActions: {
    position:'relative',
    padding: '0 16px 0px 16px',
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
    backgroundColor: '#FBFC82',
   
  },


  cardstyle: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-even'
  }
});