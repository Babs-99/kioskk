import React from 'react';
import { Jumbotron, Container, Col, Image, CardDeck } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row } from 'react-bootstrap';
import cabinbagimg from '../../assets/img/icons/cabinbag.png'
import infoimg from '../../assets/img/icons/info.png'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import ToggleButton from '@material-ui/lab/ToggleButton';
import './ButtonCard.css'

const useStyles = makeStyles({
  root: {
        width: '100%',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        backgroundColor: 'transparent',
      "&:active ": {
          backgroundColor: 'rgb(222, 235, 249)',
          outline: 0
        },
      "&:focus": {
          backgroundColor: 'rgb(222, 235, 249)',
          outline: 0
        },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardd: {
    "&:hover": {
        background: "#efefef"
      }
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [selected, setSelected] = React.useState(false);

  return (
    <div style={{ backgroundColor: '#ffffff', paddingxx: '20px', borderRadius: '5px'}}>
        <div classNamexx="justify-content-md-center" style={{ backgroundColor: 'transparent', padding: '20px', widthxx:'600px'}}>
            <p style={{color: '#043f7c'}}> <span><b style={{marginTopxx: '58px'}}>Class &amp; Fare</b></span> <span style={{float: 'right'}}> <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc', marginBottom: '18px'}} width='40px' src={airpeaceimg} alt="" roundedCircle /></span></p>
        </div>
        <hr className='mb-4' style={{color: '#043f7c'}}/>
        <Row style={{ padding: '10px', marginBottom: '10px', marginTop: '20px', marginLeft: '0px', marginRight: '0px'}}>
            <Col md={4} className='mb-4 MuiToggleButton-root'>
                  {/* <Card className={classes.root} variant="outlined" style={{padding: '20px', focus: 'blue', cursor: 'pointer', backgroundColor: 'rgb(222, 235, 249)'}}> */}
                  <button className={classes.root} variant="outlined" style={{padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            First Class
                        </Typography>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Checked Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Full Refundable</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Seat Selection</span>
                        <br/>
                        <br/>
                        <br/>
                        <h4 style={{color: '#000000'}}> &#8358;561,083 </h4>
                      </CardContent>
                      </button>
                {/* </Card> */}
            </Col>
            <Col md={4} className='mb-4'>
                <button className={classes.root} variant="outlined" style={{padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Business Class
                        </Typography>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Checked Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Semi Refundable</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Seat Selection</span>
                        <br/>
                        <br/>
                        <br/>
                        <h4 style={{color: '#000000'}}> &#8358;285,940 </h4>
                    </CardContent>
                </button>
            </Col>
            <Col md={4} className='mb-4'>
                <button className={classes.root} variant="outlined" style={{padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        Economy
                        </Typography>
                        <br/>
                        <span style={{color: '#000000'}} className='mb-4'> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}} className='mb-4'> <Image src={infoimg} alt=""/> Non Refundable</span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        <h4 style={{color: '#000000'}}> &#8358;199,145 </h4>
                    </CardContent>
                </button>
            </Col>
        </Row>
        <div className="justify-content-md-center" style={{ backgroundColor: 'transparent', paddingLeft: '25px', paddingBottom: '10px', widthxx:'600px'}}>
            <p> <span><b style={{color: '#043f7c'}}>Read more</b> about these fares</span> </p>
        </div>
    </div>
  );
}