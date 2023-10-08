import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Image from './Image';
import './Style.css'


function BasicExample() {
  return (
    <Card style={{ width: '18rem' }} className='css'>
      <Image ></Image>
      <Card.Body>
        <Card.Title><Name></Name></Card.Title>
        <Card.Text>
          <Description></Description>
        </Card.Text>
        <Button variant="primary"><Price></Price></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;